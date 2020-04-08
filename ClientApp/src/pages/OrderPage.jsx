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
  const [selectedItem, setSelectedItem] = useState({})
  const [item, setItem] = useState({})

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

  const saveItem = async e => {
    var orderID = sessionStorage.getItem('orderID')
    console.log('orderID before:' + orderID)
    if (!orderID) {
      const response = await axios.post('/api/order', {
        orderstatus: 'Started',
      })
      orderID = response.data.id
      console.log(response.data)
      sessionStorage.setItem('orderID', response.data.id)
      console.log('orderID after:' + orderID)
    } else {
      console.log('selected Item:' + selectedItem)
      // Do something
      var itemID = sessionStorage.getItem('itemID')
      console.log('itemId:' + itemID)
      const response = await axios.post(
        `/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`
      )
      console.log('Order ID before cart:' + orderID)
      const response2 = await axios.get(
        `/api/order/orderitems?orderID=${orderID}`
        // /api/order/orderitems?orderID=30
      )
      console.log('cart: ' + response2.data.orderItems)
    }
  }

  const addItemToOrder = async e => {
    // console.log('target:' + e.target.value)
    // setSelectedItem(e.target.value)
    // console.log('selected Item right:' + selectedItem)
    sessionStorage.setItem('itemID', e.target.value)
    saveItem()
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
              {/* another loop */}
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
        <div></div>
        <Footer />
      </div>
    )
  }
}

export default OrderPage
