import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./header";

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <title>CrowdCoin</title>
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
