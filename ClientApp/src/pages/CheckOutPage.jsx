import React, { useState, useEffect, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import axios from 'axios'

const CheckOutPage = () => {
  const [customer, setCustomer] = useState({})

  const updateCustomerData = e => {
    const key = e.target.name
    const value = e.target.value
    setCustomer(prevCustomer => {
      prevCustomer[key] = value
      return prevCustomer
    })
  }

  const submitOrderToAPI = async () => {
    console.log('adding customer:', customer)
    // do API stuff
    const resp = await axios.post('api/customers', customer)
    console.log(resp.data)
    if (resp.status === 201) {
      // do something
    } else {
      // do something
    }
  }

  const [cartItems, setCartItems] = useState({
    cartData: [],
    isLoaded: false,
  })
  var orderID = 30
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
    return <h2>Loading...</h2>
  } else {
    return (
      <div>
        <Header />
        <div className="checkout-top">
          <div className="checkout-left">
            <h2>Billing Details</h2>
            <p>
              First Name<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="firstName"
              onChange={updateCustomerData}
            ></input>
            <p>
              Last Name<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="lastName"
              onChange={updateCustomerData}
            ></input>
            <p>
              Address<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="address"
              onChange={updateCustomerData}
            ></input>
            <p>
              City<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="city"
              onChange={updateCustomerData}
            ></input>
            <p>
              State<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="state"
              onChange={updateCustomerData}
            ></input>
            <p>
              Zip<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input type="text" name="zip" onChange={updateCustomerData}></input>
            <p>
              Phone<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="phone"
              onChange={updateCustomerData}
            ></input>
            <p>
              Email<span style={{ color: '#CA0707' }}> *</span>
            </p>
            <input
              type="text"
              name="email"
              onChange={updateCustomerData}
            ></input>
            <p>
              <input
                type="radio"
                name="pick-up"
                onChange={updateCustomerData}
                classNAme="delivery-method"
              />{' '}
              Pick Up
            </p>
            <p>
              <input
                type="radio"
                name="delivery"
                onChange={updateCustomerData}
                classNAme="delivery-method"
              />{' '}
              Delivery
            </p>
          </div>
          <div className="checkout-right">
            {' '}
            <h2>Additional Information</h2>
            <input
              type="text"
              name="additional-info"
              className="additional-info"
              onChange={updateCustomerData}
            ></input>
          </div>
        </div>
        {/* start of table */}
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

            {/* end looping items */}
            <div className="divTableRow">
              <div className="divTableCellL">
                <p>&nbsp;</p>
              </div>
              <div className="divTableCellC">
                <p>SubTotal:</p>
              </div>
              <div className="divTableCellR">
                <p>$25.09</p>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCellL">
                <p>&nbsp;</p>
              </div>
              <div className="divTableCellC">
                <p>Tax:</p>
              </div>
              <div className="divTableCellR">
                <p>$1.35</p>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCellL">
                <p>&nbsp;</p>
              </div>
              <div className="divTableCellC">
                <p>Total:</p>
              </div>
              <div className="divTableCellR">
                <p>$26.44</p>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCellL">
                <p>&nbsp;</p>
              </div>
              <div className="divTableCellC">
                <button className="add-to-cart" onClick={submitOrderToAPI}>
                  SUBMIT ORDER
                </button>
              </div>
              <div className="divTableCellR"></div>
            </div>
          </div>
        </div>
        {/* end of table */}
        <Footer />
      </div>
    )
  }
}

export default CheckOutPage
