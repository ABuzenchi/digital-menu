import { menuData } from '../data/menuData'

const MenuDisplay = () => {
  return (
    <div>
      <h1>Menu Page</h1>
      {menuData.map((category) => (
        <div key={category.id}>
          <h2>{category.category}</h2>

          <ul>
            {category.products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong>- ${product.price.toFixed(2)}
                <br />
                <span>{product.description}</span>
                <br />
                {product.available ? (
                  <span>Available</span>
                ) : (
                  <span>Not available</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default MenuDisplay
