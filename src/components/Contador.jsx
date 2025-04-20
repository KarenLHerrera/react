import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [contador,setContador]=useState(0)
    const [mensaje,setMensaje]=useState(false)
    const aumentar =()=>{
        setContador(contador+1)
    }
    const restar =()=>{
        setContador(contador-1)
    }
    const handleMostrar=()=>{
        setMensaje(true)
    }
    const handleOcultar =()=>{
        setMensaje(false)
    }

    return (
    <div>
        <div>{contador}</div>
        <button onClick={aumentar}>sumar</button><button onClick={restar}>restar</button>
        <br /><br /><br />
        { !mensaje&& <button onClick={handleMostrar}>Mostrar Mensaje</button>}
        
        { mensaje && <div>
        <h3>Hola Soy un Mensaje a mostrar</h3>
        <button onClick={handleOcultar}>Ocultar</button></div>
        }
    </div>
  )
}

export default Contador
