import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+Display:wght@400;700&family=Noto+Sans:wght@300;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    {/* <Image src={youtubeImg} width={500} height={350} alt="preview" /> */}
  </Layout>
);

export default MyApp;
