import React, { useState, useEffect, useReducer, useContext } from 'react'
import Header from '../components/Header'
import CartPage from '../components/CartItem'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import CartItemOrderPage from '../components/CartItemOrderPage'
import axios from 'axios'
import { useOrder } from './OrderContext'
import { Link } from 'react-router-dom'

// const reducer = (state, action) => {
//   //Don't know how to get this from Context while in reducer/dispatch
//   // const Context = useOrder()
//   // const orderID = Context.orderId
//   switch (action.type) {
//     case 'add-item':
//       // using this because I can't pull from context
//       // const orderID = sessionStorage.getItem('orderID')
//       const itemID = action.item.id
//       const itemAddPrice = parseFloat(action.item.price)
//       console.log('Add:', itemAddPrice)
//       // console.log('Info when adding: ', action.item)
//       return {
//         basketItems: [
//           ...state.basketItems,
//           { item: action.item, orderItemID: action.item.orderItemId },
//         ],
//         cartTotal: state.cartTotal + itemAddPrice,
//       }

//     case 'delete-item':
//       // console.log('In delete: ', action.item)
//       const itemDeletePrice = parseFloat(action.item.item.price)
//       console.log('Delete:', itemDeletePrice)
//       var itemToDelete = action.item.item.orderItemId
//       // console.log('the action in delete;', action)

//       const responseDelete = axios.delete(`/api/orderitem/${itemToDelete}`)
//       return {
//         basketItems: [
//           ...state.basketItems.filter((x, i) => i !== action.index),
//         ],
//         cartTotal: state.cartTotal - itemDeletePrice,
//       }

//     default:
//       return state
//   }
// }

const OrderPage = props => {
  // const contextObject = useUserProfile()
  const Context = useOrder()
  console.log('Top app: ', Context)
  // const { value, setValue } = useContext(orderContext)
  // const [{ basketItems, cartTotal, orderItemID }, dispatch] = useReducer(
  //   reducer,
  //   {
  //     basketItems: [],
  //     cartTotal: 0,
  //     orderItemID: '',
  //   }
  // )

  const menuCategory = props.match.params.category
  // console.log(menuCategory)

  const [categoryItems, setCategoryItems] = useState({
    itemData: [],
    isLoaded: false,
  })

  const [cartItems, setCartItems] = useState({
    cartData: { orderItems: [] },
  })

  const GetCategoryItems = async () => {
    const response = await axios.get(
      `/api/items/category?categoryName=${menuCategory}`
    )
    // console.log(response.data)
    setCategoryItems({
      itemData: response.data,
      isLoaded: true,
    })
  }

  const isThereOrder = async e => {
    // console.log('Enter isThereOrder Context: ', Context)
    const orderID = Context.orderId
    // const orderID = ''
    // console.log('orderID after set from Context: ', orderID)
    if (!orderID) {
      const response = await axios.post('/api/order', {
        orderstatus: 'Started',
      })
      // console.log('Response.Data after API for new order: ', response.data)
      Context.setOrderId(response.data.id)
      // sessionStorage.setItem('orderID', response.data.id)
      // console.log('Context data after it is set from API: ', Context)
    }
  }

  const saveItemData = async item => {
    // console.log('is the item here:', item)
    const orderID = Context.orderId
    const itemID = item.id
    const response = axios
      .post(`/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`)
      .then(response => {
        // console.log('After API . then: ', response)
        if (response.status === 200) {
          // need to set this to the item in the basket for the delete
          // set the OrderItem:Id here
          // sessionStorage.setItem('setOrderItemID', response.data.id)
          const orderItemId = response.data.id
          item.orderItemId = orderItemId
          Context.dispatch({ type: 'add-item', item })
        } else {
        }
      })
  }

  const addItemToCart = e => {
    var item = e.target.value
    Context.dispatch({ type: 'add-item', item })
  }

  useEffect(() => {
    GetCategoryItems()
    isThereOrder()
    // refreshCart()
    // refreshCart()
  }, [menuCategory])

  if (!categoryItems.isLoaded) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div>
        <Header />
        {/* <div>{value}</div> */}
        <div className="order-page">
          <div className="order-page-left">
            <div className="cart-view">
              <h3 className="order-cart-head">Cart</h3>
              {console.log('basket: ', Context.basketItems)}
              {console.log('basket total: ', Context.cartTotal)}
              {Context.basketItems.map((item, index) => {
                return (
                  <div className="order-divTableRow">
                    <div key={item.id} className="order-divTableCellDelete">
                      <img
                        onClick={() =>
                          Context.dispatch({ type: 'delete-item', index, item })
                        }
                        className="order-trashcan"
                        src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/delete_non8eq.png"
                      />
                    </div>
                    <div className="order-divTableCellPic">
                      <img
                        className="order-checkout-image"
                        src={item.item.imagePath}
                      />
                    </div>
                    <div className="order-divTableCellProduct">
                      <p>{item.item.name}</p>
                    </div>
                    <div className="order-divTableCellPrice">
                      <p>{item.item.price}</p>
                    </div>
                  </div>
                )
              })}
              <Link to="/checkout">
                <button className="order-checkout">PROCEED TO CHECKOUT</button>
              </Link>
              <pre>{JSON.stringify(Context.basketItems, null, 2)}</pre>
            </div>
          </div>

          {/* 
              {basketItems.map(item => {
                return (
                  <CartItemOrderPage
                    name={item.item.name}
                    imagePath={item.item.imagePath}
                    price={item.item.price}
                    id={item.item.id}
                    dispatch={dispatch}
                  />
                )
              })}
            </div>
          </div> */}

          <div className="order-page-right">
            <ul className="catagory-list">
              {categoryItems.itemData.map(item => {
                return (
                  <li className="order-item">
                    <img
                      className="order-image"
                      src={item.imagePath}
                      alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.id}</p>
                    {/* <button
                      value={item.id}
                      className="order-add-to-cart-btn"
                      onClick={() => dispatch({ type: 'add-item', item })}
                    >
                      ADD TO CART
                    </button> */}
                    <button
                      key={item}
                      value={item.id}
                      className="order-add-to-cart-btn"
                      onClick={() => saveItemData(item)}
                    >
                      > ADD TO CART
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default OrderPage
