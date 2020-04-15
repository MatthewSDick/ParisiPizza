import React, { Component, useState } from 'react'
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
import { orderContext } from './pages/OrderContext'

export default class App extends Component {
  // const [value, setValue] = useState({'Hello from context'})
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/complete" component={CompletePage} />
          {/* <orderContext.Provider value={{ value, setValue }}> */}
          <Route exact path="/order/:category" component={OrderPage} />
          {/* </orderContext.Provider> */}
          <Route exact path="/pizza" component={PizzaPage} />
          <Route exact path="/additems" component={AddItems} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
