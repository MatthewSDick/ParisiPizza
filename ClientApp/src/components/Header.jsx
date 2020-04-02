import React from 'react'

const HelloWorld = () => {
  return (
    <div>
      <div class="top">
        <div class="flex1">
          <div class="one">
            {/* this is the nav menu */}
            <a href="/">
              <button className="go-home">Home</button>
              {/* <span>Home</span> */}
            </a>
            <div class="dropdown">
              <button class="dropbtn">
                Order Online
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Appetizers</a>
                <a href="#">Baked Pasta</a>
                <a href="#">Dolci</a>
                <a href="#">Entrees</a>
                <a href="#">Hoagies</a>
                <a href="#">Italian Specialties</a>
                <a href="#">Paninis</a>
                <a href="#">Pasta</a>
                <a href="#">Pizza</a>
                <a href="#">Salads</a>
                <a href="#">Seafood</a>
              </div>
            </div>
            {/* this is the bottom of nav menu */}
          </div>
          <div class="two">
            <img src="images/Parisi_Logo_BeforeAndAfter.jpg" />
          </div>
          <div class="three">
            <ul class="right-nav">
              <li>
                <img class="cart" src="images/cart_icon.png" />
              </li>
              <li class="top-items-count">0</li>
              <li class="top-items">Items</li>
              <li class="top-money">$ 0.00</li>
              <li>
                <button class="top-checkout">Checkout</button>
              </li>
            </ul>
          </div>
        </div>

        <h2>Authentic Italian Pizza</h2>
        <h1>Best pizza in St Pete</h1>
        <div class="top-wrapper">
          <button class="top-button">Order Online</button>
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

export default HelloWorld
