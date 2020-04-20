# SDG Console template

This is the template app SDG uses to start off learning C# and .NET

## What is does

This provides a basic console application with the following features:

- A gitignore
- A README
- Tasks that allows users to push to GitHub Automatically.
- EF Core integration
- a basic [React SPA + Web API](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-3.1&tabs=visual-studio)
- docker set up
- Swagger documentations
- CORS
- Dependency Injection of DbContext
- Scaffolding
- React integration

## How to work with Custom Templates

First, [read the docs](https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates).

Now with that in mind, The project has 3 main parts:

1. `sdg-react-template.nuspec`. This file contains the meta data for the package that is built, The only items that need touched are the `<files>` and the `<version>`

2. `SampleApp`. This is sample project. Any changes to the template happen here.

3. `SampleApp\template.config`. This contains the behavior of the package. This generally isn't touch unless you are changing the project type.

## How to update something

To update, I would recommend opening just the `SampleApp` Folder and working in that project like it was just a normal C# app. Get things working and then test it out.

## How to deploy

Install [nuget](https://docs.microsoft.com/en-us/nuget/reference/nuget-exe-cli-reference) and [set your API key for nuget.org](https://docs.microsoft.com/en-us/nuget/reference/cli-reference/cli-ref-setapikey)

1. Delete the `bin` and the `obj` folder
2. Bump the version number in the `sdg-react-template.nuspec`.
3. run `nuget pack .`
4. run `nuget push SDG.templates.Web.React.X.X.X.nupkg -Source https://www.nuget.org` with the correct version number

This will push it to Nuget. Nuget will index the package, and when it's done indexing (~ 1-30 minutes), it will available for install. To install on a students laptop

```sh
dotnet new --install SDG.templates.Web.React::X.X.X
```

To update after download, its the same command

```sh
dotnet new --install SDG.templates.Web.React::X.X.X
```

# Parisi

Pizza shop that includes italian dinner items.
I know this is a big web site but at a minimum I would like to have the following functionality...

Functionality:
Allow people to order online.
Add and delete items from cart.
Finalize order and pay

Colors
RED - CA0707
GREEN - 548C1D
YELLOW - FAC123
GRAY - D9D9D9
WHITE - FFFFFF

*\*\* Database
Catagory
-- *Id
-- Name
-- Item ID

Customer Table
-- \*Id  
-- Name
-- Address
-- City
-- State
-- Zip
-- Phone
-- Email
-- Password
-- List<Order> Orders

Orders Table
-- \*Id
-- Items
-- Order Time
-- Customer ID

Items Table
-- \*Id
-- Name
-- Description
-- Price
-- Image Path
-- Order ID
-- Category ID

Old Cart

      <div className="cart-page">
        <div className="cart-table">
          <div id="resp-table">
            {/* <div id="resp-table-caption">Responsive Table without Table tag</div> */}
            <div id="resp-table-header">
              <div className="table-header-cell"></div>
              <div className="table-header-cell"></div>
              <div className="table-header-cell">Product</div>
              <div className="table-header-cell">Price</div>
              <div className="table-header-cell">Quantity</div>
              <div className="table-header-cell">Total</div>
            </div>
            <div id="resp-table-body">
              <div className="resp-table-row"></div>
              <div className="table-body-cell">X</div>
              <div className="table-body-cell">Image</div>
              <div className="table-body-cell">Product</div>
              <div className="table-body-cell">$12.95</div>
              <div className="table-body-cell">
                {' '}
                <input
                  className="item-quantity"
                  type="text"
                  id="item_name"
                  name="item_name"
                  value="12"
                ></input>
              </div>
              <div className="table-body-cell">$12.95</div>
              <div className="resp-table-row"></div>
              <div className="table-body-cell">X</div>
              <div className="table-body-cell">Image</div>
              <div className="table-body-cell">Product</div>
              <div className="table-body-cell">$12.95</div>
              <div className="table-body-cell">
                <input
                  className="item-quantity"
                  type="text"
                  id="item_name"
                  name="item_name"
                  value="12"
                ></input>
              </div>
              <div className="table-body-cell">$12.95</div>
            </div>
            <div id="resp-table-footer">
              <div className="table-footer-cell"></div>
              <div className="table-footer-cell"></div>
              <div className="table-footer-cell"></div>
              <div className="table-footer-cell"></div>
              <div className="table-footer-cell">
                <button className="add-to-cart">UPDATE CART</button>
              </div>
              <div className="table-footer-cell">
                <button className="add-to-cart">EMPTY CART</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-totals">
          <div id="resp-table">
            <div id="resp-table-body"></div>
            <div className="resp-table-row"></div>
            <div className="table-body-cell">Sub Total:</div>
            <div className="table-body-cell">$ 15.00</div>
            <div className="resp-table-row"></div>
            <div className="table-body-cell">Tax:</div>
            <div className="table-body-cell">$ 1.50</div>
            <div className="resp-table-row"></div>
            <div className="table-body-cell">Total:</div>
            <div className="table-body-cell">$ 16.50</div>
          </div>
          <div id="resp-table-footer">
            <div className="table-footer-cell">
              <button className="add-to-cart">EMPTY CART</button>
            </div>
            <div className="table-footer-cell">
              <button className="add-to-cart">EMPTY CART</button>
            </div>
          </div>
        </div>
      </div>





      @media (min-width: 760px) {

a {
color: #0366d6;
}

code {
color: #e01a76;
}

.btn-primary {
color: #fff;
background-color: #1b6ec2;
border-color: #1861ac;
}

.top {
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340364/main_image_wt54gz.jpg');
background-size: cover;
}

.top > h2 {
color: #fac123;
text-align: center;
}

.top > h1 {
color: white;
text-align: center;
}

.top-button {
background-color: #fac123;
color: white;
border: 0;
margin-bottom: 1rem;
font-size: 1rem;
font: bold;
width: 7rem;
height: 3rem;
border-radius: 25px;
}

.top-checkout {
background-color: #fac123;
color: white;
border: 0;
margin-left: 1rem;
border-radius: 25px;
height: 1.5rem;
}

.top-wrapper {
width: 100%;
display: flex;
align-items: center;
justify-content: center;
}

.top-money {
margin-left: 1rem;
font-weight: bold;
}

.top-items {
margin-left: 0.5rem;
}

.top-items-count {
margin-left: 1rem;
}

.right-nav {
list-style: none;
display: flex;
width: auto;
justify-content: flex-end;
align-items: center;
margin-top: 1rem;
padding: 0;
}

.cart {
height: 1.5rem;
}

.flex1 {
display: flex;
/_ border-color: red;
background-color: red; _/
align-items: flex-start;
}

.flex1 div {
width: 33%;
}

.one {
display: flex;
color: white;
/_ align-items: flex-start; _/
margin: 1rem 1rem 1rem 1rem;
font: 16px / 1 sans-serif;
font-style: sans-serif;
font-size: 16px;
}

.two {
/_ border-color: green;
background-color: green; _/
display: flex;
justify-content: center;
}

.three {
/_ border-color: blue;
background-color: blue; _/
color: white;
margin-right: 1rem;
}

.navbar {
overflow: hidden;
background-color: transparent;
font-family: Arial;
color: white;
font-style: sans-serif;
font-size: 16px;
}

/_ Links inside the navbar _/

.navbar a {
margin-top: 2rem;
float: left;
font-size: 16px;
color: white;
text-align: center;
padding: 14px 10px;
text-decoration: none;
font-style: sans-serif;
font-size: 16px;
}

/_ The dropdown container _/

.dropdown {
color: white;
float: left;
overflow: hidden;
padding: 0;
font-style: sans-serif;
font-size: 16px;
margin: 0rem 0rem 0rem 1rem;
}

/_ Dropdown button _/

.dropdown .dropbtn {
font-size: 16px;
border: none;
outline: none;
color: white;
padding: 0;
background-color: inherit;
font-style: sans-serif;
font-size: 16px;
/_ Important for vertical align on mobile phones _/
margin: 0;
/_ Important for vertical align on mobile phones _/
}

/_ Add a red background color to navbar links on hover _/

.navbar a:hover,
.dropdown:hover .dropbtn {
background-color: #ff5e5e;
}

/_ Dropdown content (hidden by default) _/

.dropdown-content {
display: none;
position: absolute;
background-color: inherit;
min-width: 5px;
max-width: 10rem;
box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
font-style: sans-serif;
font-size: 16px;
}

/_ Links inside the dropdown _/

.dropdown-content a {
float: none;
// color: white;
color: #fac123;
padding: 3px 3px;
min-width: 50px;
// max-width: 2rem;
margin: 0.5rem 0rem 0rem 0rem;
text-decoration: none;
display: block;
text-align: left;
font-style: sans-serif;
font-size: 16px;
}

.go-home {
color: #fac123;
font-style: sans-serif;
font-size: 16px;
padding: 0;
background-color: inherit;
border: 0;
}

/_ Add a grey background color to dropdown links on hover _/

.dropdown-content a:hover {
// background-color: #ddd;
// color: black;
color: #548c1d;
}

/_ Show the dropdown menu on hover _/

.dropdown:hover .dropdown-content {
display: block;
}

.footer-name {
grid-column-start: 1;
grid-column-end: 2;
margin-bottom: 0rem;
padding-bottom: 0.3rem;
}

.dot-facebook {
// background-image: url('./images/Rounded_Facebook_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Facebook_svg-256_i6qzho.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.dot-instagram {
// background-image: url('./images/Rounded_Instagram_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Instagram_svg-256_zruxsy.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.dot-twitter {
// background-image: url('./images/Rounded_Twitter5_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Twitter5_svg-256_iwbctn.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.dot-pintrest {
// background-image: url('./images/Rounded_Pinterest2_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Pinterest2_svg-256_lkdmsc.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.social {
grid-column-start: 3;
grid-column-end: 4;
align-items: center;
justify-items: center;
margin-top: -1.5rem;
margin-left: 6rem;
}

footer > ul > li > img {
height: 3rem;
}

footer > h4 {
color: white;
font-size: 1rem;
padding: 1rem 0rem 1rem 2rem;
}

.footer-name {
grid-column-start: 1;
grid-column-end: 2;
margin-bottom: 0rem;
padding-bottom: 0.5rem;
}

.footer-address {
grid-column-start: 1;
grid-column-end: 2;
margin-top: 0rem;
padding-top: 0.3rem;
}

footer {
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340303/bottom_boards_i0ttpg.jpg');
background-size: cover;
background-repeat: no-repeat;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 2;
grid-template-rows: 100;
display: grid;
}

.div-line {
margin: 5rem 20rem 5rem 20rem;
height: 1px;
background-color: #ff5e5e;
}

.div-line-left {
margin: 1rem 0rem 0rem 2rem;
height: 0px;
width: 40%;
background-color: #ff5e5e;
padding: 1px 1rem 1px 1rem;
margin-left: 2rem;
}

.div-line-right {
margin: 1rem 2rem 0rem 0rem;
height: 0px;
width: 40%;
background-color: #ff5e5e;
padding: 1px 1rem 1px 1rem;
margin-right: 2rem;
}

.pizza-logo {
height: 2rem;
}

.line {
display: flex;
justify-content: space-between;
margin-top: 1rem;
}

.content {
text-align: center;
}

.center h1 {
text-align: center;
margin: 2rem 4rem 0rem 4rem;
}

.center h2 {
text-align: center;
}

.center-images {
display: flex;
border-width: 0px;
align-items: flex-start;
}

.center-images div {
width: 33%;
}

.left-image {
display: flex;
width: 33%;
justify-content: center;
margin: 1rem 1rem 1rem 1rem;
border: 1px;
}

.right-image {
display: flex;
width: 33%;
justify-content: center;
margin: 1rem 1rem 1rem 1rem;
border: 1px;
}

.center-images img {
width: 90%;
height: 90%;
}

.welcome-message {
margin: 4rem 0rem 1rem 0rem;
}

.hours-wine {
display: flex;
border-width: 0px;
align-items: flex-start;
margin-bottom: 1rem;
}

.hours {
display: flex;
width: 50%;
justify-content: center;
align-content: center;
margin-top: 2rem;
}

.wine {
display: flex;
width: 50%;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
}

.wine img {
width: inherit;
}

.hours td {
font-size: 1.5rem;
}

.checkout label {
font-size: 1.2rem;
}

.checkout input {
border: solid;
border-color: gray;
border-width: 1px;
height: 1.8rem;
border-radius: 25px;
}

.checkout {
grid-template-columns: 2;
grid-template-rows: 20;
display: grid;
width: 100%;
}

.fa fa-user {
grid-column-start: 2;
grid-column-end: 3;
margin-top: 0rem;
padding-top: 0.5rem;
}

.notes {
grid-column-start: 2;
grid-column-end: 3;
}

.pizza-one {
display: flex;
margin: 3rem 0rem 2rem 0rem;
}

.pizza-one-left {
width: 50%;
text-align: right;
}

.pizza-one-right {
width: 50%;
margin-left: 3rem;
}

.pepp-pizza {
max-height: 100%;
}

.pizza-bottom {
display: flex;
justify-content: center;
margin-bottom: 1rem;
}

.toppings-left {
width: 20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
}

.toppings-whole {
width: 20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
}

.toppings-right {
width: 20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
}

.toppings-detail {
/_ background-color: white; _/
display: flex;
flex-wrap: wrap;
border-style: solid;
border-color: black;
border-width: 1px;
justify-content: center;
}

.pizza-bottom p {
text-align: center;
}

.add-to-cart {
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.button-div {
text-align: center;
font-weight: bold;
padding: 1rem;
}

#resp-table {
width: 80%;
display: table;
}

#resp-table-caption {
display: table-caption;
text-align: center;
font-size: 30px;
font-weight: bold;
}

#resp-table-header {
display: table-header-group;
background-color: #ca0707;
font-size: 1.3rem;
}

