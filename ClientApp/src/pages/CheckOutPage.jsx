import React, { useState, useEffect, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

const CheckOutPage = props => {
  return (
    <div>
      <Header />
      <div className="checkout-top">
        <div className="checkout-left">
          <h2>Billing Details</h2>
          <p>
            First Name<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Last Name<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Address<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            City<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            State<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Zip<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Phone<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            Email<span style={{ color: '#CA0707' }}> *</span>
          </p>
          <input type="text"></input>
          <p>
            <input
              type="radio"
              name="delivery-method"
              value="pick-up"
              classNAme="delivery-method"
            />{' '}
            Pick Up
          </p>
          <p>
            <input
              type="radio"
              name="delivery-method"
              value="delivery"
              classNAme="delivery-method"
            />{' '}
            Delivery
          </p>
        </div>
        <div className="checkout-right">
          {' '}
          <h2>Additional Information</h2>
          <input
            type="text"
            className="additional-info"
            value="Notes about your order, e.g. special notes for delivery"
          ></input>
        </div>
      </div>
      {/* start of table */}
      <div
        className="divTable"
        style={{ borderColor: 'black', borderStyle: '1px', color: 'white' }}
      >
        <div className="divTableBody">
          <div className="divTableRowHeader">
            <div className="divTableCellL">
              <p>Product</p>
            </div>
            <div className="divTableCellC">
              <p style={{ color: '#CA0707' }}>.</p>
            </div>
            <div className="divTableCellR">
              <p>Total</p>
            </div>
          </div>
          {/* Looping items */}
          <div className="divTableRow">
            <div className="divTableCellL">
              <p>Homemade Lasagna X 2</p>
            </div>
            <div className="divTableCellC">&nbsp;</div>
            <div className="divTableCellR">
              <p>$25.09</p>
            </div>
          </div>
          {/* end looping items */}
          <div className="divTableRow">
            <div className="divTableCellL">
              <p>&nbsp;</p>
            </div>
            <div className="divTableCellC">
              <p>SubTotal:</p>
            </div>
            <div className="divTableCellR">
              <p>$25.09</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellL">
              <p>&nbsp;</p>
            </div>
            <div className="divTableCellC">
              <p>Tax:</p>
            </div>
            <div className="divTableCellR">
              <p>$1.35</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellL">
              <p>&nbsp;</p>
            </div>
            <div className="divTableCellC">
              <p>Total:</p>
            </div>
            <div className="divTableCellR">
              <p>$26.44</p>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCellL">
              <p>&nbsp;</p>
            </div>
            <div className="divTableCellC">
              <p>&nbsp;</p>
            </div>
            <div className="divTableCellR">
              <button className="add-to-cart">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
      {/* end of table */}
      <Footer />
    </div>
  )
}

export default CheckOutPage
