import React from 'react'

const CartItem = props => {
  const { name, imagePath, price, id } = props
  return (
    <div className="divTableRow">
      <div className="divTableCellDelete">
        <img className="trashcan" src="/images/delete.png" />
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
