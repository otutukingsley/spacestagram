import React from 'react'
import { Nav } from './componentStyles/NavbarStyles'

const Navbar = () => {
  return (
    <Nav>
      <div className="wrapper">
        <h1 className="nav-heading">Spacestagram</h1>
        <p className="nav-text">brought to you by NASA's image API</p>
      </div>
    </Nav>
  )
}

export default Navbar
