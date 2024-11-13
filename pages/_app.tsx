import Layout from "@/common/components/Layout";

import "@/styles/vendor.css";
import "@/styles/base.css";
import "@/styles/main.css";
import "@/styles/micons.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/js/modernizr.js" strategy="afterInteractive"/>
      <Script src="/js/pace.min.js" strategy="afterInteractive"/>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="/js/jquery-2.1.3.min.js" strategy="beforeInteractive"/>
      <Script src="/js/plugins.js" strategy="beforeInteractive"/>
      <Script src="/js/main.js" strategy="afterInteractive"/>
    </>
  );
}
