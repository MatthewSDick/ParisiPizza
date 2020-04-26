import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="notFound-top" style={{ border: '1px solid blue' }}>
        <div className="notFound-top-left" style={{ border: '1px solid red' }}>
          <h1>404 - That slice of pizza is missing and can't be found.</h1>
        </div>
        <div
          className="notFound-top-right"
          style={{ border: '1px solid yellow' }}
        >
          <img
            alt="pizza"
            src="https://res.cloudinary.com/matthewdick/image/upload/v1587860902/download_xqlhzk.jpg"
          />
        </div>
      </div>
      <div className="notFound-bottom">
        <div className="notFound-bottom-left">
          <h1>Click on this slice to go to the home page.</h1>
        </div>
        <div className="notFound-bottom-right">
          <img
            alt="slice"
            src="https://res.cloudinary.com/matthewdick/image/upload/v1587861005/download-1_xlqc2f.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound
