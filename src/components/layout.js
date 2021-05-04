import React from "react"
import Header from "./header"
import Helmet from "react-helmet"

function Layout(props) {
  return (
    <>
      <Helmet>
        <title>Hotel Gatsby</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      {props.children}
    </>
  )
}

export default Layout
