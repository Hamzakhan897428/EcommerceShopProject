// pages/CardItem.jsx
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/Cards';

export default function CardItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Note: 'cart' is your slice name

  const increaseQty = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>
          <p className="text-gray-600">Your cart is empty</p>
          <a href="/shop" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🛒 My Cart</h1>

        <div className="space-y-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between bg-white rounded-2xl shadow-md p-4
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover
                               group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-400">
                    ${item.price} each
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
                <button
                  onClick={() => decreaseQty(item)}
                  className="w-8 h-8 rounded-full bg-white shadow hover:scale-110 active:scale-95 transition"
                >
                  -
                </button>

                <span className="w-6 text-center font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item)}
                  className="w-8 h-8 rounded-full bg-white shadow hover:scale-110 active:scale-95 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 font-medium
                           hover:scale-110 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div
          className="mt-8 bg-white rounded-2xl shadow-lg p-5 flex justify-between items-center
                        hover:shadow-2xl transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">Total Amount</h2>
          <h2 className="text-2xl font-bold text-gray-900">
            ${total.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}