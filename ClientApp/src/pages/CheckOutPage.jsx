import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useOrder } from './OrderContext'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const CheckOutPage = () => {
  const Context = useOrder()
  const orderSubTotal = Context.cartTotal
  const orderTax = Context.cartTotal * 0.06
  const orderTotal = orderSubTotal + orderTax
  const orderID = Context.orderId
  const [thankYou, setThankYou] = useState(false)
  const [customer, setCustomer] = useState({})
  const [order, setOrder] = useState({
    Id: 0,
    OrderStatus: 'Closed',
    OrderTotal: orderTotal.toFixed(2),
    pickupDelivery: '',
    AdditionalInfo: '',
  })

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
  }

  const finalizeOrder = () => {
    sendCustomerInfo()
    closeOrder()
    setThankYou(true)
  }

  const sendCustomerInfo = async () => {
    const resp = await axios.post('api/customers', customer)
    if (resp.status === 201) {
    } else {
    }
  }

  const closeOrder = async () => {
    const resp = await axios.put(`api/order/${orderID}`, order)
    if (resp.status === 200 || 204) {
    } else {
    }
  }

  const [cartItems, setCartItems] = useState({
    cartData: [],
    isLoaded: false,
  })

  const GetCartInfo = async () => {
    const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
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
  }, [])

  if (!cartItems.isLoaded) {
    return (
      <h2>
        You do not have anything in your cart at this time{' '}
        <Link to="/order/Baked Pasta"> Click here to order</Link>
      </h2>
    )
  } else {
    if (thankYou) {
      const firstName = customer.firstName
      return (
        <Redirect
          to={{
            pathname: '/thankyou',
            customer: {
              name: `${customer.firstName}`,
              email: `${customer.email}`,
              pickupDelivery: `${order.pickupDelivery}`,
            },
          }}
        />
      )
    }

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
        </div>
        <div className="divTable-bottom-checkout">
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
            </div>

            {Context.basketItems.map((item, index) => {
              return (
                <div className="divTableRow">
                  <div className="divTableCellDelete">
                    <img
                      alt="trash can"
                      className="cart-trashcan"
                      onClick={() =>
                        Context.dispatch({ type: 'delete-item', index, item })
                      }
                      src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/delete_non8eq.png"
                    />
                  </div>
                  <div className="divTableCellPic">
                    <img
                      className="checkout-image"
                      src={item.item.imagePath}
                      alt="checkout"
                    />
                  </div>
                  <div className="divTableCellProduct">
                    <p>{item.item.name}</p>
                  </div>
                  <div className="divTableCellPrice">
                    <p>{parseFloat(item.item.price).toFixed(2)}</p>
                  </div>
                </div>
              )
            })}

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
        <Footer />
      </div>
    )
  }
}

export default CheckOutPage
