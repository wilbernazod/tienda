import usefetchProducts from "../../hooks/usefetchProducts";
import React from 'react'
const ProductCard = () => {
    const {data: products,loading,error} = usefetchProducts("https://fakestoreapi.com/products");
    console.log("Productos:", products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
    <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h5 className="text-lg font-semibold text-gray-800 text-center line-clamp-2">{product.title}</h5>
      <p className="text-indigo-600 font-bold text-xl mt-2">{product.price}</p>
    </div>
  ))}
</div>
  )
}

export default ProductCard