.table-header-cell {
display: table-cell;
padding: 10px;
text-align: justify;
border-bottom: 1px solid black;
color: white;
text-align: center;
border: 1px;
border-style: solid;
border-color: black;
}

#resp-table-body {
display: table-row-group;
}

.resp-table-row {
display: table-row;
}

.table-body-cell {
display: table-cell;
text-align: center;
border: 1px;
border-style: solid;
border-color: black;
}

#resp-table-footer {
display: table-footer-group;
/_ background-color: gray; _/
font-weight: bold;
font-size: 25px;
color: rgba(255, 255, 255, 0.45);
}

.table-footer-cell {
display: table-cell;
padding: 10px;
text-align: justify;
border-bottom: 1px solid black;
}

#resp-table-footer div:nth-child(5) {
text-align: right;
}

.cart-table {
display: flex;
justify-content: center;
margin-top: 1.5rem;
border-style: solid;
border-color: black;
}

.item-quantity {
font-size: 16px;
width: auto;
}

.cart-totals {
width: 30%;
border-style: solid;
border-color: black;
}

.cart-page {
display: flex;
flex-wrap: wrap;
flex-direction: column;
border-style: solid;
border-color: black;
}

.complete-h1 {
text-align: center;
margin-top: 2rem;
}

.complete-container {
width: 100%;
text-align: center;
justify-content: center;
margin-bottom: 1.5rem;
border-collapse: collapse;
}

