import { ConfigService } from "@nestjs/config";
import { ApolloDriverConfig } from "@nestjs/apollo";
import { Inject, Injectable } from "@nestjs/common";
import { GqlOptionsFactory } from "@nestjs/graphql";
import {
  ApolloConfig,
  GraphqlConfig
} from "./common/config/config-interfaces.config";
import { AuthService } from "./auth/auth-jwt.service";
import { Context } from "src/app.module";
import { AuthDetailed } from "./auth/model/auth-detailed.model";
import internal from "stream";

export type ParsedUrlQuery<
  T extends string,
  N extends NodeJS.Dict<T | T[keyof T]>
> = N[T];

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(
    private configService: ConfigService,
    @Inject<typeof AuthService>(AuthService)
    private readonly authService: AuthService
  ) {}
  createGqlOptions(): ApolloDriverConfig {
    const graphqlConfig = this.configService.get<GraphqlConfig>("graphql");
    const apolloConfig = this.configService.get<ApolloConfig>("apollo");

    return {
      // schema options
      autoSchemaFile: graphqlConfig?.schemaDestination || "./src/schema.gql",
      sortSchema: graphqlConfig?.sortSchema ? graphqlConfig.sortSchema : true,
      // subscription
      installSubscriptionHandlers: true,
      apollo: {
        key: apolloConfig?.key ?? process.env.APOLLO_KEY ?? undefined
      },
      autoTransformHttpErrors: true,
      buildSchemaOptions: { dateScalarMode: "isoDate" },
      typeDefs: "./node_modules/.prisma/client/index.d.ts",
      definitions: {
        path: "src/graphql.schema.ts",
        outputAs: "class",
        emitTypenameField: true
      },
      playground: true,
      debug: true,
      introspection: true,
      cors: {
          methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
          maxAge: 0,
          origin: true, // reflects dynamic origin -- Vary
          allowedHeaders: [
            "Access-Control-Allow-Methods",
            "Access-Control-Expose-Headers",
            "apollographql-client-name",
            "access-control-allow-headers",
            "Access-Control-Allow-Origin",
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept",
            "Apollo-Federation-Include-Trace",
            "Authorization",
            "Cache-Control",
            "Vary",
            "Content-Length",
            "Cookie",
            "Accept-Encoding",
            "Transfer-Encoding",
            "Connection",
            "Referrer",
            "Referrer-Policy",
            "X-Csrf-Token",
            "Woocommerce-Session",
            "Accept-Charset",
            "Forwarded",
            "Host",
            "From",
            "ETag",
            "Retry-After",
            "Server",
            "Set-Cookie",
            "Trailer",
            "User-Agent",
            "Upgrade",
            "X-XSS-Protection",
            "Upgrade-Insecure-Requests",
            "Session",
            "authorization"
          ],
          credentials: true,
          exposedHeaders: ["*", "authorization", "Authorization"],
          optionsSuccessStatus: 204,
          preflightContinue: false
      },
      // plugins: [
      //   ApolloServerPluginLandingPageLocalDefault(),
      //   ApolloServerPluginInlineTrace()
      // ],
      fieldResolverEnhancers: ["guards"],
      context: async ({
        req,
        res,
        token = req.headers.authorization?.split(/([ ])/)[2] ?? null
      }: Context) => {
        try {
          if (token != null && token.length > 10) {
            const viewerId = (
              (await this.authService.getUserWithDecodedToken(
                token
              )) as AuthDetailed
            ).jwt.payload.userId;
            res.setHeader("authorization", `Bearer ${token}`);
            return {
              req,
              res,
              token,
              viewerId: viewerId
            };
          } else {
            return { req, res, token: null, viewerId: null };
          }
        } catch (error) {
          throw new Error(`error in gql-config.service.ts: ${error}`);
        }
        // finally {
        //   res.emit("pipe", new internal.Readable({ emitClose: true }))
        // }
      }
    };
  }
}
