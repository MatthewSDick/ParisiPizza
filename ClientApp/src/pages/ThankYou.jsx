import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useOrder } from './OrderContext'

const CartPage = props => {
  const name = props.location.customer.name
  const email = props.location.customer.email
  const pickupDelivery = props.location.customer.pickupDelivery
  const Context = useOrder()
  const orderSubTotal = Context.cartTotal
  const orderTax = Context.cartTotal * 0.06
  const orderTotal = orderSubTotal + orderTax
  const orderID = Context.orderId

  return (
    <div>
      <Header />
      <div className="thankyou">
        <h1 className="thankyou-name">Thank you {name} for your order.</h1>
        <h3 className="thankyou-order">
          Your order has been entered into our system and is being prepared at
          this time.
        </h3>
        <h2 style={{ textAlign: 'center' }}>
          We have emailed your receipt to:{' '}
          <span style={{ color: '#CA0707' }}>{email}</span>
        </h2>
        {pickupDelivery == 'pickup' ? (
          <>
            <h3>Your order should be ready for pickup in about 20 minutes</h3>
          </>
        ) : (
          <>
            <h3>Your order should be delivered in about 30-40 minutes</h3>
          </>
        )}
        <p>Below is the information about your order.</p>

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
                  <div className="divTableCellDelete"></div>
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
              <div className="divTableCellCartButton"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CartPage
