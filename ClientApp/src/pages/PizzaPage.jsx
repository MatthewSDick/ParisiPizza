import React, { useReducer, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-topping':
      return {
        toppings: [...state.toppings, { name: action.name }],
      }
    // case 'toggle-todo':
    //   return {}
    default:
      return state
  }
}

const PizzaPage = () => {
  const [{ toppings }, dispatch] = useReducer(reducer, {
    toppings: [],
  })

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
            <input type="radio" value="small" />
            Small
          </label>
          <br />
          <label>
            <input type="radio" value="medium" />
            Medium
          </label>
          <br />
          <label>
            <input type="radio" value="large" />
            Large
          </label>
          <p>Options Total</p>
          <h3 style={{ color: '#CA0707' }}>$0.00</h3>
          <p>Final Total</p>
          <h3 style={{ color: '#CA0707' }}>$0.00</h3>
          <p>
            Each additional topping: Large + $2.00 (this should change by radio
            button)
          </p>
          <pre>{JSON.stringify(toppings, null, 2)}</pre>
        </div>
      </div>
      <div className="pizza-bottom">
        <div className="toppings-left">
          <div>
            <p>Left Half - $1.00</p>
          </div>
          <div className="toppings-detail">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Anchovies_ye67hd.jpg"
              alt="Anchovies"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Bacon_bwzh1l.jpg"
              alt="Bacon"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Beef_d8aoc4.jpg"
              alt="Ground Beef"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Cheese_zjrpld.jpg"
              alt="Cheese"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Garlic_nfrlhz.jpg"
              alt="Garlic"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/GreenPeppers_ryzanv.jpg"
              alt="Green Peppers"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Ham_fec7kx.jpg"
              alt="Ham"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Jalapeno_uduqjl.jpg"
              alt="Jalapeno"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Meatballs_gwghds.jpg"
              alt="Meatballs"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Mushrooms_twme7d.jpg"
              alt="Mushrooms"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Olives_zcxlp6.jpg"
              alt="Olives"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Onion_zzzmje.jpg"
              alt="Onion"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pepperoni_vpkhtk.jpg"
              alt="Pepperoni"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pineapple_gbfeqb.jpg"
              alt="Pineapple"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Sausage_wlsps7.jpg"
              alt="Sausage"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Tomatoes_j8wyg5.jpg"
              alt="Tomatoes"
            />
          </div>
        </div>

        <div className="toppings-whole">
          <div>
            <p>Whole Pizza - $2.00</p>
          </div>
          <div className="toppings-detail">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Anchovies_ye67hd.jpg"
              alt="Anchovies"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Bacon_bwzh1l.jpg"
              alt="Bacon"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Beef_d8aoc4.jpg"
              alt="Ground Beef"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Cheese_zjrpld.jpg"
              alt="Cheese"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Garlic_nfrlhz.jpg"
              alt="Garlic"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/GreenPeppers_ryzanv.jpg"
              alt="Green Peppers"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Ham_fec7kx.jpg"
              alt="Ham"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Jalapeno_uduqjl.jpg"
              alt="Jalapeno"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Meatballs_gwghds.jpg"
              alt="Meatballs"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Mushrooms_twme7d.jpg"
              alt="Mushrooms"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Olives_zcxlp6.jpg"
              alt="Olives"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Onion_zzzmje.jpg"
              alt="Onion"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pepperoni_vpkhtk.jpg"
              alt="Pepperoni"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pineapple_gbfeqb.jpg"
              alt="Pineapple"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Sausage_wlsps7.jpg"
              alt="Sausage"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Tomatoes_j8wyg5.jpg"
              alt="Tomatoes"
            />
          </div>
        </div>
        <div className="toppings-right">
          <div>
            <p>Right Half - $1.00</p>
          </div>
          <div className="toppings-detail">
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Anchovies_ye67hd.jpg"
              alt="Anchovies"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Bacon_bwzh1l.jpg"
              alt="Bacon"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Beef_d8aoc4.jpg"
              alt="Ground Beef"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Cheese_zjrpld.jpg"
              alt="Cheese"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Garlic_nfrlhz.jpg"
              alt="Garlic"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/GreenPeppers_ryzanv.jpg"
              alt="Green Peppers"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Ham_fec7kx.jpg"
              alt="Ham"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Jalapeno_uduqjl.jpg"
              alt="Jalapeno"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Meatballs_gwghds.jpg"
              alt="Meatballs"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Mushrooms_twme7d.jpg"
              alt="Mushrooms"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Olives_zcxlp6.jpg"
              alt="Olives"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Onion_zzzmje.jpg"
              alt="Onion"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pepperoni_vpkhtk.jpg"
              alt="Pepperoni"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pineapple_gbfeqb.jpg"
              alt="Pineapple"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Sausage_wlsps7.jpg"
              alt="Sausage"
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Tomatoes_j8wyg5.jpg"
              alt="Tomatoes"
            />
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

export default PizzaPage