.complete-totals {
padding-right: 1rem;
text-align: right;
}

.order-page {
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin: 2rem 0rem 1.5rem 0rem;
}

.order-page-left {
width: 25%;
/_ background-color: #F5F5F5; _/
}

.order-page-right {
width: 69%;
}

.order-item {
background-color: #d9d9d9;
width: 25%;
/_ width: 20rem; _/
text-align: center;
padding: 1rem;
margin: 0rem 0.25rem 0.5rem 0.25rem;
}

.order-image {
/_ height: 100%; _/
width: 100%;
height: 50%;
}

.catagory-list {
list-style: none;
display: flex;
flex-wrap: wrap;
padding: 0;
margin-top: 0rem;
margin-left: 2rem;
}

.cart-view {
background-color: #f5f5f5;
/_ border: 1px;
border-style: solid; _/
/_ border-color: purple; _/
padding-bottom: 1rem;
margin-left: 2rem;
}

.order-cart-image-box {
width: 10vh;
height: auto;
}

.order-cart-image {
width: 100%;
margin: 0.5rem 0.5rem 0.5rem 0.5rem;
/_ border: solid 1px red; _/
}

.order-cart-list-item {
display: flex;
flex-wrap: wrap;
background-color: white;
margin: 1rem;
flex-wrap: row;
/_ border: solid 1px yellowgreen; _/
}

