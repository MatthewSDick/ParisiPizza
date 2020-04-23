import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <h4 className="footer-name">© Parisi Pizza St Petersburg</h4>
        <h4 className="footer-address">
          12345 Main Street St Petersburg, FL 33456
        </h4>
        <div className="social">
          <a href="https://www.facebook.com">
            <span className="dot-facebook"></span>
          </a>
          <a href="https://www.instagram.com">
            <span className="dot-instagram"></span>
          </a>
          <a href="https://www.twitter.com">
            <span className="dot-twitter"></span>
          </a>
          <a href="https://www.pinterest.com">
            <span className="dot-pintrest"></span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
