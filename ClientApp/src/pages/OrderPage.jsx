import React, { useState, useEffect, useReducer } from 'react'
import Header from '../components/Header'
import CartPage from '../components/CartItem'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'
import CartItemOrderPage from '../components/CartItemOrderPage'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-item':
      return {
        basketItems: [...state.basketItems, { item: action.item }],
      }
    // do this
    case 'something-else':
    // do this
    default:
      return state
  }
}

const OrderPage = props => {
  const [{ basketItems }, dispatch] = useReducer(reducer, {
    basketItems: [],
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
    console.log('Entering isTereOrder')
    var orderID = sessionStorage.getItem('orderID')
    console.log('isThereOrder before API orderID=' + orderID)
    if (!orderID) {
      const response = await axios.post('/api/order', {
        orderstatus: 'Started',
      })
      orderID = response.data.id
      console.log('isThereOrder response=:' + response.data)
      sessionStorage.setItem('orderID', response.data.id)
      console.log('isThereOrder after API orderID=' + orderID)
    }
  }

  const saveItem = async e => {
    console.log('Entering saveItem')
    var orderID = sessionStorage.getItem('orderID')
    console.log('Entering saveItem orderID =' + orderID)
    var itemID = sessionStorage.getItem('itemID')
    console.log('selected Item:', itemID)
    console.log('In saveItem itemID:' + itemID)
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

        <div className="order-page">
          <div className="order-page-left">
            <div className="cart-view">
              <h3 className="order-cart-head">Cart</h3>

              {/* loop cart items  */}
              {/* {cartItems.cartData.orderItems.map(item => { */}
              {/* <pre>{JSON.stringify(basketItems, null, 2)}</pre> */}
              {basketItems.map(item => {
                return (
                  <CartItemOrderPage
                    name={item.item.name}
                    imagePath={item.item.imagePath}
                    price={item.item.price}
                    id={item.item.id}
                  />
                )
              })}
            </div>
          </div>

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
                      // onClick={addItemToOrder}
                      // onClick={addItemToCart}
                      onClick={() => dispatch({ type: 'add-item', item })}
                    >
                      ADD TO CART
                    </button>
                  </li>
                )
              })}

              {/* {categoryItems.itemData.map(item => {
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
                      // onClick={addItemToOrder}
                      onClick={addItemToCart}
                    >
                      ADD TO CART
                    </button>
                  </li>
                )
              })} */}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default OrderPage
