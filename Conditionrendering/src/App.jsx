import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditionui from './Condition/Conditionui'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This Is Condition Rendering</h1>
    <Conditionui/>
    </>
  )
}

export default App
