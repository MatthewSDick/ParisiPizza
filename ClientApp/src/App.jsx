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

  const reducer = (state, action) => {
    //Don't know how to get this from Context while in reducer/dispatch
    // const Context = useOrder()
    // const orderID = Context.orderId
    switch (action.type) {
      case 'add-item':
        // using this because I can't pull from context
        // const orderID = sessionStorage.getItem('orderID')
        const itemID = action.item.id
        const itemAddPrice = parseFloat(action.item.price)
        console.log('Add:', itemAddPrice)
        // console.log('Info when adding: ', action.item)
        return {
          basketItems: [
            ...state.basketItems,
            { item: action.item, orderItemID: action.item.orderItemId },
          ],
          cartTotal: state.cartTotal + itemAddPrice,
        }

      case 'delete-item':
        // console.log('In delete: ', action.item)
        const itemDeletePrice = parseFloat(action.item.item.price)
        console.log('Delete:', itemDeletePrice)
        var itemToDelete = action.item.item.orderItemId
        // console.log('the action in delete;', action)

        const responseDelete = axios.delete(`/api/orderitem/${itemToDelete}`)
        return {
          basketItems: [
            ...state.basketItems.filter((x, i) => i !== action.index),
          ],
          cartTotal: state.cartTotal - itemDeletePrice,
        }

      default:
        return state
    }
  }

  const [{ basketItems, cartTotal, orderItemID }, dispatch] = useReducer(
    reducer,
    {
      basketItems: [],
      cartTotal: 0,
      orderItemID: '',
    }
  )

  const contextObject = {
    orderId,
    setOrderId,
    basketItems,
    cartTotal,
    orderItemID,
    dispatch,
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
          <Route exact path="/pizza" component={PizzaPage} />
          <Route exact path="/additems" component={AddItems} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </OrderContext.Provider>
    </Layout>
  )
}
