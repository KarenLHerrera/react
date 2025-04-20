import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Contador from './Contador'

const Home = () => {
    const persona={
        nombre:"Karen",
        apellido:"Herrera",
        lenguajes:"CSS, HTML,Js",
        dastos:"Diseño Grafico"
    }
    let nombre= "Karen"

  return (
    <div>
      <Header nombre={nombre}></Header>
      <Main  persona={persona}></Main>
      <Contador></Contador>
      <Footer></Footer>
    </div>
  )
}

export default Home
