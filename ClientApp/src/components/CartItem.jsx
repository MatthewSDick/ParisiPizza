import React, { useState, useEffect, useContext, Component } from 'react'
import { useOrder } from '../pages/OrderContext'

const CartItem = props => {
  const Context = useOrder()
  const { name, imagePath, price, id, index } = props
  return (
    <div className="divTableRow">
      <div className="divTableCellDelete">
        <img
          className="cart-trashcan"
          // onClick={() => Context.dispatch({ type: 'delete-item', index, item })}
          // className="trashcan"
          src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/delete_non8eq.png"
        />
      </div>
      <div className="divTableCellPic">
        <img className="checkout-image" src={imagePath} />
      </div>
      <div className="divTableCellProduct">
        <p>{name}</p>
      </div>
      <div className="divTableCellPrice">
        <p>{price}</p>
      </div>
      {/* <div className="divTableCellTotal">
        <p>$25.09</p>
      </div> */}
    </div>
  )
}

export default CartItem
