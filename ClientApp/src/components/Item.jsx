import React from 'react'

const Item = props => {
  const { name, imagePath, price, id } = props
  return (
    <li className="order-item">
      <img className="order-image" src={imagePath} alt="Pepperoni Pizza" />
      <p>{name}</p>
      <p>{price}</p>
      <button value={id} className="order-add-to-cart-btn">
        ADD TO CART
      </button>
    </li>
  )
}

export default Item
