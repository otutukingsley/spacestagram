import React from 'react'
import { Nav } from './componentStyles/NavbarStyles'

const Navbar = () => {
  return (
    <Nav>
      <nav className="nav-bar">
        <div className="wrapper nav-wrapper">
          <div className="headings">
            <h1 className="nav-heading">Spacestagram</h1>
            <h5 className="nav-text">brought to you by NASA's image API</h5>
          </div>
          <a
            href="https://github.com/otutukingsley/spacestagram"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            View Project Repo
          </a>
        </div>
      </nav>
    </Nav>
  )
}

export default Navbar
