import React from "react";
function About() {
  return (
    <div className="px-10 py-16 bg-gray-100 min-h-screen">
      
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
          About Our Store
        </h1>

        <p className="text-lg text-gray-600 text-center mb-12">
          Welcome to Hamza Store — your trusted destination for quality
          products, affordable prices, and a smooth online shopping experience.
        </p>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-red-500">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-8">
            Our mission is to provide customers with high-quality products
            that improve everyday life. We focus on customer satisfaction,
            fast delivery, secure payments, and excellent support services.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Quality Products
            </h3>

            <p className="text-gray-600">
              We carefully select products that meet high quality standards
              for our customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Our delivery system ensures your orders arrive safely and quickly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Customer Support
            </h3>

            <p className="text-gray-600">
              We provide friendly customer support to help you anytime you need.
            </p>
          </div>
        </div>

        {/* Closing Section */}
        <div className="bg-red-500 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thank You for Shopping With Us
          </h2>

          <p className="text-lg">
            We are committed to making your online shopping experience simple,
            secure, and enjoyable.
          </p>
        </div>

      </div>
    </div>
  );
}
export default About;
