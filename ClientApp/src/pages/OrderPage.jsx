import React, { useState, useEffect, useReducer, useContext } from 'react'
import Header from '../components/Header'
import CartPage from '../components/CartItem'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import CartItemOrderPage from '../components/CartItemOrderPage'
import axios from 'axios'
import { useOrder } from './OrderContext'

const reducer = (state, action) => {
  var orderItemTableId = ''
  switch (action.type) {
    case 'add-item':
      var orderID = sessionStorage.getItem('orderID')
      console.log('add-item Order: ', orderID)
      var itemID = action.item.id
      console.log('add-item Item: ', itemID)
      const response = axios
        .post(`/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`)
        .then(response => {
          console.log('After API . then: ', response)
          if (response.status === 200) {
            sessionStorage.setItem('setOrderItemID', response.data.id)
            orderItemTableId = response.data.id
          } else {
          }
          console.log('woohoo: ' + orderItemTableId)
        })

      return {
        basketItems: [
          ...state.basketItems,
          { item: action.item, OrderItemId: sessionStorage.getItem('orderID') },
        ],
      }

    case 'delete-item':
      console.log(action.item)
      var itemToDelete = sessionStorage.getItem('setOrderItemID')
      const responseDelete = axios.delete(`/api/orderitem/${itemToDelete}`)
      return {
        basketItems: [
          ...state.basketItems.filter((x, i) => i !== action.index),
        ],
      }

    default:
      return state
  }
}

const OrderPage = props => {
  // const contextObject = useUserProfile()
  const Context = useOrder()
  console.log('Top app: ', Context)
  // const { value, setValue } = useContext(orderContext)
  const [{ basketItems }, dispatch] = useReducer(reducer, {
    basketItems: [],
    OrderItemId: '',
  })

  const menuCategory = props.match.params.category

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
    console.log(response.data)
    setCategoryItems({
      itemData: response.data,
      isLoaded: true,
    })
  }

  const isThereOrder = async e => {
    const orderId = Context.order
    // const orderId = ''
    console.log('After pull from Context: ', orderId)
    if (!orderId) {
      const response = await axios.post('/api/order', {
        orderstatus: 'Started',
      })
      console.log('Response.Data:', response.data)
      Context.setOrder(response.data.id)
      console.log('AfterContext set:', Context)
    }
  }

  const saveItem = async e => {
    var orderID = sessionStorage.getItem('orderID')
    var itemID = sessionStorage.getItem('itemID')
    const response = await axios.post(
      `/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`
    )
  }

  // const refreshCart = async () => {
  //   var orderID = sessionStorage.getItem('orderID')
  //   console.log('refresh OrderId:' + orderID)
  //   const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
  //   console.log(response.data)
  //   setCartItems({
  //     cartData: response.data,
  //   })
  // }

  // const addItemToOrder = async e => {
  //   sessionStorage.setItem('itemID', e.target.value)
  //   isThereOrder()
  //   saveItem()
  //   refreshCart()
  // }

  const addItemToCart = e => {
    var item = e.target.value
    dispatch({ type: 'add-item', item })
  }

  useEffect(() => {
    GetCategoryItems()
    isThereOrder()
    // refreshCart()
    // refreshCart()
  }, [])

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
              {console.log('basket: ', basketItems)}
              {basketItems.map((item, index) => {
                return (
                  <div className="order-divTableRow">
                    <div key={item.id} className="order-divTableCellDelete">
                      <img
                        onClick={() => dispatch({ type: 'delete-item', index })}
                        className="order-trashcan"
                        src="/images/delete.png"
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
                    <button
                      value={item.id}
                      className="order-add-to-cart-btn"
                      onClick={() => dispatch({ type: 'add-item', item })}
                    >
                      ADD TO CART
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
