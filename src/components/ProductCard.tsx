import { Product } from "../data/menuData";

interface ProductCardProps{
    product:Product
}
const ProductCard=({product}:ProductCardProps)=>{

return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <span
        className={`w-3 h-3 rounded-full inline-block ${
          product.available ? 'bg-green-500' : 'bg-red-500'
        }`}
        title={product.available ? 'Available' : 'Not available'}
      ></span>
    </div>

    <p className="text-gray-600">{product.description}</p>
    <p className="mt-2 font-medium">Price: ${product.price.toFixed(2)}</p>

    {!product.available && (
      <span className="inline-block mt-2 text-sm font-semibold text-red-600">
        Not available
      </span>
    )}
  </div>
)
}

export default ProductCard;