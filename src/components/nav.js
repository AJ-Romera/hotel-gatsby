import React from "react"

import { Link } from "gatsby"

function Navegacion() {
  return (
    <nav>
      <Link to={"/"}>Inicio</Link>
      <Link to={"/nosotros"}>Nosotros</Link>
    </nav>
  )
}

export default Navegacion
