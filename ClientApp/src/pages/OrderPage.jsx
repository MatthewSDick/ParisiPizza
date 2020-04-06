import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import Item from '../components/Item'

const OrderPage = props => {
  const menuCategory = props.match.params.category
  console.log('in from props ' + props.match.params.category)
  console.log('menuCategory variavle = ' + menuCategory)
  // const menuCategory = 'Seafood'
  // console.log('value is ' + menuCategory)
  const [categoryItems, setCategoryItems] = useState({
    itemData: [],
    isLoaded: false,
  })
  // const menuCategory = props.menuCategory

  const GetCategoryItems = async () => {
    const response = await axios.get(
      `/api/items/category?categoryName=${menuCategory}`
    )
    console.log('After API ' + menuCategory)
    console.log(response.data)
    setCategoryItems({
      itemData: response.data,
      isLoaded: true,
    })
    localStorage.setItem('items', '99')
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

              {/* <div className="order-cart-list-item">
                <div className="order-cart-image-box">
                  <img
                    className="order-cart-image"
                    src="./images/pepperoni-pizz.jpg"
                    alt="Pepperoni Pizza"
                  />
                </div>
                <div className="order-cart-details">
                  <p>Homemade Lasagna</p>
                  <p>
                    4 X $ <span style={{ color: '#CA0707' }}>14.95</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="order-subtotal">
                  Subtotal: <span style={{ color: '#CA0707' }}>$ 99.99</span>
                </h3>
              </div>
              <div className="order-buttons">
                <div className="order-buttons-left">
                  <button className="order-left-button">VIEW CART</button>
                </div>
                <div className="order-buttons-right">
                  <button className="order-right-button">CHECKOUT</button>
                </div>
              </div> */}

              {/* end items loop */}
            </div>
          </div>

          <div className="order-page-right">
            <ul className="catagory-list">
              {/* map from API */}

              {categoryItems.itemData.map(item => {
                return (
                  <Item
                    name={item.name}
                    imagePath={item.imagePath}
                    price={item.price}
                  />
                )
              })}

              {/* <li className="order-item">
                <img
                  className="order-image"
                  src="./images/pepperoni-pizz.jpg"
                  alt="Pepperoni Pizza"
                />
                <p>Item Name</p>
                <p>$ 99.99</p>
                <button className="order-add-to-cart-btn">ADD TO CART</button>
              </li>
              <li className="order-item">
                <img
                  className="order-image"
                  src="./images/pepperoni-pizz.jpg"
                  alt="Pepperoni Pizza"
                />
                <p>Item Name</p>
                <p>$ 99.99</p>
                <button className="order-add-to-cart-btn">ADD TO CART</button>
              </li>
              <li className="order-item">
                <img
                  className="order-image"
                  src="./images/pepperoni-pizz.jpg"
                  alt="Pepperoni Pizza"
                />
                <p>Item Name</p>
                <p>$ 99.99</p>
                <button className="order-add-to-cart-btn">ADD TO CART</button>
              </li>
              <li className="order-item">
                <img
                  className="order-image"
                  src="./images/pepperoni-pizz.jpg"
                  alt="Pepperoni Pizza"
                />
                <p>Item Name</p>
                <p>$ 99.99</p>
                <button className="order-add-to-cart-btn">ADD TO CART</button>
              </li>
              <li className="order-item">
                <img
                  className="order-image"
                  src="./images/pepperoni-pizz.jpg"
                  alt="Pepperoni Pizza"
                />
                <p>Item Name</p>
                <p>$ 99.99</p>
                <button className="order-add-to-cart-btn">ADD TO CART</button>
              </li> */}
              {/* bottom of the map loop */}
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
