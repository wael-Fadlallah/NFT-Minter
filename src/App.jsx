import { useState } from 'react'
import './App.css'
import Install from './components/Install'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  if(window.ethereum){
    return <Home />
  }else{
    return <Install />
  }
}

export default App