.order-cart-details {
/_ border: solid 1px red; _/
width: 69%;
margin-left: 1rem;
}

.order-cart-head {
margin: 0rem 1rem 1rem 1rem;
padding: 1rem 0rem 0rem 0rem;
}

.order-add-to-cart-btn {
color: white;
background-color: #548c1d;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.order-buttons {
display: flex;
flex-wrap: wrap;
flex-direction: row;
}

.order-left-button {
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.order-right-button {
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.order-buttons-left {
width: 50%;
text-align: center;
}

.order-buttons-right {
width: 50%;
text-align: center;
}

.order-subtotal {
margin-top: 2rem;
margin-left: 1rem;
}

.checkout-top {
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin: 1rem;
}

.checkout-top p {
margin: 1.5rem 0rem 0.5rem 0rem;
}

.checkout-left {
width: 49%;
}
.checkout-right {
width: 49%;
}

.checkout-left input[type='text'] {
border-radius: 25px;
border: 1px solid #d9d9d9;
/_ padding: 20px; _/
width: 90%;
height: 2rem;
padding: 0rem 1rem 0rem 1rem;
font-size: 1rem;
background-color: #f5f5f5;
}

.checkout-top p {
color: #787979;
}

.delivery-method {
width: 10rem;
height: 10rem;
border-radius: 0;
}

.additional-info {
border-radius: 25px;
border: 1px solid #d9d9d9;
/_ padding: 20px; _/
width: 90%;
height: 8rem;
padding: 0rem 1rem 0rem 1rem;
font-size: 1rem;
background-color: #f5f5f5;
}

/_ DYNAMIC TABLE _/

#title {
text-align: center;
font-family: arial, sans-serif;
}

#students {
text-align: center;
font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
border-collapse: collapse;
border: 3px solid #ddd;
width: 100%;
}

#students td,
#students th {
border: 1px solid #ddd;
padding: 8px;
}

#students tr:nth-child(even) {
background-color: #f2f2f2;
}

#students tr:hover {
background-color: #ddd;
}

#students th {
padding-top: 12px;
padding-bottom: 12px;
text-align: center;
background-color: #4caf50;
color: white;
}

/_ END DYNAMIC TABLE _/

.checkout-table {
width: 100%;
display: flex;
justify-content: center;
/_ flex-wrap: wrap; _/
}

