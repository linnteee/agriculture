import React from 'react';


const products = [
  {
    id: 1,
    name: "Organic Fertilizer",
    description: "High-quality organic fertilizer for healthy plant growth.",
    price: "$25",
    image: "/images/fertilizer.jpg",
  },
  {
    id: 2,
    name: "Farm Tools Set",
    description: "Essential tools for efficient farming.",
    price: "$50",
    image: "/images/tools.jpg",
  },
  {
    id: 3,
    name: "Irrigation System",
    description: "Efficient irrigation system for water conservation.",
    price: "$200",
    image: "/images/irrigation.jpg",
  },
  {
    id: 4,
    name: "Seed Packets",
    description: "A variety of high-yield seeds for your farm.",
    price: "$15",
    image: "/images/seeds.jpg",
  },
];

function Products() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold text-lg mb-4">{product.price}</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
