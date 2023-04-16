import DisplayCounter from "./Components/RenderProps/DisplayCounter"
import DisplayItems from "./Components/RenderProps/DisplayItems"
import Child from "./Components/HigherOrderComponents/Child"
import DisplayLoading from "./Components/HigherOrderComponents/DisplayLoading"
import DisplayInput from "./Components/ForwardingRefs/DisplayInput"
import AlertInput from "./Components/ForwardingRefs/AlertInput"

function App() {
  return (
    <div className="App">
      <h2>Render Props</h2>
      <DisplayCounter />
      <DisplayItems />
      <hr/>
      <h2>Higher Order Components</h2>
      <Child id={100}/>
      <DisplayLoading />
      <hr/>
      <h2>Forwording Refs</h2>
      <DisplayInput />
      <br/>
      <AlertInput />
    </div>
  )
}

export default App
