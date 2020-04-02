import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CompletePage = () => {
  return (
    <div>
      <Header />
      <h1 className="complete-h1">Thank You For Your Order</h1>
      <h2 style={{ textAlign: 'center' }}>
        We will email your receipt to:{' '}
        <span style={{ color: '#CA0707' }}>your_email@your_ISP.com</span>
      </h2>
      <div className="complete-container">
        {/* <table
          style={{
            width: '50%',
            textAlign: 'center',
            borderCollapse: 'collapse',
          }}
        >
          <tr
            style={{
              backgroundColor: '#CA0707',
              color: 'white',
              border: '1px solid black',
            }}
          >
            <td>
              <p>Product</p>
            </td>
            <td>
              <p>Quantity</p>
            </td>
            <td>
              <p>Total</p>
            </td>
          </tr>
          This is the loop
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p>Product information</p>
            </td>
            <td>
              <p>54</p>
            </td>
            <td>
              <p>$ 12.95</p>
            </td>
          </tr>
          the end of the loop
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p></p>
            </td>
            <td className="complete-totals">
              <p>Sub Total</p>
            </td>
            <td>
              <p>$ 12.00</p>
            </td>
          </tr>
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p></p>
            </td>
            <td className="complete-totals">
              <p>Sub Total</p>
            </td>
            <td>
              <p>$ 1.00</p>
            </td>
          </tr>
          <tr style={{ border: '1px solid #D9D9D9' }}>
            <td>
              <p></p>
            </td>
            <td className="complete-totals">
              <p>Total</p>
            </td>
            <td>
              <p style={{ color: '#CA0707' }}>$ 13.00</p>
            </td>
          </tr>
        </table> */}

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
      </div>
      <Footer />
    </div>
  )
}

export default CompletePage
