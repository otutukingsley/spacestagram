import React from 'react'
import { CopyRight } from './componentStyles/FooterStyles'

const Footer = () => {
  return (
    <CopyRight>
      <div className="wrapper footer-wrapper">
        <p className="footer-text">
          &copy; Copyright 2022 - Completed by Otutu Chinedu
        </p>
        <a
          href="https://github.com/otutukingsley/spacestagram"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          View Project Repo
        </a>
      </div>
    </CopyRight>
  )
}

export default Footer
