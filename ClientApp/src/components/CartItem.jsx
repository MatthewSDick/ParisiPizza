import React from 'react'
import { useOrder } from '../pages/OrderContext'

const CartItem = props => {
  const Context = useOrder()
  const { index, item } = props
  return (
    <div className="divTableRow">
      <div className="divTableCellDelete">
        <img
          alt="trash can"
          className="cart-trashcan"
          onClick={() => Context.dispatch({ type: 'delete-item', index, item })}
          src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/delete_non8eq.png"
        />
      </div>
      <div className="divTableCellPic">
        <img
          className="checkout-image"
          src={item.item.imagePath}
          alt="checkout"
        />
      </div>
      <div className="divTableCellProduct">
        <p>{item.item.name}</p>
      </div>
      <div className="divTableCellPrice">
        <p>{item.item.price}</p>
      </div>
    </div>
  )
}

export default CartItem