.checkout-table-header {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.product {
text-align: center;
background-color: #ca0707;
color: white;
vertical-align: middle;
width: 50%;
}

.middle {
background-color: #ca0707;
width: 10%;
}

.total {
text-align: center;
background-color: #ca0707;
color: white;
vertical-align: middle;
width: 10%;
}

.row {
width: 80%;
}

.divTable {
text-align: center;
/_ border: black 1px solid; _/
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
}

.divTableBody {
width: 70%;
margin: 2rem 0rem 3rem 0rem;
}

.divTableRowHeader {
background-color: #ca0707;
color: white;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
}

.divTableRow {
/_ width: 70%; _/
display: inline-block;
border: lightgray 1px solid;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
color: black;
margin: 0.5rem;
background-color: white;
}

.divTableCellL {
width: 60%;
/_ border: red 1px solid; _/
}

.divTableCellC {
width: 20%;
text-align: center;
/_ border: green 1px solid; _/
}

.divTableCellR {
width: 20%;
/_ border: purple 1px solid; _/
}
.divTableCellDelete {
width: 15%;
height: auto;
// border: black 1px solid;
}

.divTableCellPic {
width: 15%;
// border: red 1px solid;
}
.divTableCellProduct {
width: 45%;
// border: blue 1px solid;
}
.divTableCellPrice {
width: 15%;
// border: purple 1px solid;
}

.divTableCellTotal {
width: 15%;
// border: yellow 1px solid;
}

.divTableCellQuantity {
width: 15%;

    /* border: purple 1px solid; */

}

.divTableFooter {
display: inline-block;
border: lightgray 1px solid;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
color: black;
padding: 1rem;
}

.divTableCartBottom {
text-align: center;
/_ border: black 1px solid; _/
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
width: 100%;
}

.divTableBodyCart {
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
width: 20%;
margin: 0rem 0rem 1rem 0rem;
}

.divTableBodyCart .divTableRow {
height: 1rem;
align-content: center;
border: 0;
padding: 0.5rem;
margin: 0;
}

.divTableRowCart {
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
/_ border: black 1px solid; _/
}

.divTableCellCartLeft {
width: 50%;
text-align: right;
}

.divTableCellCartRight {
width: 50%;
text-align: center;
}

.divTableRowCartButton {
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
// border: lightgray 1px solid;
padding: 1rem;
}

.add-items input {
width: 50%;
}

.checkout-image {
height: auto;
width: 4vw;
}

.trashcan {
height: 5vh;
width: auto;
}

.order-trashcan {
height: 2vh;
width: auto;
}

.order-divTableCellDelete {
width: 10%;
height: auto;
text-align: center;
// border: black 1px solid;
}

.order-divTableCellPic {
max-width: 100%;
max-height: 100%;
display: block;
align-self: center;
justify-items: center;
// border: red 1px solid;
}
.order-divTableCellProduct {
width: 55%;
// border: blue 1px solid;
margin-left: 0.5rem;
}
.order-divTableCellPrice {
width: 10%;
// border: purple 1px solid;
}

// .order-divTableCellTotal {
// width: 5%;
// border: yellow 1px solid;
// }

.order-divTableCellPic {
width: auto;
align-self: flex-end;
}

.order-checkout-image {
height: auto;
width: 4vw;
align-items: center;
}

.order-divTableRow {
/_ width: 70%; _/
display: inline-block;
// border: black 1px solid;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
color: black;
margin: 0.5rem;
background-color: white;
}

.order-checkout {
margin: 1rem;
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.checkout-order-page {
text-align: center;
}

.topping-image {
margin: 0px;
}

.cart-trashcan {
height: 4vh;
}
}

@media (min-width: 1200px) {
a {
color: #0366d6;
}

code {
color: #e01a76;
}

.btn-primary {
color: #fff;
background-color: #1b6ec2;
border-color: #1861ac;
}

.top {
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340364/main_image_wt54gz.jpg');
background-size: cover;
}

.top > h2 {
color: #fac123;
text-align: center;
}

.top > h1 {
color: white;
text-align: center;
}

.top-button {
background-color: #fac123;
color: white;
border: 0;
margin-bottom: 1rem;
font-size: 1rem;
font: bold;
width: 7rem;
height: 3rem;
border-radius: 25px;
}

.top-checkout {
background-color: #fac123;
color: white;
border: 0;
margin-left: 1rem;
border-radius: 25px;
height: 1.5rem;
}

.top-wrapper {
width: 100%;
display: flex;
align-items: center;
justify-content: center;
}

.top-money {
margin-left: 1rem;
font-weight: bold;
}

.top-items {
margin-left: 0.5rem;
}

.top-items-count {
margin-left: 1rem;
}

.right-nav {
list-style: none;
display: flex;
width: auto;
justify-content: flex-end;
align-items: center;
margin-top: 1rem;
padding: 0;
}

.cart {
height: 1.5rem;
}

.flex1 {
display: flex;
/_ border-color: red;
background-color: red; _/
align-items: flex-start;
}

.flex1 div {
width: 33%;
}

.one {
display: flex;
color: white;
/_ align-items: flex-start; _/
margin: 1rem 1rem 1rem 1rem;
font: 16px / 1 sans-serif;
font-style: sans-serif;
font-size: 16px;
}

.two {
/_ border-color: green;
background-color: green; _/
display: flex;
justify-content: center;
}

.three {
/_ border-color: blue;
background-color: blue; _/
color: white;
margin-right: 1rem;
}

.navbar {
overflow: hidden;
background-color: transparent;
font-family: Arial;
color: white;
font-style: sans-serif;
font-size: 16px;
}

/_ Links inside the navbar _/

.navbar a {
margin-top: 2rem;
float: left;
font-size: 16px;
color: white;
text-align: center;
padding: 14px 10px;
text-decoration: none;
font-style: sans-serif;
font-size: 16px;
}

/_ The dropdown container _/

.dropdown {
color: white;
float: left;
overflow: hidden;
padding: 0;
font-style: sans-serif;
font-size: 16px;
margin: 0rem 0rem 0rem 1rem;
}

/_ Dropdown button _/

.dropdown .dropbtn {
font-size: 16px;
border: none;
outline: none;
color: white;
padding: 0;
background-color: inherit;
font-style: sans-serif;
font-size: 16px;
/_ Important for vertical align on mobile phones _/
margin: 0;
/_ Important for vertical align on mobile phones _/
}

/_ Add a red background color to navbar links on hover _/

.navbar a:hover,
.dropdown:hover .dropbtn {
background-color: #ff5e5e;
}

/_ Dropdown content (hidden by default) _/

.dropdown-content {
display: none;
position: absolute;
background-color: inherit;
min-width: 5px;
max-width: 10rem;
box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
font-style: sans-serif;
font-size: 16px;
}

/_ Links inside the dropdown _/

.dropdown-content a {
float: none;
// color: white;
color: #fac123;
padding: 3px 3px;
min-width: 50px;
// max-width: 2rem;
margin: 0.5rem 0rem 0rem 0rem;
text-decoration: none;
display: block;
text-align: left;
font-style: sans-serif;
font-size: 16px;
}

.go-home {
color: #fac123;
font-style: sans-serif;
font-size: 16px;
padding: 0;
background-color: inherit;
border: 0;
}

/_ Add a grey background color to dropdown links on hover _/

.dropdown-content a:hover {
// background-color: #ddd;
// color: black;
color: #548c1d;
}

/_ Show the dropdown menu on hover _/

.dropdown:hover .dropdown-content {
display: block;
}

.footer-name {
grid-column-start: 1;
grid-column-end: 2;
margin-bottom: 0rem;
padding-bottom: 0.3rem;
}

.dot-facebook {
// background-image: url('./images/Rounded_Facebook_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Facebook_svg-256_i6qzho.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.dot-instagram {
// background-image: url('./images/Rounded_Instagram_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Instagram_svg-256_zruxsy.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.dot-twitter {
// background-image: url('./images/Rounded_Twitter5_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Twitter5_svg-256_iwbctn.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.dot-pintrest {
// background-image: url('./images/Rounded_Pinterest2_svg-256.png');
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340363/Rounded_Pinterest2_svg-256_lkdmsc.png');
background-size: cover;
height: 50px;
width: 50px;
background-color: white;
border-radius: 50%;
display: inline-block;
}

.social {
grid-column-start: 3;
grid-column-end: 4;
align-items: center;
justify-items: center;
margin-top: -1.5rem;
margin-left: 6rem;
}

footer > ul > li > img {
height: 3rem;
}

footer > h4 {
color: white;
font-size: 1rem;
padding: 1rem 0rem 1rem 2rem;
}

.footer-name {
grid-column-start: 1;
grid-column-end: 2;
margin-bottom: 0rem;
padding-bottom: 0.5rem;
}

.footer-address {
grid-column-start: 1;
grid-column-end: 2;
margin-top: 0rem;
padding-top: 0.3rem;
}

footer {
background-image: url('https://res.cloudinary.com/matthewdick/image/upload/v1587340303/bottom_boards_i0ttpg.jpg');
background-size: cover;
background-repeat: no-repeat;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 2;
grid-template-rows: 100;
display: grid;
}

.div-line {
margin: 5rem 20rem 5rem 20rem;
height: 1px;
background-color: #ff5e5e;
}

.div-line-left {
margin: 1rem 0rem 0rem 2rem;
height: 0px;
width: 40%;
background-color: #ff5e5e;
padding: 1px 1rem 1px 1rem;
margin-left: 2rem;
}

.div-line-right {
margin: 1rem 2rem 0rem 0rem;
height: 0px;
width: 40%;
background-color: #ff5e5e;
padding: 1px 1rem 1px 1rem;
margin-right: 2rem;
}

.pizza-logo {
height: 2rem;
}

.line {
display: flex;
justify-content: space-between;
margin-top: 1rem;
}

.content {
text-align: center;
}

.center h1 {
text-align: center;
margin: 2rem 4rem 0rem 4rem;
}

.center h2 {
text-align: center;
}

.center-images {
display: flex;
border-width: 0px;
align-items: flex-start;
}

.center-images div {
width: 33%;
}

.left-image {
display: flex;
width: 33%;
justify-content: center;
margin: 1rem 1rem 1rem 1rem;
border: 1px;
}

.right-image {
display: flex;
width: 33%;
justify-content: center;
margin: 1rem 1rem 1rem 1rem;
border: 1px;
}

.center-images img {
width: 90%;
height: 90%;
}

.welcome-message {
margin: 4rem 0rem 1rem 0rem;
}

.hours-wine {
display: flex;
border-width: 0px;
align-items: flex-start;
margin-bottom: 1rem;
}

.hours {
display: flex;
width: 50%;
justify-content: center;
align-content: center;
margin-top: 2rem;
}

.wine {
display: flex;
width: 50%;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
}

.wine img {
width: inherit;
}

.hours td {
font-size: 1.5rem;
}

.checkout label {
font-size: 1.2rem;
}

.checkout input {
border: solid;
border-color: gray;
border-width: 1px;
height: 1.8rem;
border-radius: 25px;
}

.checkout {
grid-template-columns: 2;
grid-template-rows: 20;
display: grid;
width: 100%;
}

.fa fa-user {
grid-column-start: 2;
grid-column-end: 3;
margin-top: 0rem;
padding-top: 0.5rem;
}

.notes {
grid-column-start: 2;
grid-column-end: 3;
}

.pizza-one {
display: flex;
margin: 3rem 0rem 2rem 0rem;
}

.pizza-one-left {
width: 50%;
text-align: right;
}

.pizza-one-right {
width: 50%;
margin-left: 3rem;
}

.pepp-pizza {
max-height: 100%;
}

.pizza-bottom {
display: flex;
justify-content: center;
margin-bottom: 1rem;
}

.toppings-left {
width: 20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
}

.toppings-whole {
width: 20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
}

.toppings-right {
width: 20%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
}

.toppings-detail {
/_ background-color: white; _/
display: flex;
flex-wrap: wrap;
border-style: solid;
border-color: black;
border-width: 1px;
justify-content: center;
}

.pizza-bottom p {
text-align: center;
}

.add-to-cart {
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.button-div {
text-align: center;
font-weight: bold;
padding: 1rem;
}

#resp-table {
width: 80%;
display: table;
}

#resp-table-caption {
display: table-caption;
text-align: center;
font-size: 30px;
font-weight: bold;
}

#resp-table-header {
display: table-header-group;
background-color: #ca0707;
font-size: 1.3rem;
}

