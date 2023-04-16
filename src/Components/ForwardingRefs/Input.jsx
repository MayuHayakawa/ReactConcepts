import { forwardRef } from "react";

//forwordRef function's first argument is props
const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
export default Input;