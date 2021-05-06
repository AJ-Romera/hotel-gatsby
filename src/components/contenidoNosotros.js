import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

function ContenidoNosotros() {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
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
  `)

  // console.log(resultado.allDatoCmsPagina.nodes[0]);

  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0]

  return (
    <>
      <h2>{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <Image
          fluid={imagen.fluid}
          alt="Parte del hotel con vistas al mar, piscinas de lujo, paseos, zona chill-out"
        />
      </div>
    </>
  )
}

export default ContenidoNosotros
