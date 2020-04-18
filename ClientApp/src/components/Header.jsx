import React, { useState, useEffect, useReducer, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useOrder } from '../pages/OrderContext'

const Header = () => {
  const Context = useOrder()
  return (
    <div>
      <div class="top">
        <div class="flex1">
          <div class="one">
            {/* this is the nav menu */}
            <Link to="/">
              <button className="go-home">Home</button>
              {/* <span>Home</span> */}
            </Link>
            <div class="dropdown">
              <button class="dropbtn">
                Order Online
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <Link to="/order/Appetizers">Appetizers</Link>
                <Link to="/order/Baked Pasta">Baked Pasta</Link>
                <Link to="/order/Dolci">Dolci</Link>
                <Link to="/order/Entrees">Entrees</Link>
                <Link to="/order/Hoagies">Hoagies</Link>
                <Link to="/order/Italian Specialties">Italian Specialties</Link>
                <Link to="/order/Paninis">Paninis</Link>
                <Link to="/order/Pasta">Pasta</Link>
                <Link to="/pizza">Pizza</Link>
                <Link to="/order/Salads">Salads</Link>
                <Link to="/order/Seafood">Seafood</Link>
              </div>
            </div>
            {/* this is the bottom of nav menu */}
          </div>
          <div class="two">
            <img
              className="parisi-logo"
              src="images/Parisi_Logo_BeforeAndAfter.jpg"
            />
          </div>
          <div class="three">
            <ul class="right-nav">
              <li>
                <Link to="/cart">
                  <img class="cart" src="images/cart_icon.png" />
                </Link>
              </li>
              <li class="top-items-count">{localStorage.getItem('items')}</li>

              <li class="top-items">{Context.basketItems.length} Items</li>
              <li class="top-money">
                Total: ${parseFloat(Context.cartTotal).toFixed(2)}
              </li>
              <li>
                {/* <Link to="/checkout">
                  <button class="top-checkout">Checkout</button>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>

        <h2>Authentic Italian Pizza</h2>
        <h1>Best pizza in St Pete</h1>
        <div class="top-wrapper">
          <Link to="/pizza">
            <button class="top-button">Order Online</button>
          </Link>
        </div>
      </div>
      <div class="line">
        <div class="div-line-left"></div>
        <img class="pizza-logo" src="images/pizza_icon.png" />
        <div class="div-line-right"></div>
      </div>
    </div>
  )
}

export default Header
