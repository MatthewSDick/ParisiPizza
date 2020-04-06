import React from 'react'

const Item = props => {
  const { name, imagePath, price } = props
  return (
    <li className="order-item">
      <img className="order-image" src={imagePath} alt="Pepperoni Pizza" />
      <p>{name}</p>
      <p>{price}</p>
      <button className="order-add-to-cart-btn">ADD TO CART</button>
    </li>
  )
}

export default Item
