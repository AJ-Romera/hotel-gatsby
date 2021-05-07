import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

function HabitacionTemplate({ data }) {
  console.log(data)

  return <h1>Desde habitaciones.js</h1>
}

export default HabitacionTemplate
