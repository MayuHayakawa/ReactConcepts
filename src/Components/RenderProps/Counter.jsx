import React, { useState } from 'react'

// this component just has function, not display anything
const Counter = props => {
  const [ count, setCount ] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      {props.render(count, handleIncrement)}
    </div>
  )
}

export default Counter