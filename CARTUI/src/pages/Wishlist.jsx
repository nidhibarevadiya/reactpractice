import { useSelector, useDispatch } from "react-redux";
import { selectwishlistProducts } from "../cart/wishSelectors";
import { addToWish } from "../cart/wishlistslice";


const Wishlist = () => {

   const dispatch = useDispatch();
  
    const wishdata = useSelector(selectwishlistProducts);
  
    console.log("wishdata", wishdata);
  return (
    <>
        <div>
        {wishdata.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="max-w-80 border-2 border-black p-4">
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-[300px] h-[300px] object-contain"
                  />
                </div>
                <div>
                  <p className="line-clamp-1">{item.title}</p>
                  <p className="line-clamp-2">{item.description}</p>
                  <p className="btn p-2 rounded-none text-lg bg-white text-black underline">
                    Rs.{item.price}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => dispatch( addToWish (item.id) )}
                    className="btn text-lg p-3 rounded-none"
                  >
                    ADD wish
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  )
}

export default Wishlist