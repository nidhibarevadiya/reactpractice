import React from 'react'
import { useEffect , useState} from 'react'

const UseEffect = () => {

  const [count , setCount] = useState(0)

  useEffect(() => {
    console.log('count value changed:' , count);
    return () => {
      console.log('cleanup function');
    }
  } , [count])



  return (
    <>
      <div>UseEffect</div>
      <div >{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default UseEffect

