import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './test/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Message></Message>
    </div>
  )
}

export default App
