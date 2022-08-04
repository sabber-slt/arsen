import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import Head from "next/head";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
