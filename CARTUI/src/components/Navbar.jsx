// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li className='flex justify-evenly'>
//             <Link to="/">Home</Link>
//             <Link to="/product">Product</Link>
//             <Link to="/cart">Cart</Link>
//             <Link to="/wishlist">Wishlist</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/profile">Profile</Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   )
// }

// export default Navbar
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <div><img src="https://www.shutterstock.com/image-vector/shopping-cart-boxes-flat-icon-260nw-2492012189.jpg" alt="cartui" width={70} height={30}/></div>
                    <div><h2>CARTUI</h2></div>
                </div>
                <div className='flex justify-evenly'><ul className='flex justify-evenly'>
                    <li className='m-2'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='m-2'>
                        <Link to="/product">Product</Link>
                    </li>
                    <li className='m-2'>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className='m-2'>
                        <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li className='m-2'>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className='m-2'>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
