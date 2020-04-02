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

Database
Catagory
-- *Id
-- Name
-- Link to Item
Customer Table
-- *Id  
-- Name
-- Addres
-- City
-- State
-- Zip
-- Phone
-- Email
Items Table
-- *Id
-- Name
-- Description
-- Price
-- Image Path
Orders
-- *Id
-- Items
-- Order Time
-- Completed
-- Pickup or Delivery
-- Out For Delivery

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
