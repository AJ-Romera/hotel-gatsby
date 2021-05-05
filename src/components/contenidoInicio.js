import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function ContenidoInicio() {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  console.log(informacion)

  return (
    <>
      <h2>Título de Página</h2>
    </>
  )
}

export default ContenidoInicio
