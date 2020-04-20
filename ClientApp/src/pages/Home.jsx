import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export function Home() {
  return (
    <div>
      <Header />
      <div class="top-wrapper"></div>
      <div class="center">
        <h1>
          Parisi Pizza – is dedicated to serving only the highest quality food,
          as fast as possible, for pick up or delivery!
        </h1>
        <h2>Order pizza, pasta & more online for carryout or delivery</h2>
        <div class="center-images">
          <div class="left-image">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/main-pizza_ktipx4.jpg"
              alt="pizza"
            />
          </div>
          <div class="welcome-message">
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
          <div class="right-image">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/ziti_mf4oem.jpg"
              alt="Ziti"
            />
          </div>
        </div>
        <div class="hours-wine">
          <div class="hours">
            {/* <div class="divTableHours">
              <div class="divTableBodyHours">
                <div class="divTableRowHour">
                  <div class="divTableCellHours">&nbsp;</div>
                  <div class="divTableCellHours">&nbsp;</div>
                  <div class="divTableCellHours">&nbsp;</div>
                  <div class="divTableCellHours">&nbsp;</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Monday&nbsp;</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">10:00 PM</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Tuesday</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">10:00 PM</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Wednesday</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">10:00 PM</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Thursday</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">10:00 PM</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Friday</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">11:00 PM</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Saturday</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">11:00 PM</div>
                </div>
                <div class="divTableRowHours">
                  <div class="divTableCellHours">Sunday</div>
                  <div class="divTableCellHours">11:00 AM</div>
                  <div class="divTableCellHours">-</div>
                  <div class="divTableCellHours">10:00 PM</div>
                </div>
              </div>
            </div> */}
            <table>
              <tr>
                <td className="hours-top" colspan="2" align="center">
                  <h3>Our business hours</h3>
                </td>
              </tr>
              <tr>
                <td>Monday</td>
                <td>11:00 AM - 10:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>11:00 AM - 10:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>11:00 AM - 10:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>11:00 AM - 10:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>11:00 AM - 11:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>11:00 AM - 11:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>11:00 AM - 10:00 PM</td>
              </tr>
            </table>
          </div>
          <div class="wine">
            <h3>We have great wine selections</h3>
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340364/wine-bottles_ip9k0a.jpg"
              alt="Bottles of wine"
            />
          </div>
        </div>
        {/* Below is the div for the bottom of the center portion */}
      </div>
      <Footer />
    </div>
  )
}
