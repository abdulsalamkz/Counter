import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  function addValue() {
    setCounter(counter + 1)

  }
  function removeValue() {
    setCounter(counter - 1)

  }
  function resetValue() {
    setCounter(0)

  }
  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} disabled={counter === 20}>Add Value</button>
      <br />
      <button onClick={removeValue} disabled={counter === 0}>Remove Value</button>
      <br />
      <button onClick={resetValue}>Reset Value</button>
    </div>
  )
}

export default App
