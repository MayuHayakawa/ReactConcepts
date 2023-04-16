import React, { useRef, forwardRef } from 'react'

const AlertInput = () => {
    const inputRef = useRef();
    return <DisplayAlert ref={inputRef} message={"hello"} log={"world"}/>
}

const DisplayAlert = forwardRef((props, ref) => {
    function handleClick() {
        console.log(props); //{message: 'hello', log: 'world'}
        console.log(props.log); //world
        alert(props.message); //alert: hello
    }

    return <input ref={ref} onClick={handleClick} placeholder={"Focus this input"}/>

})

export default AlertInput