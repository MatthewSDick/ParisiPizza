import React, { useReducer, useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const reducer = (state, action) => {
  console.log(action.name)
  switch (action.type) {
    case 'add-topping':
      // for add and delete topping need to see if the topping is already added
      // if not then add
      // if it is there then delete
      console.log('action: ', action)
      var toppingPrice = 0
      const toppingSize = action.name.split('-')[0]
      console.log('toppingSize', toppingSize)
      if (toppingSize == 'whole') {
        toppingPrice = 2
      } else {
        toppingPrice = 1
      }
      console.log('top size: ', toppingSize)

      return {
        toppings: [...state.toppings, { toppings: action.name }],
        toppingsTotal: state.toppingsTotal + toppingPrice,
        pizzaTotal: state.pizzaTotal + toppingPrice,

        // pizzas: [...state.pizzas, { toppings: action.name }],

        // Gavin
        // ...state,
        // toppings: [...state.toppings, action.name],

        // toppings: state.toppings.map((t, topping) =>
        //   topping === action.name
        //     ? {
        //         toppings: [...state.pizzas, { topping: action.name }],
        //         // toppings: [
        //         //   ...state.toppings.filter((name, i) => i !== action.name),
        //         // ],
        //       }
        //     : { toppings: [...state.pizzas, { topping: action.name }] }
        // ),
      }

    case 'pizza-size':
      const basePrice = parseFloat(action.price)
      console.log('size', action.size)

      return {
        // pizzaTotal: state.pizzaTotal + toppingPrice,
        // ...state,
        // toppings: [...state.toppings, action.name],
        // ...state
        // pizzaTotal: [
        //   ...state.pizzaTotal,
        //    pizzaTotal: state.pizzaTotal + basePrice ,
        // ],
        // pizzaTotal: state.pizzaTotal + basePrice,
      }

    default:
      return state
  }
}

const PizzaPage = () => {
  const [{ toppings, size, pizzaTotal, toppingsTotal }, dispatch] = useReducer(
    reducer,
    {
      toppings: [],
      size: '',
      pizzaTotal: 0,
      toppingsTotal: 0,
    }
  )

  const [pizzaToppings, setPizzaToppings] = useState({
    toppingData: [],
    isLoaded: false,
  })

  const GetToppings = async () => {
    const menuCategory = 'Toppings'
    const response = await axios.get(
      `/api/items/category?categoryName=${menuCategory}`
    )
    console.log(response.data)
    setPizzaToppings({
      toppingData: response.data,
      isLoaded: true,
    })
    // console.log('PizzaToppings: ', response.data)
  }

  // const pizzaSizeSelection = async item => {
  //   dispatch({ type: 'pizza-size', item })
  //   // console.log('is the item here:', item)
  //   // const orderID = Context.orderId
  //   // const itemID = item.id
  //   // const response = axios
  //   //   .post(`/api/orderitem/addItem?orderID=${orderID}&itemID=${itemID}`)
  //   //   .then(response => {
  //   //     // console.log('After API . then: ', response)
  //   //     if (response.status === 200) {
  //   //       // need to set this to the item in the basket for the delete
  //   //       // set the OrderItem:Id here
  //   //       // sessionStorage.setItem('setOrderItemID', response.data.id)
  //   //       const orderItemId = response.data.id
  //   //       item.orderItemId = orderItemId
  //   //       Context.dispatch({ type: 'add-item', item })
  //   //     } else {
  //   //     }
  //   //   })
  // }

  const pizzaSizeSelection = e => {
    const price = e.target.value
    dispatch({ type: 'pizza-size', price })
  }

  useEffect(() => {
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
              src="./images/pepperoni-pizz.jpg"
              alt="pepperoni pizza"
            />
          </div>
          <div className="pizza-one-right">
            <h2>Custom Pizza</h2>
            <h3 style={{ color: '#CA0707' }}>$9.99 - $11.99</h3>
            <p>Small + $1.40; Medium + $1.70; Large + $2.00</p>
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
              ${parseFloat(toppingsTotal).toFixed(2)}
            </h3>
            <p>Final Total</p>
            <h3 style={{ color: '#CA0707' }}>
              ${parseFloat(pizzaTotal).toFixed(2)}
            </h3>
            <p>
              Each additional topping: Large + $2.00 (this should change by
              radio button)
            </p>
            <pre>{JSON.stringify(pizzaTotal, null, 2)}</pre>
          </div>
        </div>
        <div className="pizza-bottom">
          <div className="toppings-left">
            <div>
              <p>Left Half - $1.00</p>
            </div>
            <div className="toppings-detail">
              {/* *** MOVE THE MAPS TO A COMPONENT PAGE *** */}
              {pizzaToppings.toppingData.map((item, index) => {
                return (
                  <img
                    title={item.name}
                    src={item.imagePath}
                    alt={item.name}
                    onClick={() =>
                      // dispatch({ type: 'delete-item', index, item })
                      dispatch({
                        type: 'add-topping',
                        name: `left-${item.name}`,
                      })
                    }
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
              {pizzaToppings.toppingData.map((item, index) => {
                return (
                  <img
                    title={item.name}
                    src={item.imagePath}
                    alt={item.name}
                    onClick={() =>
                      dispatch({
                        type: 'add-topping',
                        name: `whole-${item.name}`,
                      })
                    }
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
              {pizzaToppings.toppingData.map((item, index) => {
                return (
                  <img
                    title={item.name}
                    src={item.imagePath}
                    alt={item.name}
                    onClick={() =>
                      dispatch({
                        type: 'add-topping',
                        name: `right-${item.name}`,
                      })
                    }
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="button-div">
          <button className="add-to-cart">ADD TO CART</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default PizzaPage
