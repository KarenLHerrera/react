import React from 'react'

const Main = ({persona}) => {
  return (
    <div>
      <p>Hola Soy {persona.nombre} {persona.apellido} estudiante de programacion de la UTN-FRT y se programar con lenguajes {persona.lenguajes} y tambien puedo  tengo conocimientos en {persona.datos}</p>
    </div>
  )
}

export default Main
