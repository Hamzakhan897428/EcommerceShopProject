import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
function Nav() {
  return (
    <nav className="bg-gray-700 text-white p-4 flex justify-between items-center">
      
      {/* Left Side */}
      <div className="flex items-center gap-1">
        <h3 className="rounded-lg border-2 bg-yellow-300 text-black px-2 py-1 font-bold">
          HK
        </h3>

        <Link to="/" className="text-xl font-bold">
          Hamza Store
        </Link>
      </div>
      {/* Center Links */}
      <div className="flex gap-5">
        <Link to="/" className="font-bold hover:underline">
          Home
        </Link>
        <a href="/shop" className="font-bold hover:underline">
          Shop
        </a>
  <Link to="/about" className="font-bold hover:underline">
          About
        </Link>
        <Link to="/contact" className="font-bold hover:underline">
          Contact Us
        </Link>
      </div>
   <div className="flex items-center gap-4">
<Link to ="/cart">  <ShoppingCart size={25} className="text-white font-bold" /></Link>

  {/* Login Button */}
 <Link to="/login"> <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
    Login
  </button></Link>
</div>
    </nav>
  );
}
export default Nav;