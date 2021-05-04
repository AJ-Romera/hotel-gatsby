import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function ImagenHotel() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "1.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)

  console.log(image)

  return <h1>Imagen Aquí</h1>
}

export default ImagenHotel
