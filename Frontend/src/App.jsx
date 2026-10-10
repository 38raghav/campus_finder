import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <button className='btn btn-success'>Click me!</button>
    </>
  )
}

export default App
