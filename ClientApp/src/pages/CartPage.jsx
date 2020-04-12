import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import axios from 'axios'

const CartPage = () => {
  const [cartItems, setCartItems] = useState({
    cartData: [],
    isLoaded: false,
  })
  // var orderID = 30
  var orderID = sessionStorage.getItem('orderID')
  const GetCartInfo = async () => {
    const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
    console.log(response.data)
    setCartItems({
      cartData: response.data,
      isLoaded: true,
    })

    // console.log(cartData)
  }

  useEffect(() => {
    GetCartInfo()
  }, [])

  if (!cartItems.isLoaded) {
    return <h2>Loading...</h2>
  } else {
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
              {/* <div className="divTableCellQuantity">
                <p>Quantity</p>
              </div> */}
              {/* <div className="divTableCellTotal">
                <p>OrderTotal</p>
              </div> */}
            </div>
            {/* Looping items */}

            {cartItems.cartData.orderItems.map(item => {
              return (
                <CartItem
                  name={item.item.name}
                  imagePath={item.item.imagePath}
                  price={item.item.price}
                  id={item.item.id}
                />
              )
            })}
            {/* End Loop */}

            <div className="divTableFooter">
              <div className="divTableCellDelete">
                <p></p>
              </div>
              <div className="divTableCellPic">
                <p></p>
              </div>
              {/* <div className="divTableCellProduct">
                <p></p>
              </div> */}
              {/* <div className="divTableCellPrice">
                <p></p>
              </div> */}
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
}

export default CartPage
