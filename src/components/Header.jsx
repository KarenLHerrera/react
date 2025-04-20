import React from 'react'
import karen from '../assets/karen.jpg'

const Header = ({nombre}) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <img src={karen} alt="" />

    </div>
  )
}

export default Header
