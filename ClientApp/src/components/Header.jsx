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
                <a href="/order/Appetizers">Appetizers</a>
                <a href="/order/Baked Pasta">Baked Pasta</a>
                <a href="/order/Dolci">Dolci</a>
                <a href="/order/Entrees">Entrees</a>
                <a href="/order/Hoagies">Hoagies</a>
                <a href="/order/Italian Specialties">Italian Specialties</a>
                <a href="/order/Paninis">Paninis</a>
                <a href="/order/Pasta">Pasta</a>
                <a href="/pizza">Pizza</a>
                <a href="/order/Salads">Salads</a>
                <a href="/order/Seafood">Seafood</a>
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
                <a href="/cart">
                  <img class="cart" src="images/cart_icon.png" />
                </a>
              </li>
              <li class="top-items-count">{localStorage.getItem('items')}</li>

              <li class="top-items">Items</li>
              <li class="top-money">$ 0.00</li>
              <li>
                <a href="/checkout">
                  <button class="top-checkout">Checkout</button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <h2>Authentic Italian Pizza</h2>
        <h1>Best pizza in St Pete</h1>
        <div class="top-wrapper">
          <a href="/pizza">
            <button class="top-button">Order Online</button>
          </a>
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
