// components/cards.jsx

import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cards";
export default function Cards({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      })
    );

   
  
  };

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 mb-4 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold mt-2">
        {product.name}
      </h3>

      <p className="text-gray-600 text-xl font-bold">
        ${product.price}
      </p>

      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer" 
      >
        Add to Cart
      </button>
    </div>
  );
}