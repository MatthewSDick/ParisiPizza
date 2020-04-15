import React, { useReducer, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const reducer = (state, action) => {
  console.log(action.name)
  switch (action.type) {
    case 'add-topping':
      // for add and delete topping need to see if the topping is already added
      // if not then add
      // if it is there then delete
      return {
        toppings: state.toppings.map((t, name) =>
          name == action.name
            ? // ...state.basketItems.filter((x, i) => i !== action.index)
              {
                toppings: [
                  ...state.toppings.filter((name, i) => i !== action.name),
                ],
              }
            : { toppings: [...state.toppings, { name: action.name }] }
        ),
        // toppings: state.toppings.map(t =>
        //   t.name == action.name
        //     ? // ...state.basketItems.filter((x, i) => i !== action.index)
        //       {
        //         toppings: [
        //           ...state.toppings.filter((name, i) => i !== action.name),
        //         ],
        //       }
        //     : { toppings: [...state.toppings, { name: action.name }] }
        // ),
        //  { toppings: [...state.toppings, !== action.idx ] }
        // state.filter((_, index) => index != action.index);
        // ? { ...t, !action.name }
        // toppings: [...state.toppings, { name: action.name }],
      }

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
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-anchovies' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Bacon_bwzh1l.jpg"
              alt="Bacon"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-bacon' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Beef_d8aoc4.jpg"
              alt="Ground Beef"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-beef' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Cheese_zjrpld.jpg"
              alt="Cheese"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-cheese' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Garlic_nfrlhz.jpg"
              alt="Garlic"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-garlic' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/GreenPeppers_ryzanv.jpg"
              alt="Green Peppers"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-green-peppers' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Ham_fec7kx.jpg"
              alt="Ham"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-ham' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Jalapeno_uduqjl.jpg"
              alt="Jalapeno"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-jalapeno' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Meatballs_gwghds.jpg"
              alt="Meatballs"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-meatballs' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Mushrooms_twme7d.jpg"
              alt="Mushrooms"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-mushrooms' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Olives_zcxlp6.jpg"
              alt="Olives"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-olives' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Onion_zzzmje.jpg"
              alt="Onion"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-onion' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pepperoni_vpkhtk.jpg"
              alt="Pepperoni"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-pepperoni' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pineapple_gbfeqb.jpg"
              alt="Pineapple"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-pineapple' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Sausage_wlsps7.jpg"
              alt="Sausage"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-sausage' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Tomatoes_j8wyg5.jpg"
              alt="Tomatoes"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'left-tomatoes' })
              }
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
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-anchovies' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Bacon_bwzh1l.jpg"
              alt="Bacon"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-bacon' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Beef_d8aoc4.jpg"
              alt="Ground Beef"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-beef' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Cheese_zjrpld.jpg"
              alt="Cheese"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-cheese' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Garlic_nfrlhz.jpg"
              alt="Garlic"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-garlic' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/GreenPeppers_ryzanv.jpg"
              alt="Green Peppers"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-green-peppers' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Ham_fec7kx.jpg"
              alt="Ham"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-ham' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Jalapeno_uduqjl.jpg"
              alt="Jalapeno"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-jalapeno' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Meatballs_gwghds.jpg"
              alt="Meatballs"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-meatballs' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Mushrooms_twme7d.jpg"
              alt="Mushrooms"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-mushrooms' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Olives_zcxlp6.jpg"
              alt="Olives"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-olives' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Onion_zzzmje.jpg"
              alt="Onion"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-onion' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pepperoni_vpkhtk.jpg"
              alt="Pepperoni"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-pepperoni' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pineapple_gbfeqb.jpg"
              alt="Pineapple"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-pineapple' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Sausage_wlsps7.jpg"
              alt="Sausage"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-sausage' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Tomatoes_j8wyg5.jpg"
              alt="Tomatoes"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'whole-tomatoes' })
              }
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
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-anchovies' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Bacon_bwzh1l.jpg"
              alt="Bacon"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-bacon' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Beef_d8aoc4.jpg"
              alt="Ground Beef"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-beef' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Cheese_zjrpld.jpg"
              alt="Cheese"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-cheese' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Garlic_nfrlhz.jpg"
              alt="Garlic"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-garlic' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/GreenPeppers_ryzanv.jpg"
              alt="Green Peppers"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-green-peppers' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Ham_fec7kx.jpg"
              alt="Ham"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-ham' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Jalapeno_uduqjl.jpg"
              alt="Jalapeno"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-jalapeno' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Meatballs_gwghds.jpg"
              alt="Meatballs"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-meatballs' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Mushrooms_twme7d.jpg"
              alt="Mushrooms"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-mushrooms' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Olives_zcxlp6.jpg"
              alt="Olives"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-olives' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Onion_zzzmje.jpg"
              alt="Onion"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-onion' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pepperoni_vpkhtk.jpg"
              alt="Pepperoni"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-pepperoni' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Pineapple_gbfeqb.jpg"
              alt="Pineapple"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-pineapple' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Sausage_wlsps7.jpg"
              alt="Sausage"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-sausage' })
              }
            />
            <img
              src="https://res.cloudinary.com/matthewdick/image/upload/v1586738047/Tomatoes_j8wyg5.jpg"
              alt="Tomatoes"
              onClick={() =>
                dispatch({ type: 'add-topping', name: 'right-tomatoes' })
              }
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