.table-header-cell {
display: table-cell;
padding: 10px;
text-align: justify;
border-bottom: 1px solid black;
color: white;
text-align: center;
border: 1px;
border-style: solid;
border-color: black;
}

#resp-table-body {
display: table-row-group;
}

.resp-table-row {
display: table-row;
}

.table-body-cell {
display: table-cell;
text-align: center;
border: 1px;
border-style: solid;
border-color: black;
}

#resp-table-footer {
display: table-footer-group;
/_ background-color: gray; _/
font-weight: bold;
font-size: 25px;
color: rgba(255, 255, 255, 0.45);
}

.table-footer-cell {
display: table-cell;
padding: 10px;
text-align: justify;
border-bottom: 1px solid black;
}

#resp-table-footer div:nth-child(5) {
text-align: right;
}

.cart-table {
display: flex;
justify-content: center;
margin-top: 1.5rem;
border-style: solid;
border-color: black;
}

.item-quantity {
font-size: 16px;
width: auto;
}

.cart-totals {
width: 30%;
border-style: solid;
border-color: black;
}

.cart-page {
display: flex;
flex-wrap: wrap;
flex-direction: column;
border-style: solid;
border-color: black;
}

.complete-h1 {
text-align: center;
margin-top: 2rem;
}

.complete-container {
width: 100%;
text-align: center;
justify-content: center;
margin-bottom: 1.5rem;
border-collapse: collapse;
}

