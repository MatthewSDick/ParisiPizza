import React, { useState, useEffect, useContext, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import axios from 'axios'
import { useOrder } from './OrderContext'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const Context = useOrder()
  const orderSubTotal = Context.cartTotal
  const orderTax = Context.cartTotal * 0.06
  const orderTotal = orderSubTotal + orderTax
  const [cartItems, setCartItems] = useState({
    cartData: [],
    isLoaded: false,
  })
  const orderID = Context.orderId
  console.log('orderID: ', orderID)
  // var orderID = sessionStorage.getItem('orderID')
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
    return (
      <h2>
        You do not have anything in your cart at this time{' '}
        <Link to="/order/Baked Pasta"> Click here to order</Link>
      </h2>
    )
  } else {
    return (
      <div>
        <Header />
        <div
          className="divTable"
          // style={{ borderColor: 'black', borderStyle: '1px', color: 'white' }}
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

            {/* {cartItems.cartData.orderItems.map((item, index) => { */}
            {cartItems.cartData.orderItems.map(item => {
              return (
                <CartItem
                  name={item.item.name}
                  imagePath={item.item.imagePath}
                  price={item.item.price}
                  id={item.item.id}
                  // index={item.index}
                />
              )
            })}
            {/* End Loop */}
          </div>
        </div>

        <div
          className="divTableCartBottom"
          // style={{ borderColor: 'black', borderStyle: '1px', color: 'white' }}
        >
          <div className="divTableBodyCart">
            <div className="divTableRow">
              <div className="divTableCellCartLeft">
                <p>Sub Total: </p>
              </div>
              <div className="divTableCellCartRight">
                <p>$ {orderSubTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCellCartLeft">
                <p>Tax: </p>
              </div>
              <div className="divTableCellCartRight">
                <p>$ {orderTax.toFixed(2)}</p>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCellCartLeft">
                <p>Total: </p>
              </div>
              <div className="divTableCellCartRight">
                <p>$ {orderTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="divTableRowCartButton">
              {/* <div className="divTableCellCartLeft">
              <p></p>
            </div> */}
              <div className="divTableCellCartButton">
                <Link to="/checkout">
                  <button className="order-checkout">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
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
