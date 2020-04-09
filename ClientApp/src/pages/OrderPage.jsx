import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const OrderPage = props => {
  const menuCategory = props.match.params.category

  const [categoryItems, setCategoryItems] = useState({
    itemData: [],
    isLoaded: false,
  })

  const [cartItems, setCartItems] = useState({
    cartData: [],
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

  const refreshCart = async () => {
    var orderID = sessionStorage.getItem('orderID')
    console.log('refresh OrderId:' + orderID)
    const response = await axios.get(`/api/order/orderitems?orderID=${orderID}`)
    console.log(response.data)
    setCartItems({
      cartData: response.data,
    })
    console.log(cartItems)
  }

  const addItemToOrder = async e => {
    sessionStorage.setItem('itemID', e.target.value)
    isThereOrder()
    saveItem()
    refreshCart()
  }

  useEffect(() => {
    GetCategoryItems()
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
              {cartItems.cartData.orderItems.map(item => {
                return (
                  <div className="order-cart-list-item">
                    <div className="order-cart-image-box">
                      <img
                        className="order-cart-image"
                        src="./images/pepperoni-pizz.jpg"
                        alt="Shopping cart"
                      />
                    </div>
                    <div className="order-cart-details">
                      <p>Homemade Lasagna</p>
                      <p>
                        4 X $ <span style={{ color: '#CA0707' }}>14.95</span>
                      </p>
                    </div>
                  </div>
                )
              })}
              {/* end cart items loop */}

              <div className="order-cart-list-item">
                <div className="order-cart-image-box">
                  <img
                    className="order-cart-image"
                    src="./images/pepperoni-pizz.jpg"
                    alt="Shopping cart"
                  />
                </div>
                <div className="order-cart-details">
                  <p>Homemade Lasagna</p>
                  <p>
                    4 X $ <span style={{ color: '#CA0707' }}>14.95</span>
                  </p>
                </div>
              </div>
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
                      alt="Pepperoni Pizza"
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.id}</p>
                    <button
                      value={item.id}
                      className="order-add-to-cart-btn"
                      onClick={addItemToOrder}
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
