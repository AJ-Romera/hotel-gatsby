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

  // console.log(informacion.allDatoCmsPagina.nodes[0])

  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

  return (
    <>
      <h2>{titulo}</h2>
      <div>
        <p>{contenido}</p>
        <img
          src={imagen.fluid.src}
          alt="Hotel de Lujo con Palmeras, piscinas de ensueño, situado en el Caribe"
        />
      </div>
    </>
  )
}

export default ContenidoInicio
