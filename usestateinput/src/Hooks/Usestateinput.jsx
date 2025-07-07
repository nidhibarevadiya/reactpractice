import React from 'react'
import { useState } from 'react';

function Usestateinput() {
// const [state, setState] = useState(initialState)
const [name,setname] = useState('')


 function handelsubmit(e){
    e.preventDefault()
   setname(e.target.fname.value);
 }

  return (

    <>
    <form onSubmit={handelsubmit}>
     <input type="text" name="fname"></input>
     <button type="submit">submit</button>
    </form>
    <h3>{name}</h3>
    </>
  )
}

export default Usestateinput


// import { useState } from 'react';

// function Usestateinput() {
//   // const [state, setState] = useState(initialState)


//   const [name, setname] = useState('')
//   const [email, setemail] = useState('')
//   const [age, setage] = useState(0)

//   function handelsubmit(e) {
//     e.preventDefault()

//     setname(e.target.name.value);
//     setemail(e.target.email.value)
//     setage(e.target.age.value)

//   }

//   return (
//         <>

//       <form onSubmit={handelsubmit}>
//         <input type='text' name="name"></input><br />
//         <input type="email" name='email' ></input>
//         <input type="number" name="age" />
//         <button type='submit'>submit</button>
//       </form>
//       <h1>{name}</h1>
//       <h2>{email}</h2>
//       <h3>{age}</h3>
//     </>
//   )
// }

// export default Usestateinput