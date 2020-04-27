import React from 'react'
import { Link } from 'react-router-dom'
import { useOrder } from '../pages/OrderContext'
import '../components/header.scss'

const Header = () => {
  const Context = useOrder()
  return (
    <div>
      <div className="top">
        <div className="flex1">
          <div className="one">
            <Link to="/">
              <button className="go-home">Home</button>
            </Link>
            <div className="dropdown">
              <button className="dropbtn">
                Order Online
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/order/Appetizers">Appetizers</Link>
                <Link to="/order/Baked Pasta">Baked Pasta</Link>
                <Link to="/order/Dolci">Dolci</Link>
                <Link to="/order/Entrees">Entrees</Link>
                <Link to="/order/Hoagies">Hoagies</Link>
                <Link to="/order/Italian Specialties">Italian Specialties</Link>
                <Link to="/order/Paninis">Paninis</Link>
                <Link to="/order/Pasta">Pasta</Link>
                <Link to="/pizza/Pizza">Pizza</Link>
                <Link to="/order/Salads">Salads</Link>
                <Link to="/order/Seafood">Seafood</Link>
              </div>
            </div>
          </div>
          <div className="two">
            <img
              className="parisi-logo"
              alt="logo"
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Parisi_Logo_BeforeAndAfter_up4lwu.jpg"
            />
          </div>
          <div className="three">
            <ul className="right-nav">
              <li>
                <Link to="/cart">
                  <img
                    className="cart"
                    alt="cart"
                    src="https://res.cloudinary.com/matthewdick/image/upload/v1587340362/cart_icon_dcdryh.png"
                  />
                </Link>
              </li>
              <li className="top-items-count">
                {localStorage.getItem('items')}
              </li>

              <li className="top-items">{Context.basketItems.length} Items</li>
              <li className="top-money">
                Total: ${parseFloat(Context.cartTotal).toFixed(2)}
              </li>
              <li></li>
            </ul>
          </div>
        </div>

        <h2>Authentic Italian Pizza</h2>
        <h1>Best pizza in St Pete</h1>
        <div className="top-wrapper">
          <Link to="/pizza/Pizza">
            <button className="top-button">Order Online</button>
          </Link>
        </div>
      </div>
      <div className="line">
        <div className="div-line-left"></div>
        <img
          className="pizza-logo"
          alt="pizza logo"
          src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/pizza_icon_ytfkvx.png"
        />
        <div className="div-line-right"></div>
      </div>
    </div>
  )
}

export default Header
