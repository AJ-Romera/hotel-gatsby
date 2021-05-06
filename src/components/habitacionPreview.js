import React from "react"
import Image from "gatsby-image"

function HabitacionPreview({ habitacion }) {
  const { titulo, contenido, imagen, slug } = habitacion

  return (
    <div>
      <Image fluid={imagen.fluid} alt="Habitación" />
      <div>
        <h3>{titulo}</h3>
        <p>{contenido}</p>
      </div>
    </div>
  )
}

export default HabitacionPreview
