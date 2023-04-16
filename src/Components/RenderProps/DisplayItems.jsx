import React from 'react'
import MapItems from './MapItems';

const DisplayItems = () => {
  const list = ["item1", "item2", "item3"];

  return (
    <ul>
      <MapItems 
        items={list}
        render={(item) => <div>{item}</div>}
      />
      <MapItems 
        items={list}
        render={(item) => <div>{item} <button>Delete</button></div>}
      />
    </ul>
  )
}

export default DisplayItems