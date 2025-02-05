import {
  Resolver,
  ResolveField,
  Info,
  Context,
  GqlContextType,
  GqlExecutionContext
} from "@nestjs/graphql";
import { UserMeta } from "src/common/decorators/user.decorator";
import { AppContext } from "src/gql-config.service";
import { User } from "src/user/model/user.model";
import { GetViewer, Viewer } from "./model/viewer-extends-prisma.model";
import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma";
import { AuthService } from "src/auth/auth-jwt.service";
import { PrismaClientUnknownRequestError } from "@prisma/client/runtime";
import { XOR } from "src/common/types/helpers.type";
import { nanoid } from "nanoid";
import { MimeTypes } from "src/.generated/prisma-nestjs-graphql/prisma/enums/mime-types.enum";
import { ViewerDetailed } from "src/auth/model";
@Injectable()
export class ViewerService {
  constructor(
    @Inject(PrismaService)
    private readonly prismaService: PrismaService["user"],
    @Inject(AuthService) private readonly authService: AuthService
  ) {}

  excludeUserField<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }

  excludeViewerField<Viewer, Key extends keyof Viewer>(
    viewer: Viewer,
    ...keys: Key[]
  ): Omit<Viewer, Key> {
    for (const key of keys) {
      delete viewer[key];
    }
    return viewer;
  }

  s() {
    const p = this.PrismaViewer;
  }

  async PrismaViewer(
    prisma: PrismaService["user"] = this.prismaService,
    authService = this.authService
  ) {
    const createViewer = Object.assign(prisma, {
      async signUpViewer<T extends Viewer>(viewer: T) {
        const signupViewer: Viewer = await prisma
          .create({
            include: { _count: true, mediaItems: true },
            data: {
              email: viewer.email,
              firstName: viewer.firstName,
              lastName: viewer.lastName,
              createdAt: new Date(Date.now()),
              password: viewer.password,
              role: "USER",
              status: "ONLINE",
              image:
                viewer.image ??
                "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g4apn65eo8acy988pfhb.gif",
              //   [
              //   {
              //     id: viewer.mediaItems?.find(id => id)?.id,
              //     uploadedAt: new Date(Date.now()).toUTCString()
              //   },
              //   {
              //     fileLastModified: viewer.mediaItems
              //       ?.find(fileLastModified => fileLastModified)
              //       ?.fileLastModified?.toUTCString(),
              //     quality: viewer.mediaItems?.find(quality => quality)?.quality,
              //     filename: viewer.mediaItems?.find(filename => filename)?.name,
              //     src: viewer.mediaItems?.find(src => src)?.src,
              //     srcSet: viewer.mediaItems?.find(srcSet => srcSet)?.srcSet,
              //     type:
              //       viewer.mediaItems?.find(type => type)?.type ?? MimeTypes.PNG,
              //     size: viewer.mediaItems?.find(size => size)?.size,
              //     width: viewer.mediaItems?.find(width => width)?.width,
              //     height: viewer.mediaItems?.find(height => height)?.height
              //   },
              //   {
              //     unique: `${viewer.id}_${viewer.mediaItems?.find(name => name)?.name
              //       }`
              //   }
              // ],
              mediaItems: {
                create: {
                  fileLastModified: viewer.mediaItems
                    ?.find(fileLastModified => fileLastModified)
                    ?.fileLastModified?.toUTCString(),
                  quality: viewer.mediaItems?.find(quality => quality)?.quality,
                  name: viewer.mediaItems?.find(filename => filename)?.name,
                  src:
                    viewer.mediaItems?.find(src => src)?.src != null
                      ? viewer.mediaItems.find(src => src)?.src
                      : "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g4apn65eo8acy988pfhb.gif",
                  srcSet: viewer.mediaItems?.find(srcSet => srcSet)?.srcSet,
                  type:
                    viewer.mediaItems?.find(type => type)?.type != null
                      ? viewer.mediaItems.find(type => type)?.type
                      : "GIF",
                  size: viewer.mediaItems?.find(size => size)?.size,
                  width: viewer.mediaItems?.find(width => width)?.width,
                  height: viewer.mediaItems?.find(height => height)?.height
                }
              },
              profile: {
                create: {
                  lastSeen: new Date(Date.now()),
                  memberSince: new Date(Date.now()),
                  recentActivity: JSON.stringify([
                    {
                      signedUp: `Created an account on ${new Date(Date.now())
                        .toUTCString()
                        .split(/([T])/)} 🎉`
                    }
                  ])
                }
              }
            }
          })
          .then(
            user =>
              ({
                viewer: {
                  accessToken: authService.generateTokens({ userId: user.id })
                    .accessToken,
                  ...user
                }
              }.viewer)
          )
          .finally(() => Promise.resolve({}))
          .then(viewer => viewer);

        return { viewerCreated: createViewer, signUpViewer: signupViewer };
      }
    });
    const signInViewer = (email: string, password: string) =>
      authService.signIn({ email, password }).then(data => {
        const { viewer } = {
          viewer: {
            accessToken: data.auth.accessToken,
            refreshToken: data.auth.refreshToken,
            secret: data.jwt.signature,
            ...data.auth.user
          } as ViewerDetailed
        };
        return viewer as ViewerDetailed;
      });
    const getViewerAccesssToken = (token: string) =>
      ({
        tokens: authService.generateTokens({ userId: token })
      }.tokens);
    const getViewerTokes = getViewerAccesssToken;
    return {
      viewerOptions: createViewer,
      signUpViewer: createViewer.signUpViewer,
      signInViewer: signInViewer,
      getViewerTokes: getViewerTokes
    };
    // return Object.assign(prisma, {
    //   async getViewer(data: GetViewer): Promise<ViewerDetailed | PrismaClientUnknownRequestError> {
    //     const viewer = await authService.getUserFromToken(
    //       data.accessToken ? data.accessToken : ""
    //     );
    //     const findPrismaViewer = await prisma.findFirst({
    //       include: { _count: true, mediaItems: true },
    //       where: {
    //         OR: [
    //           { id: viewer?.id ? viewer.id : "" },
    //           {
    //             email: viewer?.email ? viewer.email : ""
    //           }
    //         ]
    //       }
    //     });
    //     if (!findPrismaViewer) {
    //       return new PrismaClientUnknownRequestError(
    //         `could not process ${findPrismaViewer}`,
    //         `could not get ${findPrismaViewer}`
    //       );
    //     }
    //     return findPrismaViewer
    //       ? ({
    //           accessToken: getViewerAccesssToken(findPrismaViewer.id)
    //           .accessToken,
    //         refreshToken: getViewerAccesssToken(findPrismaViewer.id).refreshToken,
    //         secret: (viewerId: string) => (await authService.getUserWithDecodedToken(getViewerAccesssToken(viewerId)!.accessToken).then((data) => data.jwt)).signature
    //           ...findPrismaViewer
    //         } as Viewer)
    //       : findPrismaViewer;
    //   }
    // });
  }
}