.complete-totals {
padding-right: 1rem;
text-align: right;
}

.order-page {
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin: 2rem 0rem 1.5rem 0rem;
}

.order-page-left {
width: 25%;
/_ background-color: #F5F5F5; _/
}

.order-page-right {
width: 69%;
}

.order-item {
background-color: #d9d9d9;
width: 25%;
/_ width: 20rem; _/
text-align: center;
padding: 1rem;
margin: 0rem 0.25rem 0.5rem 0.25rem;
}

.order-image {
/_ height: 100%; _/
width: 100%;
height: 50%;
}

.catagory-list {
list-style: none;
display: flex;
flex-wrap: wrap;
padding: 0;
margin-top: 0rem;
margin-left: 2rem;
}

.cart-view {
background-color: #f5f5f5;
/_ border: 1px;
border-style: solid; _/
/_ border-color: purple; _/
padding-bottom: 1rem;
margin-left: 2rem;
}

.order-cart-image-box {
width: 10vh;
height: auto;
}

.order-cart-image {
width: 100%;
margin: 0.5rem 0.5rem 0.5rem 0.5rem;
/_ border: solid 1px red; _/
}

.order-cart-list-item {
display: flex;
flex-wrap: wrap;
background-color: white;
margin: 1rem;
flex-wrap: row;
/_ border: solid 1px yellowgreen; _/
}

.order-cart-details {
/_ border: solid 1px red; _/
width: 69%;
margin-left: 1rem;
}

.order-cart-head {
margin: 0rem 1rem 1rem 1rem;
padding: 1rem 0rem 0rem 0rem;
}

.order-add-to-cart-btn {
color: white;
background-color: #548c1d;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.order-buttons {
display: flex;
flex-wrap: wrap;
flex-direction: row;
}

