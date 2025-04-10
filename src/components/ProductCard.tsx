import { Product } from '../data/menuData';
import AvailabilityToggle from './AvailabilityToggle';
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { Button } from '@mantine/core'; // Importăm Button din Mantine

interface ProductCardProps {
  product: Product;
  onToggle: () => void;
  onAddToOrder: () => void;
}

const ProductCard = ({ product, onToggle, onAddToOrder }: ProductCardProps) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300">
      <div className="flex items-center justify-between mb-2">
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
        <p className="text-sm text-red-600 font-semibold mt-1">Not available</p>
      )}

      <div className="flex justify-between items-center mt-4">
        <AvailabilityToggle available={product.available} onToggle={onToggle} />
        
        {product.available && (
          <Button
          variant="outline"
            onClick={onAddToOrder}
            className="bg-red-700 text-white hover:bg-red-800 py-2 px-4 rounded-full flex items-center gap-2"
            leftSection={<RiShoppingBasket2Fill size={14} />}
            color="black"
          >
            Add to order
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;