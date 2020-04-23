import React, { useReducer, useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useOrder } from './OrderContext'
import { Link } from 'react-router-dom'

const PizzaPage = props => {
  const Context = useOrder()
  const menuCategory = props.match.params.category

  const [pizzaSizeSet, setPizzaSizeSet] = useState(false)

  // const [categoryItem, setCategoryItem] = useState({})
  const [categoryItem, setCategoryItem] = useState({
    itemData: [],
    isLoaded: false,
  })

  const [pizzaToppings, setPizzaToppings] = useState({
    toppingData: [],
    isLoaded: false,
  })

  const GetToppings = async () => {
    console.log('in the toppings call')
    const menuCategory = 'Toppings'
    const response = await axios.get(`/api/toppings/`)
    console.log('toppings:', response.data)
    setPizzaToppings({
      toppingData: response.data,
      isLoaded: true,
    })
  }

  const pizzaSizeSelection = e => {
    const price = e.target.value
    getOrderItemId()
    Context.dispatch({ type: 'pizza-size', price })
    if (e.target.value === '9.99' || '10.99' || '11.99') {
      setPizzaSizeSet(true)
    }
  }

  const saveItemData = () => {
    const orderId = Context.orderId
    const itemId = Context.orderItemId
    const price = Context.pizzaTotal
    Context.dispatch({ type: 'add-pizza', itemId, price, orderId })

    // const response = axios
    //   .post(`/api/orderitem/addItem?orderID=${orderId}&itemID=${itemId}`)
    //   .then(response => {
    //     if (response.status === 200 || 201) {
    //       console.log('back from save:', response.data)
    //       const orderItemId = response.data.id
    //       console.log('orderItemId', orderItemId)
    //       var price = Context.pizzaTotal
    //       console.log('orderItemId', itemId)
    //       Context.dispatch({ type: 'add-pizza', itemId, price, orderId })
    //     } else {
    //     }
    //   })
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

  const GetCategoryItems = async () => {
    const response = await axios.get(
      `/api/items/category?categoryName=${menuCategory}`
    )
    console.log('Menu Cat Resp', response.data)
    setCategoryItem({
      itemData: response.data,
    })
  }

  const getOrderItemId = async () => {
    const orderID = Context.orderId
    const itemID = categoryItem.itemData[0].id
    const response = await axios
      .post(`/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`)
      .then(response => {
        if (response.status === 200) {
          // orderItemId = response.data.id
          Context.setOrderItemId(response.data.id)
          console.log('After Context Set', Context.orderItemId)
        } else {
        }
      })
  }

  const pizzaToppingDelete = async (side, name, id) => {
    const itemName = side + '-' + name
    const toppingId = id
    var orderItemId = Context.orderItemId
    console.log('The side is:', side)

    console.log('orderItemId', orderItemId)
    console.log('toppingId', toppingId)
    console.log('side', side)
    // orderItemId = Context.orderItemId
    const response = await axios
      // work the delete in the controller
      .delete(`/api/OrderItemToppings/deleteTopping`, {
        orderItemId: orderItemId,
        toppingId: toppingId,
        side: side,
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })

    // .then(response => {
    //   console.log('the then -------')
    //   // if (response.status === 200 || 201) {
    //   //   Context.dispatch({ type: 'add-topping', name: itemName })
    //   //   // Context.dispatch({type: 'add-topping', name: `whole-${item.name}`,
    //   // } else {
    //   // }
    // })
  }

  const pizzaToppingAdd = async (side, name, id) => {
    const itemName = side + '-' + name
    const toppingId = id
    var orderItemId = Context.orderItemId
    console.log('The add is fired')

    orderItemId = Context.orderItemId
    const response = await axios
      .post(`/api/OrderItemToppings`, {
        orderItemId: orderItemId,
        toppingId: toppingId,
        side: side,
      })
      .then(response => {
        if (response.status === 200 || 201) {
          Context.dispatch({ type: 'add-topping', name: itemName })
          // Context.dispatch({type: 'add-topping', name: `whole-${item.name}`,
        } else {
        }
      })
  }

  useEffect(() => {
    GetCategoryItems()
    isThereOrder()
    GetToppings()
  }, [])

  if (!pizzaToppings.isLoaded) {
    return <h2>Loading...</h2>
  } else {
    return (
      <div>
        <Header />
        <div className="pizza-one">
          <div className="pizza-one-left">
            <img
              className="pepp-pizza"
              src="https://res.cloudinary.com/matthewdick/image/upload/v1587340363/pepperoni-pizz_i2klyc.jpg"
              alt="pepperoni pizza"
            />
          </div>
          <div className="pizza-one-right">
            <h2>Custom Pizza</h2>
            <h3 style={{ color: '#CA0707' }}>$9.99 - $11.99</h3>
            {/* <p>Small + $1.40; Medium + $1.70; Large + $2.00</p> */}
            <label>
              <input
                onClick={pizzaSizeSelection}
                name="pizza-size"
                type="radio"
                value="9.99"
              />
              Small
            </label>
            <br />
            <label>
              <input
                onClick={pizzaSizeSelection}
                name="pizza-size"
                type="radio"
                value="10.99"
              />
              Medium
            </label>
            <br />
            <label>
              <input
                onClick={pizzaSizeSelection}
                name="pizza-size"
                type="radio"
                value="11.99"
              />
              Large
            </label>
            <p>Options Total</p>
            <h3 style={{ color: '#CA0707' }}>
              ${parseFloat(Context.toppingsTotal).toFixed(2)}
            </h3>
            <p>Final Total</p>
            <h3 style={{ color: '#CA0707' }}>
              ${parseFloat(Context.pizzaTotal).toFixed(2)}
            </h3>
            <pre>{JSON.stringify(categoryItem, null, 2)}</pre>
          </div>
        </div>
        {/* hide this */}
        {/* <div className="pizza-bottom" style={{ visibility: 'hidden' }}> */}

        {pizzaSizeSet === true ? (
          <>
            <div className="pizza-bottom">
              <div className="toppings-left">
                <div>
                  <p>Left Half - $1.00</p>
                </div>
                <div className="toppings-detail">
                  {console.log('PT-TD', pizzaToppings.toppingData)}
                  {console.log('Context - Toppings', Context.toppings)}
                  {pizzaToppings.toppingData.map((item, index) => {
                    const alreadyGotIt = Context.toppings.some(
                      topping => topping.topping === `left-${item.name}`
                    )
                    return (
                      <img
                        className="left-{item.name}"
                        title={item.name}
                        src={item.imagePath}
                        alt={item.name}
                        id={item.id}
                        onClick={() => {
                          if (alreadyGotIt) {
                            pizzaToppingDelete('left', item.name, item.id)
                          } else {
                            pizzaToppingAdd('left', item.name, item.id)
                          }
                        }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="toppings-whole">
                <div>
                  <p>Whole Pizza - $2.00</p>
                </div>
                <div className="toppings-detail">
                  {console.log('PT-TD', pizzaToppings.toppingData)}
                  {console.log('Context - Toppings', Context.toppings)}
                  {pizzaToppings.toppingData.map((item, index) => {
                    const alreadyGotIt = Context.toppings.some(
                      topping => topping.topping === `whole-${item.name}`
                    )
                    return (
                      <img
                        className="whole-{item.name}"
                        title={item.name}
                        src={item.imagePath}
                        alt={item.name}
                        id={item.id}
                        onClick={() => {
                          if (alreadyGotIt) {
                            pizzaToppingDelete('whole', item.name, item.id)
                          } else {
                            pizzaToppingAdd('whole', item.name, item.id)
                          }
                        }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="toppings-right">
                <div>
                  <p>Right Half - $1.00</p>
                </div>
                <div className="toppings-detail">
                  {console.log('PT-TD', pizzaToppings.toppingData)}
                  {console.log('Context - Toppings', Context.toppings)}
                  {pizzaToppings.toppingData.map((item, index) => {
                    const alreadyGotIt = Context.toppings.some(
                      topping => topping.topping === `right-${item.name}`
                    )
                    return (
                      <img
                        className="right-{item.name}"
                        title={item.name}
                        src={item.imagePath}
                        alt={item.name}
                        id={item.id}
                        onClick={() => {
                          if (alreadyGotIt) {
                            pizzaToppingDelete('right', item.name, item.id)
                          } else {
                            pizzaToppingAdd('right', item.name, item.id)
                          }
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="button-div">
              {/* <button className="add-to-cart">ADD TO CART</button> */}
              <button
                // key={item}
                // value={item.id}
                className="order-add-to-cart-btn"
                onClick={() => saveItemData()}
              >
                > ADD TO CART
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <Footer />
      </div>
    )
  }
}

export default PizzaPage
