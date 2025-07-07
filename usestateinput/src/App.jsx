import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usestateinput from './Hooks/Usestateinput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Usestateinput/>
    </>
  )
}

export default App
