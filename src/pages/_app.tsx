import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/index.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
