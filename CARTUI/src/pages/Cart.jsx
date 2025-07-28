import { useSelector , useDispatch } from "react-redux"

const Cart = () => {

  const dispatch = useDispatch()

  const cartdata = useSelector((state) => state.cart.cart)

  console.log("cartdata" , cartdata);
  

console.log(dispatch)

  return (
    <div className='head'>Cart</div>
  )
}

export default Cart