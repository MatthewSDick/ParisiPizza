import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AddItems = () => {
  const [item, setItem] = useState({})
  const [wasCreated] = useState({
    shouldRedirect: false,
    newItemInformation: '',
  })

  const updateItem = e => {
    const key = e.target.name
    const value = e.target.value
    setItem(prevItem => {
      prevItem[key] = value
      return prevItem
    })
  }

  const addItemToAPI = async () => {
    const resp = await axios.post('/api/items/post', item)
    if (resp === 201) {
      wasCreated({ shouldRedirect: true, newItemInformation: resp.data })
    } else {
    }
  }

  if (wasCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathName: '/item/' + wasCreated.newItemInformation.id,
          state: { item: wasCreated.newItemInformation },
        }}
      />
    )
  } else {
    return (
      <div className="add-items">
        <h3>Name of the item</h3>
        <input type="text" name="name" onChange={updateItem}></input>
        <h3>Catagory</h3>
        <input type="text" name="Catagory" onChange={updateItem}></input>
        <h3>Image Path</h3>
        <input type="text" name="ImagePath" onChange={updateItem}></input>
        <h3>Price</h3>
        <input type="text" name="price" onChange={updateItem}></input>
        <br />
        <br />
        <button onClick={addItemToAPI}>Enter</button>
      </div>
    )
  }
}

export default AddItems
