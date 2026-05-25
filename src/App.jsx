import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Cards from "./components/cards";
import products from "./data/products";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CardItem from "./pages/CardItem";
import Login from "./pages/Login";

function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Nav />

      <HeroSection />

      {/* Product Shop */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Product Shop
        </h1>

        <div
          id="shop"
          className="flex flex-wrap justify-center gap-8"
        >
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Feature Shop */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Feature Shop
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />

      {/* Toast Container */}
    
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<CardItem />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;