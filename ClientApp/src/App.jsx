import React, { Component, useState, useReducer } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import NotFound from './pages/NotFound'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'
import CompletePage from './pages/CompletePage'
import OrderPage from './pages/OrderPage'
import PizzaPage from './pages/PizzaPage'
import AddItems from './pages/AddItems'
import './custom.scss'
import { OrderContext } from './pages/OrderContext'
import Header from './components/Header'
import axios from 'axios'

export default function App() {
  const [orderId, setOrderId] = useState(0)
  const [orderItemId, setOrderItemId] = useState(0)

  const reducer = (state, action) => {
    // Pizza is item.id = 61
    // Add to basket with an item-61
    // Add to pizzaTotal to the cartTotal

    switch (action.type) {
      case 'add-item':
        const itemID = action.item.id
        const itemAddPrice = parseFloat(action.item.price)
        console.log('Add: itemID', itemID)
        console.log('Add: orderItemId', action.item.orderItemIdID)

        return {
          ...state,
          basketItems: [
            ...state.basketItems,
            { item: action.item, orderItemID: action.item.orderItemId },
          ],
          cartTotal: state.cartTotal + itemAddPrice,
        }

      case 'add-pizza':
        // const orderId = Context.orderId
        // const itemId = Context.orderItemId
        // const price = Context.pizzaTotal
        // Context.dispatch({ type: 'add-pizza', itemId, price, orderId })

        const item = action.itemId
        const pizzaItemAddPrice = parseFloat(action.price)
        const orderId = action.orderId

        console.log('reducer - add-pizza item', item)
        console.log('reducer - add-pizza price', pizzaItemAddPrice)
        console.log('reducer - add-pizza orderId', orderId)

        return {
          ...state,
          basketItems: [
            ...state.basketItems,
            { item: item, orderItemID: orderId },
          ],
          cartTotal: state.cartTotal + pizzaItemAddPrice,
        }

      case 'delete-item':
        console.log('In delete: ', action.item)
        const itemDeletePrice = parseFloat(action.item.item.price)
        console.log('Delete:', itemDeletePrice)
        var itemToDelete = action.item.item.orderItemId

        return {
          ...state,
          basketItems: [
            ...state.basketItems.filter((x, i) => i !== action.index),
          ],
          cartTotal: state.cartTotal - itemDeletePrice,
        }

      case 'add-topping':
        console.log('action: ', action)
        var toppingPrice = 0
        const baseTotal = state.baseTotal
        console.log('basePrice', baseTotal)
        console.log('add-topping', action)

        const toppingSide = action.name.split('-')[0]
        const toppingType = action.name.split('-')[1]
        if (toppingSide == 'whole') {
          toppingPrice = 2
        } else {
          toppingPrice = 1
        }

        return {
          ...state,
          toppings: [
            ...state.toppings,
            { topping: action.name, type: toppingType, side: toppingSide },
          ],
          toppingsTotal: state.toppingsTotal + toppingPrice,
          pizzaTotal: state.pizzaTotal + toppingPrice,

          // selected: state.toppings.map((t, index) =>
          //   index === action.index ? { ...t, selected: !t.selected } : t
          // ),
        }

      case 'pizza-size':
        const basePrice = parseFloat(action.price)
        console.log('basePrice', action.price)

        return {
          ...state,
          baseTotal: basePrice,
          pizzaTotal: state.toppingsTotal + basePrice,
        }

      default:
        return state
    }
  }

  const [
    {
      basketItems,
      cartTotal,
      toppings,
      baseTotal,
      pizzaTotal,
      toppingsTotal,
      selected,
      toppingData,
    },
    dispatch,
  ] = useReducer(reducer, {
    basketItems: [],
    cartTotal: 0,
    toppings: [],
    baseTotal: 0,
    pizzaTotal: 0,
    toppingsTotal: 0,
    selected: false,
  })

  const contextObject = {
    orderId,
    setOrderId,
    basketItems,
    cartTotal,
    orderItemId,
    setOrderItemId,
    dispatch,
    toppings,
    baseTotal,
    pizzaTotal,
    toppingsTotal,
    selected,
    toppingData,
  }

  return (
    <Layout>
      <OrderContext.Provider value={contextObject}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/complete" component={CompletePage} />
          <Route exact path="/order/:category" component={OrderPage} />
          <Route exact path="/pizza/:category" component={PizzaPage} />
          <Route exact path="/additems" component={AddItems} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </OrderContext.Provider>
    </Layout>
  )
}
