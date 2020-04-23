import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useOrder } from './OrderContext'
import { Link } from 'react-router-dom'

const OrderPage = props => {
  const Context = useOrder()
  console.log('Top app: ', Context)

  const menuCategory = props.match.params.category
  // console.log(menuCategory)

  const [categoryItems, setCategoryItems] = useState({
    itemData: [],
    isLoaded: false,
  })

  // const [cartItems, setCartItems] = useState({
  //   cartData: { orderItems: [] },
  // })

  // const GetCategoryItems = async () => {
  //   const response = await axios.get(
  //     `/api/items/category?categoryName=${menuCategory}`
  //   )
  //   // console.log(response.data)
  //   setCategoryItems({
  //     itemData: response.data,
  //     isLoaded: true,
  //   })
  // }

  // const isThereOrder = async e => {
  //   const orderID = Context.orderId
  //   if (!orderID) {
  //     const response = await axios.post('/api/order', {
  //       orderstatus: 'Started',
  //     })
  //     Context.setOrderId(response.data.id)
  //   }
  // }

  const saveItemData = async item => {
    // console.log('is the item here:', item)
    const orderID = Context.orderId
    const itemID = item.id
    axios
      .post(`/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`)
      .then(response => {
        // console.log('After API . then: ', response)
        if (response.status === 200) {
          const orderItemId = response.data.id
          item.orderItemId = orderItemId
          Context.dispatch({ type: 'add-item', item })
        } else {
        }
      })
  }

  const deleteItemData = async (item, index) => {
    console.log('Item to be deleted', item.item)
    const itemToDelete = item.item.orderItemId

    axios
      .delete(`/api/orderitem/${itemToDelete}`)

      .then(response => {
        if (response.status === 200) {
          Context.dispatch({ type: 'delete-item', index, item })
        } else {
        }
      })
  }

  useEffect(() => {
    const GetCategoryItems = async () => {
      const response = await axios.get(
        `/api/items/category?categoryName=${menuCategory}`
      )
      // console.log(response.data)
      setCategoryItems({
        itemData: response.data,
        isLoaded: true,
      })
    }

    const isThereOrder = async e => {
      const orderID = Context.orderId
      if (!orderID) {
        const response = await axios.post('/api/order', {
          orderstatus: 'Started',
        })
        Context.setOrderId(response.data.id)
      }
    }

    GetCategoryItems()
    isThereOrder()
  }, [])

  if (!categoryItems.isLoaded) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div>
        <Header />
        {/* <div>{value}</div> */}
        <div className="order-page">
          <div className="order-page-left">
            <div className="cart-view">
              <h3 className="order-cart-head">Cart</h3>
              {console.log('basket: ', Context.basketItems)}
              {console.log('basket total: ', Context.cartTotal)}
              {Context.basketItems.map((item, index) => {
                return (
                  <div className="order-divTableRow">
                    <div key={item.id} className="order-divTableCellDelete">
                      <img
                        alt="trash can"
                        onClick={() =>
                          // Context.dispatch({ type: 'delete-item', index, item })
                          deleteItemData(item, index)
                        }
                        className="order-trashcan"
                        src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/delete_non8eq.png"
                      />
                    </div>
                    <div className="order-divTableCellPic">
                      <img
                        alt="item"
                        className="order-checkout-image"
                        src={item.item.imagePath}
                      />
                    </div>
                    <div className="order-divTableCellProduct">
                      <p>{item.item.name}</p>
                    </div>
                    <div className="order-divTableCellPrice">
                      <p>{item.item.price}</p>
                    </div>
                  </div>
                )
              })}
              <Link to="/checkout">
                <button className="order-checkout">PROCEED TO CHECKOUT</button>
              </Link>
              {/* <pre>{JSON.stringify(Context.basketItems, null, 2)}</pre> */}
            </div>
          </div>

          <div className="order-page-right">
            <ul className="catagory-list">
              {categoryItems.itemData.map(item => {
                return (
                  <li className="order-item">
                    <img
                      className="order-image"
                      src={item.imagePath}
                      alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.id}</p>
                    <button
                      key={item}
                      value={item.id}
                      className="order-add-to-cart-btn"
                      onClick={() => saveItemData(item)}
                    >
                      > ADD TO CART
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default OrderPage
