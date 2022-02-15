import {
  ServerResponse,
  IncomingMessage,
  IncomingHttpHeaders
} from "http";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
import { Resolvers } from "@/cache/__types__";
export interface ResolverContext {
  req?: IncomingMessage;
  res?: ServerResponse;
}
// import { GraphQLLet } from ".graphql-let.yml";
import { ApolloLink, FetchResult, RequestHandler } from "@apollo/client";
import { signInUserMutation } from "@/graphql/generated/graphql";
const x = (props: Resolvers<ResolverContext>) => ({ ...props });
const browser = typeof window !== "undefined";
const envEndpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/graphql"
    : "http://[::1]:3000/graphql";
const uri =
  typeof window === "undefined"
    ? envEndpoint
    : "http://localhost:3000/graphql";

export const enhancedFetch = async (
  url: RequestInfo,
  init: RequestInit,
  req: IncomingHttpHeaders
) => {
  return await fetch((url = uri), {
    ...init,
    headers: {
    authorization: `Bearer ${
      req.authorization?.split(/([ ])/)[1]
        ? req.authorization.split(/([ ])/)[1]
        : req.cookies
        ? req.cookies.includes("jwt")
          ? (req.cookies as string[])
          : ""
        : ""
    }`,
      ...init.headers,    },
    keepalive: true,
    credentials: "include",
    mode: "cors",
    cache: "default",
    method: "POST"
  }).then(response => response);
};
export function createBatch<T extends ResolverContext>(context?: T) {
  return new BatchHttpLink({
    uri: "http://localhost:3000/graphql",
    credentials: "include",
    includeExtensions: true,
    batchInterval: 10,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": ["access-control-allow-headers"],
      "Access-Control-Expose-Headers": "*, authorization",
      Authorization:
        "Bearer " + context?.req?.headers.authorization?.split(/([ ])/)[1]
    },
    fetchOptions: {
      context: () => ({ ...context })
    },
    ...fetch
  });
}
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }) =>
      console.log(
        JSON.stringify(
          `[GraphQL error]: \n [Message]: ${message}, \n [Location]: ${locations}, \n [Path]: ${path}, \n [Extension]: ${extensions}`,
          null,
          2
        )
      )
    );
  if (networkError)
    console.log(
      JSON.stringify(
        `[Network error]: Nest is unreachable... \n
          [name]: ${networkError.name} \n
          [message]: ${networkError.message} \n
          [stack]: ${networkError.stack}`,
        null,
        2
      )
    );
});
export const nextSesh = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    // catches incoming session token to store in LS
    // check for session header & update session in LS accordingly
    // const context = operation.getContext();
    // const jsonStringContext = JSON.stringify(context ?? "no context", null, 2)
    // console.log(context ?? {});

    // const header = req?.headers.authorization?.split(/([ ])/)[1];
    const { data, context, errors, extensions } = response as FetchResult<
      Record<
        string,
        any extends signInUserMutation ? signInUserMutation : any
      >,
      Record<string, any>,
      Record<string, any>
    >;

    console.log("context: " + context ?? "no context");
    console.log("errors: " + errors ?? "no errors");
    console.log("extensions: " + extensions ?? "no extensions");
    const session = data?.signin;
    if (session?.auth?.accessToken && !!browser) {
      if (
        window.localStorage.getItem("authorization") !==
        session.auth.accessToken
      ) {
        browser && window.localStorage.removeItem("authorization");
        window.localStorage.setItem(
          "authorization",
          session.auth.accessToken
        );
      }
    }
    // if (data?.signin.auth?.accessToken) {

    //   res?.setHeader("authorization", ("Bearer "+data.signin.auth.accessToken).trim())
    // } else if (header != null) {
    //   res?.setHeader("authorization", ("Bearer "+header).trim())

    // }
    const jsonString = JSON.stringify(
      (response as unknown as FetchResult<
        signInUserMutation | unknown,
        Record<string, any>,
        Record<string, any>
      >) ?? "no res",
      null,
      2
    );
    console.log("response: " + jsonString ?? "no response");
    return response;
  });
});
