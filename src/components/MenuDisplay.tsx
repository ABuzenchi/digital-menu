import { useState } from 'react'
import { menuData as initialMenuData } from '../data/menuData'
import ProductCard from './ProductCard'
import OrderDrawer from './OrderDrawer'
import { Button } from '@mantine/core'

interface OrderItem {
  id: string
  name: string
  quantity: number
  subtotal: number
}
const MenuDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [menu, setMenu] = useState(initialMenuData)
  const [order, setOrder] = useState<OrderItem[]>([])
  const categories = menu.map((cat) => cat.category)
  const [drawerOpened, setDrawerOpened] = useState(false);

const handleRemoveFromOrder = (productId: string) => {
  setOrder((prev) => prev.filter((item) => item.id !== productId));
};

const handleClearOrder = () => {
  setOrder([]);
};

  const handleToggleAvailability = (categoryId: string, productId: string) => {
    const updatedMenu = menu.map((category) => {
      if (category.id !== categoryId) return category

      return {
        ...category,
        products: category.products.map((product) =>
          product.id === productId
            ? { ...product, available: !product.available }
            : product
        )
      }
    })

    setMenu(updatedMenu)
  }

  const handleAddToOrder = (productId: string, name: string, price: number) => {
    setOrder((prev) => {
      const existing = prev.find((item) => item.id === productId)
      if (existing) {
        return prev.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * price
              }
            : item
        )
      }
      return [...prev, { id: productId, name, quantity: 1, subtotal: price }]
    })
  }

  const filteredData = selectedCategory
    ? menu.filter((cat) => cat.category === selectedCategory)
    : menu

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
                onToggle={() =>
                  handleToggleAvailability(category.id, product.id)
                }
                onAddToOrder={() =>
                  handleAddToOrder(product.id, product.name, product.price)
                }
              />
            ))}
          </div>
        </div>
      ))}
      {order.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
         variant="light"
            onClick={() => setDrawerOpened(true)}
            className="bg-red-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-800 transition"
            color="red"
          >
            View Order ({order.length})
          </Button>
        </div>
      )}

      <OrderDrawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        order={order}
        onRemove={handleRemoveFromOrder}
        onClear={handleClearOrder}
      />
    </div>
  )
}

export default MenuDisplay
