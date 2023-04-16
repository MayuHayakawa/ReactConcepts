import React from 'react'

const MapItems = props => {
  return (
    <>
        {props.items.map((item, index) => {
            return(
                <li key={props.render(index)}>{props.render(item)}</li>
            )
        })}
    </>
  )
}

export default MapItems