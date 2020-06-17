import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
  const GetCartInfo = async () => {
    const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
    setCartItems({
      cartData: response.data,
      isLoaded: true,
    })
  }

  useEffect(() => {
    GetCartInfo()
  }, [])

  if (!cartItems.isLoaded) {
    return (
      <h2>
        You do not have anything in your cart at this time.{' '}
        <Link to="/order/Baked Pasta"> Click here to order</Link>
      </h2>
    )
  } else {
    return (
      <div>
        <Header />
        <div className="divTable">
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
          </div>
        </div>

        <div className="divTableCartBottom">
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
                <p>$ {parseFloat(orderTotal).toFixed(2)}</p>
              </div>
            </div>
            <div className="divTableRowCartButton">
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
