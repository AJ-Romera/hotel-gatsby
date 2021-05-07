import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"

function Layout(props) {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "Roboto", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Grand Hotel", cursive;
          }
          h3 {
            font-family: "Roboto", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>Hotel Gatsby</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
