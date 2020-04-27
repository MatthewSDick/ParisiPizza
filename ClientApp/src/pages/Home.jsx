import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export function Home() {
  return (
    <div>
      <Header />
      <div className="top-wrapper"></div>
      <div className="center">
        <h1>
          Parisi Pizza – is dedicated to serving only the highest quality food,
          as fast as possible, for pick up or delivery!
        </h1>
        <h2>Order pizza, pasta & more online for carryout or delivery</h2>
        <div className="center-images">
          <div className="left-image">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/main-pizza_ktipx4.jpg"
              alt="pizza"
            />
          </div>
          <div className="welcome-message">
            <p className="message">
              Thank you for choosing Parisi Pizza – Fresh Italian catering
              delivering the finest Pasta, Pizza, Soup and freshly prepared
              Italian food. Ideal for a casual lunch and all your office
              catering needs. Come and join us for the best in Italian food. All
              our sauce’s dough and breads are made fresh daily on premises with
              the freshest ingredients available.
              <span style={{ color: '#FAC123' }}> Buon Appetito…</span>
            </p>
          </div>
          <div className="right-image">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/ziti_mf4oem.jpg"
              alt="Ziti"
            />
          </div>
        </div>
        <div className="hours-wine">
          <div className="hours">
            <h3>Business Hours</h3>
            <div className="divTableHours">
              <div className="divTableBodyHours">
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Monday</div>
                  <div className="divTableCellHours">11:00 AM - 10:00 PM</div>
                </div>
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Tuesday</div>
                  <div className="divTableCellHours">11:00 AM - 10:00 PM</div>
                </div>
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Wednesday</div>
                  <div className="divTableCellHours">11:00 AM - 10:00 PM</div>
                </div>
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Thursday</div>
                  <div className="divTableCellHours">11:00 AM - 10:00 PM</div>
                </div>
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Friday</div>
                  <div className="divTableCellHours">11:00 AM - 11:00 PM</div>
                </div>
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Saturday</div>
                  <div className="divTableCellHours">11:00 AM - 11:00 PM</div>
                </div>
                <div className="divTableRowHours">
                  <div className="divTableCellHours">Sunday</div>
                  <div className="divTableCellHours">11:00 AM - 10:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="wine">
            <h3>We have great wine selections</h3>
            <img
              className="wine-bottles"
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340364/wine-bottles_ip9k0a.jpg"
              alt="Bottles of wine"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
