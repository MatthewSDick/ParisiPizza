import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import axios from 'axios'
import { useOrder } from './OrderContext'
import { Link } from 'react-router-dom'

const CheckOutPage = () => {
  const Context = useOrder()
  const orderSubTotal = Context.cartTotal
  const orderTax = Context.cartTotal * 0.06
  const orderTotal = orderSubTotal + orderTax
  const orderID = Context.orderId

  const [customer, setCustomer] = useState({})
  const [order, setOrder] = useState({
    Id: 0,
    OrderStatus: 'Closed',
    OrderTotal: orderTotal.toFixed(2),
    pickupDelivery: '',
    AdditionalInfo: '',
  })
  // console.log('just set top: ', order)

  const updateCustomerData = e => {
    const key = e.target.name
    const value = e.target.value
    setCustomer(prevCustomer => {
      prevCustomer[key] = value
      return prevCustomer
    })
  }

  const updateOrderData = e => {
    const key = e.target.name
    const value = e.target.value
    setOrder(prevOrder => {
      prevOrder[key] = value
      return prevOrder
    })
    console.log('aaaaaa', order)
  }

  const finalizeOrder = () => {
    sendCustomerInfo()
    // setOrderstatus()
    // closeOrder()
  }

  const sendCustomerInfo = async () => {
    const resp = await axios.post('api/customers', customer)
    if (resp.status === 201) {
    } else {
      // do something
    }
  }

  // const setOrderstatus = () => {
  //   const orderTotal = Context.cartTotal
  //   console.log('orderTotal:', orderTotal)
  //   setOrder(previousOrder => {
  //     return {
  //       ...previousOrder,
  //       AdditionalInfo: customer.AdditionalInfo,
  //     }
  //   })
  // }

  // const closeOrder = async () => {
  //   console.log('the order is', order)
  //   const resp = await axios.put(`api/order/${orderID}`, order)
  //   console.log(resp.data)
  //   if (resp.status === 200 || 204) {
  //     // do something
  //   } else {
  //     // do something
  //   }
  // }

  const [cartItems, setCartItems] = useState({
    cartData: [],
    isLoaded: false,
  })

  const GetCartInfo = async () => {
    // const orderID = Context.orderId
    const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
    console.log('Cart Info: ', response.data)
    setCartItems({
      cartData: response.data,
      isLoaded: true,
    })
    setOrder(previousOrder => {
      return { ...previousOrder, Id: response.data.id }
    })
  }

  useEffect(() => {
    GetCartInfo()
  })

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
          className="checkout-top"
          // style={{
          //   borderStyle: 'solid',
          //   borderColor: 'black',
          //   borderWidth: '1px',
          // }}
        >
          <div
            className="checkout-left"
            // style={{
            //   borderStyle: 'solid',
            //   borderColor: 'red',
            //   borderWidth: '1px',
            // }}
          >
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
                value="pickup"
                type="radio"
                name="pickupDelivery"
                onChange={updateOrderData}
                classNAme="delivery-method"
              />{' '}
              Pick Up
            </p>
            <p>
              <input
                value="delivery"
                type="radio"
                name="pickupDelivery"
                onChange={updateOrderData}
                classNAme="delivery-method"
              />{' '}
              Delivery
            </p>
            <h2>Additional Information</h2>
            <input
              type="text"
              name="additionalinfo"
              className="additional-info"
              onChange={updateCustomerData}
            ></input>
          </div>
          <img
            alt="checkout pizza"
            className="checkout-pizza"
            src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/main-pizza_ktipx4.jpg"
          />
          {/* <div className="checkout-right">
            {' '}
            <h2>Additional Information</h2>
            <input
              type="text"
              name="additionalinfo"
              className="additional-info"
              onChange={updateCustomerData}
            ></input>
          </div> */}
        </div>
        {/* start of table */}
        <div
          className="divTable-bottom-checkout"
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
                <p>$ {orderSubTotal.toFixed(2)}</p>
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
                <p>$ {orderTax.toFixed(2)}</p>
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
                <p>$ {orderTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCellL">
                <p>&nbsp;</p>
              </div>
              <div className="divTableCellC">
                <button className="add-to-cart" onClick={finalizeOrder}>
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
