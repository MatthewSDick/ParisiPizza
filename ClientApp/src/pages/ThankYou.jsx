import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import axios from 'axios'
import { useOrder } from './OrderContext'

const CartPage = props => {
  const name = props.name
  const Context = useOrder()
  const orderSubTotal = Context.cartTotal
  const orderTax = Context.cartTotal * 0.06
  const orderTotal = orderSubTotal + orderTax
  // const [cartItems, setCartItems] = useState({
  //   cartData: [],
  //   isLoaded: false,
  // })

  // const GetCartInfo = async () => {
  //   const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
  //   console.log('Loaded in cart:', response.data)
  //   setCartItems({
  //     cartData: response.data,
  //     isLoaded: true,
  //   })
  // }

  const orderID = Context.orderId
  console.log('orderID: ', orderID)
  // var orderID = sessionStorage.getItem('orderID')

  return (
    <div>
      <Header />
      <h1>Thank you {name} for ordering from Parisi Pizza.</h1>
      <h3>
        Your order has been entered into our system and is being prepared at
        this time.
      </h3>
      <p>Below is the information about your order.</p>

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
          {Context.basketItems.map((item, index) => {
            // {cartItems.cartData.orderItems.map(item => {
            return (
              <div className="divTableRow">
                <div className="divTableCellDelete">
                  {console.log('cartItem ----------', item)}
                  <img
                    alt="trash can"
                    className="cart-trashcan"
                    onClick={() =>
                      Context.dispatch({ type: 'delete-item', index, item })
                    }
                    // className="trashcan"
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
                {/* <div className="divTableCellTotal">
                  <p>$25.09</p>
                </div> */}
              </div>
              // <CartItem
              //   item={item}
              //   name={item.item.name}
              //   imagePath={item.item.imagePath}
              //   price={item.item.price}
              //   id={item.item.id}
              //   index={item.index}
              // />
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
              <p>$ {parseFloat(orderTotal).toFixed(2)}</p>
            </div>
          </div>
          <div className="divTableRowCartButton">
            {/* <div className="divTableCellCartLeft">
              <p></p>
            </div> */}
            <div className="divTableCellCartButton"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CartPage
