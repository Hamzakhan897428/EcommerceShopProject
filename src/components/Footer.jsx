import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-10 py-14 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Store Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Hamza Store</h1>

          <p className="text-gray-400 leading-7">
            Your one-stop destination for all your shopping needs.
            Quality products, amazing prices.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shop</h2>

          <ul className="space-y-3 text-gray-400">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Deals & Promotions</li>
            <li>Gift Cards</li>
            <li>Brand Directory</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Customer Service
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        {/* About & Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>

          <ul className="space-y-3 text-gray-400 mb-6">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Store Locations</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Contact Info
            </h3>

            <p className="text-gray-400">
              hk897428@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
        
        <p>
          © Copyright 2026 All rights reserved.
        </p>

        <p className="mt-3 md:mt-0">
          This website is made by <span className="text-white font-semibold">Hamza</span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;