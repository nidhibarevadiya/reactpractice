import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Example'
import MyApp from './Example'
import Example1 from './Example'
import ShoppingList from './Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Example/> */}
      {/* <MyApp/> */}
      {/* <Example1></Example1> */}
      {/* <Profile/> */}
      {/* <Goal/> */}
      <ShoppingList/>
    </>
  )
}

export default App
