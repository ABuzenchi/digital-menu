interface OrderItem {
    id: string;
    name: string;
    quantity: number;
    subtotal: number;
  }
  
  interface OrderSummaryProps {
    items: OrderItem[];
  }
  
  const OrderSummary = ({ items }: OrderSummaryProps) => {
    const total = items.reduce((sum, item) => sum + item.subtotal, 0);
  
    if (items.length === 0) return null;
  
    return (
      <div className="bg-white rounded-xl p-6 shadow-md mt-10 border">
        <h2 className="text-xl font-bold mb-4 text-red-800">Order Summary</h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.subtotal.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t pt-2 flex justify-between font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;
  