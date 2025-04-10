import { useState } from 'react';
import { menuData as initialMenuData } from '../data/menuData';
import ProductCard from './ProductCard';

const MenuDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [menu, setMenu] = useState(initialMenuData); 

  const categories = menu.map((cat) => cat.category);

  const handleToggleAvailability = (categoryId: string, productId: string) => {
    const updatedMenu = menu.map((category) => {
      if (category.id !== categoryId) return category;

      return {
        ...category,
        products: category.products.map((product) =>
          product.id === productId
            ? { ...product, available: !product.available }
            : product
        ),
      };
    });

    setMenu(updatedMenu);
  };

  const filteredData = selectedCategory
    ? menu.filter((cat) => cat.category === selectedCategory)
    : menu;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-red-800 mb-6">Menu</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === null
              ? 'bg-red-700 text-white'
              : 'bg-white text-red-700 border-red-300'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-red-700 text-white'
                : 'bg-white text-red-700 border-red-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredData.map((category) => (
        <div key={category.id} className="mb-10">
          <h2 className="text-2xl font-bold text-red-700 mb-4 border-b border-red-300 pb-2">
            {category.category}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggle={() => handleToggleAvailability(category.id, product.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuDisplay;
