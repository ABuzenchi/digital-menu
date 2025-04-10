import { menuData } from '../data/menuData'
import ProductCard from './ProductCard'

const MenuDisplay = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    {menuData.map((category) => (
      <div key={category.id} className="mb-10">
        <h2 className="text-2xl font-bold text-red-700 mb-4 border-b border-purple-300 pb-2">
          {category.category}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    ))}
  </div>
  )
}

export default MenuDisplay
