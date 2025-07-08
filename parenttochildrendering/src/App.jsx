import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import Parenttochildrendering from './Componentes/Parenttochildrendering'
import Toolbar from './Componentes/Parenttochildrendering';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Parenttochildrendering></Parenttochildrendering>
    </>
  )
}

export default App
