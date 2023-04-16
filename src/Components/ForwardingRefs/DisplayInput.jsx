import React, { useRef } from 'react';
import Input from './Input';

const DisplayInput = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <input placeholder='dummy input'></input>
      <button onClick={() => ref.current.focus()}>
        focus to first input area
      </button>
    </>
  )
}

export default DisplayInput