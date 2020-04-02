import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CartPage = () => {
  return (
    <div>
      <Header />
      <div
        className="divTable"
        style={{ borderColor: 'black', borderStyle: '1px', color: 'white' }}
      >
        <div className="divTableBody">
          <div className="divTableRowHeader">
            <div className="divTableCellDelete">
              <p style={{ color: '#CA0707' }}>.></p>
            </div>
            <div className="divTableCellPic">
              <p style={{ color: '#CA0707' }}>.></p>
            </div>
            <div className="divTableCellProduct">
              <p>Product</p>
            </div>
            <div className="divTableCellPrice">
              <p>Price</p>
            </div>
            <div className="divTableCellQuantity">
              <p>Quantity</p>
            </div>
            <div className="divTableCellTotal">
              <p>Total</p>
            </div>
          </div>
          {/* Looping items */}
          <div className="divTableRow">
            <div className="divTableCellDelete">
              <p>X</p>
            </div>
            <div className="divTableCellPic">
              <p>Pic Here</p>
            </div>
            <div className="divTableCellProduct">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellPrice">
              <p>$12.95</p>
            </div>
            <div className="divTableCellQuantity">
              <p>2</p>
            </div>
            <div className="divTableCellTotal">
              <p>$25.09</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellDelete">
              <p>X</p>
            </div>
            <div className="divTableCellPic">
              <p>Pic Here</p>
            </div>
            <div className="divTableCellProduct">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellPrice">
              <p>$12.95</p>
            </div>
            <div className="divTableCellQuantity">
              <p>2</p>
            </div>
            <div className="divTableCellTotal">
              <p>$25.09</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellDelete">
              <p>X</p>
            </div>
            <div className="divTableCellPic">
              <p>Pic Here</p>
            </div>
            <div className="divTableCellProduct">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellPrice">
              <p>$12.95</p>
            </div>
            <div className="divTableCellQuantity">
              <p>2</p>
            </div>
            <div className="divTableCellTotal">
              <p>$25.09</p>
            </div>
          </div>
          {/* end looping items */}
          <div className="divTableFooter">
            <div className="divTableCellDelete">
              <p></p>
            </div>
            <div className="divTableCellPic">
              <p></p>
            </div>
            <div className="divTableCellProduct">
              <p></p>
            </div>
            <div className="divTableCellPrice">
              <p></p>
            </div>
            <div className="divTableCellQuantity">
              <button className="add-to-cart">UPDATE CART</button>
            </div>
            <div className="divTableCellTotal">
              <button className="add-to-cart">EMPTY CART</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="divTableCartBottom"
        style={{ borderColor: 'black', borderStyle: '1px', color: 'white' }}
      >
        <div className="divTableBodyCart">
          <div className="divTableRow">
            <div className="divTableCellCartLeft">
              <p>Sub Total: </p>
            </div>
            <div className="divTableCellCartRight">
              <p>$99.99</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellCartLeft">
              <p>Tax: </p>
            </div>
            <div className="divTableCellCartRight">
              <p>$9.99</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellCartLeft">
              <p>Total: </p>
            </div>
            <div className="divTableCellCartRight">
              <p>$99.99</p>
            </div>
          </div>
          <div className="divTableRowCartButton">
            {/* <div className="divTableCellCartLeft">
              <p></p>
            </div> */}
            <div className="divTableCellCartButton">
              <button className="add-to-cart">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CartPage
