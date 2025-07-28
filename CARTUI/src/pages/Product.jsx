import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../cart/cartSlice";
import { selectProducts } from "../cart/cartSelectors";

const Product = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  console.log("productData", productData);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductData(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="product-container">
      <div className="product-grid">
        {productData.map((item,index) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="price">${item.price}</p>
            <p className="category">{item.category}</p>
            <p className="rating">Rating: {item.rating?.rate}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Product;