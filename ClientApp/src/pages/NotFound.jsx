import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Header />
      <div class="notFound-divTable">
        <div class="notFound-divTableBody">
          <div class="notFound-divTableRow">
            <div class="notFound-divTableCell">
              <h1>404 - That slice of pizza can't be found.</h1>
            </div>
            <div class="notFound-divTableCell">
              <img
                alt="pizza"
                src="https://res.cloudinary.com/matthewdick/image/upload/v1587860902/download_xqlhzk.jpg"
              />
            </div>
          </div>
          <div class="notFound-divTableRow">
            <div class="notFound-divTableCell">
              {' '}
              <h1>Click on this slice to go to the home page.</h1>
            </div>
            <div class="notFound-divTableCell">
              <Link to="/">
                <img
                  alt="slice"
                  src="https://res.cloudinary.com/matthewdick/image/upload/v1587861005/download-1_xlqc2f.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound
