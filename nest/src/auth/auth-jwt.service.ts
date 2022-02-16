import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../password";
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException
} from "@nestjs/common";
import { User } from "../user/model/user.model";
import { JwtService } from "@nestjs/jwt";
import { SignupInput } from "./inputs/signup.input";
import { prisma, Prisma } from "@prisma/client";
import { AuthDetailed } from "./model/auth-detailed.model";
import { Token } from "./model/token.model";
import { ConfigService } from "@nestjs/config";
import { JwtDecoded } from "./dto/jwt-decoded.dto";
import { SecurityConfig } from "../common/config/config-interfaces.config";
// import { Auth, AuthSansSession } from "./model/auth.model";
// import { Session } from "../session/model/session.model";
// import { Role } from "src/.generated/prisma-nestjs-graphql/prisma/enums/role.enum";
import { LoginInput } from "./inputs";
import { Serializer } from "src/common/types/json.type";
import crypto from "crypto";
import { PrismaClientValidationError } from "@prisma/client/runtime";
import { MimeTypes } from "src/.generated/prisma-nestjs-graphql/prisma/enums/mime-types.enum";
import { serialize, parse } from "cookie";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService
  ) {
  }

  public maxAge=60*60*360; // 360 hours ~ 15 days
  setTokenCookie(res: Response, token: string) {
    const authConfig = this.configService.get<SecurityConfig>("security");
    const cookie = serialize(authConfig?.secret ? authConfig.secret : `${process.env.JWT_SECRET ?? ""}`, token, {
      maxAge: this.maxAge, // 360 hours ~ 15 days
      expires: new Date(Date.now() + this.maxAge * 1000),
      httpOnly: false,
      secure: process.env.NODE_ENV === "production" ? true : false,
      path: "/",
      sameSite: "lax"
    });
    return res.setHeader("Set-Cookie", cookie);
  }




  async createUser(payload: SignupInput): Promise<Token> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password
    );
    try {
      const user = await this.prismaService.user.create({
        data: {
          ...payload,
          email: payload.email,
          password: hashedPassword,
          role: payload.email.includes("andrew@windycitydevs.io")
            ? "SUPERADMIN"
            : payload.email.includes("andrew.simpson.ross@gmail.com")
            ? "SUPERADMIN"
              : "USER",
          image: payload.image ?? "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g4apn65eo8acy988pfhb.gif",
          firstName: payload.firstName,
          lastName: payload.lastName,
          status: "ONLINE",
          createdAt: new Date(Date.now()),
          emailVerified: new Date(Date.now())
        }
      });
      return this.generateTokens({
        userId: user.id
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === "P2002"
      ) {
        throw new ConflictException(`Email ${payload.email} already used.`);
      } else {
        throw new Error(e as any);
      }
    }
  }
  excludeUserOrViewerField<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }
  async getUserWithDecodedToken(token: string) {
    const id = this.jwtService.decode(token, {
      complete: true
    }) as JwtDecoded;
    const user = await this.validateUser(id.payload.userId);
    const { accessToken, refreshToken } = this.generateTokens({
      userId: id.payload.userId ? id.payload.userId : ""
    });

    return await this.prismaService.user
      .update({
        where: { id: id.payload.userId },
        include: { _count: true, mediaItems: true, sessions: true },
        data: {
          status: { set: "ONLINE" },
          updatedAt: { set: new Date(Date.now()) },
          sessions: {
            upsert: [
              {
                update: {
                  accessToken: accessToken,
                  alg: { set: id.header.alg },
                  exp: {
                    set: id.payload.exp
                  },
                  iat: {
                    set: id.payload.iat
                  },
                  refreshToken: { set: refreshToken },
                  signature: { set: id.signature },
                  provider: {
                    set: id.header.typ
                  },
                  lastVerified: { set: new Date(Date.now()) },
                  scopes: {
                    set:
                      user?.role === "SUPERADMIN"
                        ? ["read", "write", "edit", "administer", "impersonate"]
                        : user?.role === "ADMIN"
                        ? ["read", "write", "edit", "administer"]
                        : user?.role === "MAINTAINER"
                        ? ["read", "write", "edit"]
                        : ["read", "write"]
                  },
                  tokenState: { set: "valid" }
                },
                where: { userId: id.payload.userId },
                create: {
                  accessToken: accessToken,
                  alg: id.header.alg,
                  exp: id.payload.exp,
                  iat: id.payload.iat,
                  refreshToken: refreshToken,
                  signature: id.signature,
                  provider: id.header.typ,
                  lastVerified: new Date(Date.now()),
                  scopes:
                    user?.role === "SUPERADMIN"
                      ? ["read", "write", "edit", "administer", "impersonate"]
                      : user?.role === "ADMIN"
                      ? ["read", "write", "edit", "administer"]
                      : user?.role === "MAINTAINER"
                      ? ["read", "write", "edit"]
                      : ["read", "write"],
                  tokenState: "valid"
                }
              }
            ]
          }
        }
      })
      .then(data => {
        return {
          session: data.sessions,
          user: { ...data }
        };
      })
      .then(async results => ({
        auth: {
          accessToken,
          refreshToken,
          session: results.session[0],
          user: results.user
        },
        jwt: id
      }));
  }
  async signIn({ email, password }: LoginInput, getUser?: {accessToken: string}): Promise<AuthDetailed> {
    if (!email || email === new NotFoundException(`email`).message) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }



    const hash = await this.passwordService.hashPassword(password);
    const passwordValid = await this.passwordService.validatePassword({
      password: password,
      encryptedPassword: hash
    });

    if (passwordValid == false) {
      throw new PrismaClientValidationError("Invalid password"+process.exitCode);
    }

    const userInfoo = await this.prismaService.user
      .findFirst({
        where: {
          email: email
        },
        select: { id: true }
      })
      .then(id => id)
      .then(id => {
        return this.generateTokens({ userId: id?.id ? id.id : "" });
      })
      .then(async ({ accessToken }) => accessToken);

    const { jwt, auth } = await this.getUserWithDecodedToken(
      userInfoo ? userInfoo : ""
    );

    const userInfo = await this.prismaService.user
      .update({
        where: { id: auth.user?.id ? auth.user.id : "" },
        include: { _count: true, mediaItems: true, sessions: true },
        data: {
          updatedAt: new Date(Date.now()),
          status: "ONLINE",
          sessions: {
            connectOrCreate: [
              {
                where: { userId: jwt.payload.userId },
                create: {
                  accessToken: userInfoo ?? auth.accessToken,
                  alg: jwt.header.alg,
                  exp: jwt.payload.exp,
                  iat: jwt.payload.iat,
                  refreshToken: auth.refreshToken,
                  signature: jwt.signature,
                  provider: jwt.header.typ,
                  lastVerified: new Date(Date.now()),
                  scopes: ["read", "write"],
                  tokenState: "VALID"
                }
              }
            ]
          }
        }
      })
      .then(data => data);
    const dataSpread = { session: userInfo.sessions, user: { ...userInfo } };

    return {
      auth: {
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        session: dataSpread.session[0],
        user: dataSpread.user
      },
      jwt: jwt
    };
  }

  async login(email: string, password: string): Promise<Token> {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const passwordValid = await this.passwordService.validatePassword({
      encryptedPassword:
        user.password ?? (await this.passwordService.hashPassword(password)),
      password: password
    });

    if (!passwordValid) {
      throw new PrismaClientValidationError("Invalid password").message;
    }

    return this.generateTokens({
      userId: user.id
    });
  }

  async validateUser(userId: string | null) {
    return await this.prismaService.user.findUnique({
      include: { _count: true, mediaItems: true },
      where: { id: userId ? userId : "" }
    });
  }

  toBase64Url(data: AuthDetailed) {
    return Buffer.from(
      new Serializer<AuthDetailed>().serialize(
        JSON.parse("authDetailed", () => ({
          reviver: (key: RegExp, value: AuthDetailed) => ({
            this: this,
            key: /([test ])/ === key,
            value: data === value
          })
        }))
      )
    );
  }

  getUserFromToken(token: string) {
    console.log(token ?? "");

    const id = this.jwtService.decode(token, {
      complete: true
    }) as JwtDecoded;
    return this.prismaService.user.findUnique({
      include: { _count: true, mediaItems: true },
      where: { id: id.payload.userId }
    });
  }

  generateTokens(payload: { userId: string }): Token {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload)
    };
  }

  private generateAccessToken(payload: { userId: string }) {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { userId: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>("security");
    return this.jwtService.sign(payload, {
      secret: securityConfig?.secret
        ? securityConfig.secret
        : process.env.JWT_ACCESS_SECRET
        ? process.env.JWT_ACCESS_SECRET
        : ""
    });
  }

  async updatePassword(
    updatePasswordInput: { oldPassword: string; newPassword: string },
    tokenFromContext: string
  ): Promise<User> {
    return await this.getUserFromToken(tokenFromContext)
      .then(async dataUser => {
        const crossCompare = await this.passwordService.validatePassword({
          password: updatePasswordInput.oldPassword,
          encryptedPassword: dataUser?.password ? dataUser.password : ""
        });

        if (crossCompare === false) {
          throw new PrismaClientValidationError("Invalid password").message;
        }
        return {
          user: dataUser,
          validationResult: crossCompare
        };
      })
      .then(async data => {
        return await this.prismaService.user.update({
          where: data.user?.id
            ? { id: data.user.id }
            : { email: data.user?.email },
          data: {
            password: await this.passwordService.hashPassword(
              updatePasswordInput.newPassword
            ),
            status: "ONLINE",
            updatedAt: new Date(Date.now())
          }
        });
      }).then(user => user)
  }

  async refreshToken(id: string) {
    try {
      const secuityConfig = this.configService.get<SecurityConfig>("security");
      const user = await this.jwtService.verifyAsync(id, {
        secret: this.configService.get(
          secuityConfig?.refreshSecret
            ? secuityConfig.refreshSecret
            : process.env.JWT_REFRESH_SECRET
            ? process.env.JWT_REFRESH_SECRET
            : "JWT_REFRESH_SECRET"
        )
      });
      console.log(user ?? "");
      return this.generateTokens({
        userId: user.userId
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
  // async PrismaViewer(
  //   prisma: PrismaService["user"] = this.prismaService.user,
  //   authService: AuthService
  // ): Promise<void>{
  //   const createViewer = Object.assign(prisma, {
  //     async signUpViewer<T extends Viewer>(viewer: T) {
  //       const signupViewer: Viewer = await prisma.create({
  //         include: { _count: true, mediaItems: true },
  //         data: {
  //           email: viewer.email,
  //           firstName: viewer.firstName,
  //           lastName: viewer.lastName,
  //           createdAt: new Date(Date.now()),
  //           password: viewer.password,
  //           role: "USER",
  //           status: "ONLINE",
  //           image: [
  //             {
  //               id: viewer.mediaItems?.find(id => id)?.id,
  //               uploadedAt: new Date(Date.now()).toUTCString()
  //             },
  //             {
  //               fileLastModified: viewer.mediaItems
  //                 ?.find(fileLastModified => fileLastModified)
  //                 ?.fileLastModified?.toUTCString(),
  //               quality: viewer.mediaItems?.find(quality => quality)?.quality,
  //               filename: viewer.mediaItems?.find(filename => filename)?.name,
  //               src: viewer.mediaItems?.find(src => src)?.src,
  //               srcSet: viewer.mediaItems?.find(srcSet => srcSet)?.srcSet,
  //               type:
  //                 viewer.mediaItems?.find(type => type)?.type ?? MimeTypes.PNG,
  //               size: viewer.mediaItems?.find(size => size)?.size,
  //               width: viewer.mediaItems?.find(width => width)?.width,
  //               height: viewer.mediaItems?.find(height => height)?.height
  //             },
  //             {
  //               unique: `${viewer.id}_${viewer.mediaItems?.find(name => name)?.name
  //                 }`
  //             }
  //           ],
  //           mediaItems: {
  //             create: {
  //               fileLastModified: viewer.mediaItems
  //                 ?.find(fileLastModified => fileLastModified)
  //                 ?.fileLastModified?.toUTCString(),
  //               quality: viewer.mediaItems?.find(quality => quality)?.quality,
  //               name: viewer.mediaItems?.find(filename => filename)?.name,
  //               src:
  //                 viewer.mediaItems?.find(src => src)?.src != null
  //                   ? viewer.mediaItems.find(src => src)?.src
  //                   : "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g4apn65eo8acy988pfhb.gif",
  //               srcSet: viewer.mediaItems?.find(srcSet => srcSet)?.srcSet,
  //               type:
  //                 viewer.mediaItems?.find(type => type)?.type != null
  //                   ? viewer.mediaItems.find(type => type)?.type
  //                   : "GIF",
  //               size: viewer.mediaItems?.find(size => size)?.size,
  //               width: viewer.mediaItems?.find(width => width)?.width,
  //               height: viewer.mediaItems?.find(height => height)?.height
  //             }
  //           },
  //           profile: {
  //             create: {
  //               lastSeen: new Date(Date.now()),
  //               memberSince: new Date(Date.now()),
  //               recentActivity: [
  //                 {
  //                   signedUp: `Created an account on ${new Date(Date.now())
  //                     .toUTCString()
  //                     .split(/([T])/)} 🎉`
  //                 }
  //               ]
  //             }
  //           }
  //         }
  //       }).then((user) => ({
  //         viewer: { accessToken: authService.generateTokens({ userId: user.id }).accessToken, ...user },
  //       }).viewer).finally(() => Promise.resolve({})).then((viewer) => viewer);

  //       return { viewerCreated: (createViewer), signUpViewer: signupViewer };
  //     }

  //   });
  //   // const signInViewer = (email: string, password: string) =>
  //   //   authService.signIn({ email, password });
  //   // const getViewerAccesssToken = (context: string) =>
  //   //   authService.generateTokens({ userId: context });
  //   // return Object.assign(prisma, {
  //   //   async getViewer(data: GetViewer) {

  //   //     const viewer = await authService.getUserFromToken(
  //   //       data.accessToken ? data.accessToken : ""
  //   //     );
  //   //     const findPrismaViewer = await prisma.findFirst({
  //   //       include: { _count: true, mediaItems: true },
  //   //       where: {
  //   //         OR: [
  //   //           { id: viewer?.id ? viewer.id : "" },
  //   //           {
  //   //             email: viewer?.email ? viewer.email : ""
  //   //           }
  //   //         ]
  //   //       }
  //   //     })
  //   //     return findPrismaViewer
  //   //       ? ({
  //   //           accessToken: getViewerAccesssToken(findPrismaViewer.id)
  //   //             .accessToken,
  //   //           ...findPrismaViewer
  //   //         } as Viewer)
  //   //       : findPrismaViewer;
  //   //   }
  //   // });
  // }
