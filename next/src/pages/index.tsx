import { CookieValueTypes } from "cookies-next/lib/types";
import { Inspector } from "@/components/UI";
import { ViewerQuery } from "@/graphql/queries/viewer.graphql";
import {
  ApolloError,
  ApolloQueryResult,
  NormalizedCacheObject,
  TypedDocumentNode
} from "@apollo/client";
import { useRouter } from "next/router";
import cn from "classnames";
import { TypeScript } from "@/components/Icons";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { UnwrapInputProps, UnwrapButtonProps } from "@/types/mapped";
import {
  signInUserDocument,
  usesignInUserMutation,
  signInUserMutation,
  AuthDetailed,
  signInUserMutationResult,
  signInUserMutationVariables,
  namedOperations,
  Viewer,
  ViewerQueryVariables
} from "@/graphql/generated/graphql";
import { setCookies } from "cookies-next";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage
} from "next";
import * as SuperJSON from "superjson";
import { QueryDocumentKeys } from "graphql/language/visitor";
import { ParsedUrlQuery } from "@/types/query-parser";
import { initializeApollo } from "@/apollo/apollo";
import Layout from "@/components/Layout/layout";

type userImageJsonField = {
  id: string;
  uploadedAt: string;
  fileLastModified: string;
  filename: string;
  src: string;
  srcSet: string;
  type: MimeTypes;
  size: string;
  width: number;
  quality: number;
  height: number;
  title: string;
  ariaLabel: string;
  caption: string;
  destination: MediaItemDestination;
  unique: string;
};

const ReusableInput = ({
  ...props
}: UnwrapInputProps<
  | "onInput"
  | "type"
  | "required"
  | "onChange"
  | "name"
  | "className"
  | "id"
  | "alt"
  | "aria-label"
  | "autoComplete"
  | "formTarget"
  | "aria-current"
  | "ref"
  | "onKeyUp"
  | "maxLength"
  | "minLength"
  | "value"
>) => <input {...props} />;
export type IndexProps = {
  viewerServer: ViewerQuery;
  parseAuthHeaderFromNest: string;
  normalizedCacheObject: NormalizedCacheObject;
  cookiesCalled: CookieValueTypes;
};
// typedViewerDocument: TypedDocumentNode<ViewerQuery, ViewerQueryVariables>
export default function Index() {
  const router = useRouter();

  const [
    signInMutation,
    {
      data: signInData,
      client: signInClient,
      loading: signInLoading,
      called: signinCalled,
      reset: signInReset,
      error: signInError
    }
  ] = usesignInUserMutation({
    mutation: signInUserDocument,

    refetchQueries: [{ query: Viewer }]
  });

  const [accessTokenVal, setAccessTokenVal] = useState<string | null>(
    null
  );
  const [emailState, setEmailState] = useState<string | null>(null);
  const [passwordState, setPasswordState] = useState<string | null>(null);

  const [authDetailedState, setAuthDetailedState] =
    useState<AuthDetailed | null>(null);

  useEffect(() => {
    (async function authIIFE() {
      authDetailedState != null
        ? setTimeout(() => {
            const getLs = window.localStorage.getItem("authorization");
            if (getLs && getLs.length > 0)
              window.sessionStorage.setItem("authorization", getLs);
            setAccessTokenVal(
              authDetailedState.auth?.accessToken
                ? authDetailedState.auth.accessToken
                : ""
            );
          }, 4000)
        : () => {};
    })();
    if (authDetailedState != null) {
      fetch(
        "http://localhost:3000/api/auth/token/" +
          authDetailedState.auth?.accessToken,
        {
          headers: {
            authorization: "Bearer " + authDetailedState.auth?.accessToken
          }
        }
      );
    }
  }, [authDetailedState, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const variables = new FormData(event.currentTarget);
    const emailElement = event.currentTarget.elements.namedItem("email");
    const passwordElement =
      event.currentTarget.elements.namedItem("password");
    console.log(emailElement ?? "no email element");
    console.log(passwordElement ?? "no pw element");

    const { email, password } = Object.fromEntries(variables);
    console.log(email ?? "");
    console.log(password ?? "");
    setEmailState(email.toString());
    setPasswordState(password.toString());
    try {
      return await signInMutation({
        variables: {
          loginInput: {
            email: `${email}` ?? emailState,
            password: `${password}` ?? passwordState
          }
        }
      })
        .then(async data => {
          data.data?.signin != null
            ? setAuthDetailedState(data.data.signin)
            : setAccessTokenVal(null);
          return data;
        })
        .finally(() => Promise.resolve({}));
    } catch (err) {
      new ApolloError({ ...signInError });
      throw new Error(`${err}`).message;
    }
  }

  return (
    <>
      <div className={cn("sm:mx-auto sm:w-full sm:max-w-2xl")}>
        <div className='max-w-5xl'>
          <TypeScript className='mx-auto min-w-full w-32 h-18' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>
          Sign in to your account
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Or{" "}
          <Link href='/register' as='/register' passHref scroll={true}>
            <a className='font-medium text-blue-600 hover:text-blue-500'>
              create a new account
            </a>
          </Link>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-4xl'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          {authDetailedState !== null ? (
            <>
              <Inspector>
                {JSON.stringify(accessTokenVal, null, 2)}
              </Inspector>
              <Inspector>
                {JSON.stringify(authDetailedState, null, 2)}
              </Inspector>
            </>
          ) : (
            <form
              method='POST'
              onSubmit={handleSubmit}
              className='space-y-6'>
              <fieldset disabled={signInLoading} aria-busy={signInLoading}>
                <div>
                  <label
                    htmlFor='email'
                    className='sr-only block text-sm font-medium text-gray-700'>
                    Email
                  </label>
                  <div className='my-1'>
                    <ReusableInput
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      onInput={e => {
                        e.preventDefault();
                        return e.currentTarget.value;
                      }}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block sr-only text-sm font-medium text-gray-700'>
                    Password
                  </label>
                  <div className='my-1'>
                    <ReusableInput
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      onInput={e => {
                        e.preventDefault();
                        return e.currentTarget.value;
                      }}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm'
                    />
                  </div>
                </div>
                <div className='my-1'>
                  <div className='text-sm'>
                    <Link
                      href='/forgot-password'
                      as={"/forgot-password"}
                      passHref
                      scroll={true}>
                      <a className='font-medium text-blue-600 hover:text-blue-500'>
                        {"\n Forgot your password?"}
                      </a>
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    disabled={signInLoading}
                    type='submit'
                    className='w-2/3 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                    {signInLoading ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

Index.Layout = Layout;
/*
    { refetchQueries: [namedOperations.Query.myQuery] }
https://www.graphql-code-generator.com/plugins/named-operations-object
               */
// const sessionCb = useCallback((authDetailed: AuthDetailed) => {

//   const objectToSerialize = {
//     scaffold: {
//       user: authDetailed.auth?.user,
//       accessToken: authDetailed.auth?.accessToken,
//       refreshToken: authDetailed.auth?.refreshToken,
//       session: authDetailed.auth?.session,
//       jwt: authDetailed.jwt
//     },
//     timestamp: new Date(Date.now()),
//     id: /authDetailed/
//   }

//   const { json, meta } = SuperJSON.serialize(objectToSerialize as typeof objectToSerialize)
//   if (window.sessionStorage.getItem("superSession") != null) {

//   }
//   SuperJSON.default.stringify({user: authDetailedState ? authDetailedState as AuthDetailed : {}})
//   window.sessionStorage.setItem("superSession", SuperJSON.default.stringify({user: authDetailedState ? authDetailedState as AuthDetailed : {}}))
// }, [])
