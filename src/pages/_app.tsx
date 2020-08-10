import React from "react";
import App from "next/app";
import Head from "next/head";

import "../styles/index.scss";

import Store from "../store/store";
import { Header } from "../components";

import { Provider } from "mobx-react";
const store = new Store();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <Header name={store.name}></Header>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