.order-left-button {
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.order-right-button {
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.order-buttons-left {
width: 50%;
text-align: center;
}

.order-buttons-right {
width: 50%;
text-align: center;
}

.order-subtotal {
margin-top: 2rem;
margin-left: 1rem;
}

.checkout-top {
display: flex;
flex-wrap: wrap;
flex-direction: row;
margin: 1rem;
}

.checkout-top p {
margin: 1.5rem 0rem 0.5rem 0rem;
}

.checkout-left {
width: 49%;
}
.checkout-right {
width: 49%;
}

.checkout-left input[type='text'] {
border-radius: 25px;
border: 1px solid #d9d9d9;
/_ padding: 20px; _/
width: 90%;
height: 2rem;
padding: 0rem 1rem 0rem 1rem;
font-size: 1rem;
background-color: #f5f5f5;
}

.checkout-top p {
color: #787979;
}

.delivery-method {
width: 10rem;
height: 10rem;
border-radius: 0;
}

.additional-info {
border-radius: 25px;
border: 1px solid #d9d9d9;
/_ padding: 20px; _/
width: 90%;
height: 8rem;
padding: 0rem 1rem 0rem 1rem;
font-size: 1rem;
background-color: #f5f5f5;
}

/_ DYNAMIC TABLE _/

#title {
text-align: center;
font-family: arial, sans-serif;
}

#students {
text-align: center;
font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
border-collapse: collapse;
border: 3px solid #ddd;
width: 100%;
}

#students td,
#students th {
border: 1px solid #ddd;
padding: 8px;
}

#students tr:nth-child(even) {
background-color: #f2f2f2;
}

#students tr:hover {
background-color: #ddd;
}

#students th {
padding-top: 12px;
padding-bottom: 12px;
text-align: center;
background-color: #4caf50;
color: white;
}

/_ END DYNAMIC TABLE _/

.checkout-table {
width: 100%;
display: flex;
justify-content: center;
/_ flex-wrap: wrap; _/
}

.checkout-table-header {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}

.product {
text-align: center;
background-color: #ca0707;
color: white;
vertical-align: middle;
width: 50%;
}

.middle {
background-color: #ca0707;
width: 10%;
}

.total {
text-align: center;
background-color: #ca0707;
color: white;
vertical-align: middle;
width: 10%;
}

.row {
width: 80%;
}

.divTable {
text-align: center;
/_ border: black 1px solid; _/
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
}

.divTableBody {
width: 70%;
margin: 2rem 0rem 3rem 0rem;
}

.divTableRowHeader {
background-color: #ca0707;
color: white;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
}

.divTableRow {
/_ width: 70%; _/
display: inline-block;
border: lightgray 1px solid;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
color: black;
margin: 0.5rem;
background-color: white;
}

.divTableCellL {
width: 60%;
/_ border: red 1px solid; _/
}

.divTableCellC {
width: 20%;
text-align: center;
/_ border: green 1px solid; _/
}

.divTableCellR {
width: 20%;
/_ border: purple 1px solid; _/
}
.divTableCellDelete {
width: 15%;
height: auto;
// border: black 1px solid;
}

.divTableCellPic {
width: 15%;
// border: red 1px solid;
}
.divTableCellProduct {
width: 45%;
// border: blue 1px solid;
}
.divTableCellPrice {
width: 15%;
// border: purple 1px solid;
}

.divTableCellTotal {
width: 15%;
// border: yellow 1px solid;
}

.divTableCellQuantity {
width: 15%;

    /* border: purple 1px solid; */

}

.divTableFooter {
display: inline-block;
border: lightgray 1px solid;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
color: black;
padding: 1rem;
}

.divTableCartBottom {
text-align: center;
/_ border: black 1px solid; _/
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
width: 100%;
}

.divTableBodyCart {
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
width: 20%;
margin: 0rem 0rem 1rem 0rem;
}

.divTableBodyCart .divTableRow {
height: 1rem;
align-content: center;
border: 0;
padding: 0.5rem;
margin: 0;
}

.divTableRowCart {
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
/_ border: black 1px solid; _/
}

.divTableCellCartLeft {
width: 50%;
text-align: right;
}

.divTableCellCartRight {
width: 50%;
text-align: center;
}

.divTableRowCartButton {
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
// border: lightgray 1px solid;
padding: 1rem;
}

.add-items input {
width: 50%;
}

.checkout-image {
height: auto;
width: 4vw;
}

.trashcan {
height: 5vh;
width: auto;
}

.order-trashcan {
height: 2vh;
width: auto;
}

.order-divTableCellDelete {
width: 10%;
height: auto;
text-align: center;
// border: black 1px solid;
}

.order-divTableCellPic {
max-width: 100%;
max-height: 100%;
display: block;
align-self: center;
justify-items: center;
// border: red 1px solid;
}
.order-divTableCellProduct {
width: 55%;
// border: blue 1px solid;
margin-left: 0.5rem;
}
.order-divTableCellPrice {
width: 10%;
// border: purple 1px solid;
}

// .order-divTableCellTotal {
// width: 5%;
// border: yellow 1px solid;
// }

.order-divTableCellPic {
width: auto;
align-self: flex-end;
}

.order-checkout-image {
height: auto;
width: 4vw;
align-items: center;
}

.order-divTableRow {
/_ width: 70%; _/
display: inline-block;
// border: black 1px solid;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
color: black;
margin: 0.5rem;
background-color: white;
}

.order-checkout {
margin: 1rem;
color: white;
background-color: #ca0707;
height: 2.5rem;
width: auto;
font-size: 1rem;
border-radius: 25px;
}

.checkout-order-page {
text-align: center;
}

.topping-image {
margin: 0px;
}

.cart-trashcan {
height: 4vh;
}
}
