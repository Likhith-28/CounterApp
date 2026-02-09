import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count {count}</h1>
      <div>
        <button onClick={ onClick=> setCount(count+1)}> Increase </button>
        <button onClick={ onClick=> setCount(count-1)}> Decrease </button>
        <button onClick={ onClick=> setCount(0)}> Reset</button>
      </div>
    </>
  )
}

export default App
