import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: "$29.99", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "$39.99", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "$49.99", image: "https://via.placeholder.com/150" },
];

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
    <h1 className="text-xl font-bold">Brand</h1>
    <ul className="flex space-x-4">
      <li><a href="#hero" className="hover:underline">Home</a></li>
      <li><a href="#products" className="hover:underline">Products</a></li>
      <li><a href="#footer" className="hover:underline">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section id="hero" className="text-center py-20 bg-gray-100">
    <h2 className="text-4xl font-bold">Welcome to Our Store</h2>
    <p className="mt-4 text-gray-600">Find the best products at the best prices</p>
  </section>
);

const ProductSection = () => (
  <section id="products" className="py-10 px-4">
    <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 text-center rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="footer" className="bg-blue-600 text-white text-center p-4 mt-10">
    <p>Follow us on:</p>
    <div className="flex justify-center space-x-4 mt-2">
      <FaFacebook className="text-2xl cursor-pointer" />
      <FaTwitter className="text-2xl cursor-pointer" />
      <FaInstagram className="text-2xl cursor-pointer" />
    </div>
  </footer>
);

const LandingPage = () => (
  <div>
    <Navbar />
    <Hero />
    <ProductSection />
    <Footer />
  </div>
);

export default LandingPage;
