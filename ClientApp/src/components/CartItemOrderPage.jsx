import React from 'react'

const CartItemOrderPage = props => {
  const { name, imagePath, price, id, dispatch } = props
  return (
    <div className="order-divTableRow">
      <div className="order-divTableCellDelete">
        <img
          className="order-trashcan"
          src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/delete_non8eq.png"
        />
      </div>
      <div className="order-divTableCellPic">
        <img className="order-checkout-image" src={imagePath} />
      </div>
      <div className="order-divTableCellProduct">
        <p>{name}</p>
      </div>
      <div className="order-divTableCellPrice">
        <p>{price}</p>
      </div>
    </div>
  )
}

export default CartItemOrderPage
