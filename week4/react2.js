import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$149",
    description: "A sleek smartwatch with multiple fitness tracking features.",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49",
    description: "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
    image: "https://via.placeholder.com/150"
  }
];

export default function ProductDetailsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedProduct(product)}
          >
            <CardContent className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
              <Button className="mt-2" onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}>View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedProduct && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="mt-6 p-6 border rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
          <p className="text-gray-600">{selectedProduct.description}</p>
          <p className="text-lg font-semibold mt-2">{selectedProduct.price}</p>
          <Button className="mt-4" onClick={() => setSelectedProduct(null)}>Close</Button>
        </motion.div>
      )}
    </div>
  );
}
