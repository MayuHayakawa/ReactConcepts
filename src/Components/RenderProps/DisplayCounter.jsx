import React from 'react';
import Counter from './Counter';

const DisplayCounter = () => {
  return (
    <div>
        <Counter 
            render={(count, handleIncrement) => 
                <button onClick={handleIncrement}>count: {count}</button>
            }
        />
        <Counter 
            render={(count, handleIncrement) => 
                <div onMouseEnter={handleIncrement}>count: {count}</div>
            }
        />
    </div>
  )
}

export default DisplayCounter