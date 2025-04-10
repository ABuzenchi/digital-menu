import { Drawer, Text, Button, Divider, Group } from '@mantine/core'

interface OrderItem {
  id: string
  name: string
  quantity: number
  subtotal: number
}

interface OrderDrawerProps {
  opened: boolean
  onClose: () => void
  order: OrderItem[]
  onRemove: (productId: string) => void
  onClear: () => void
}

const OrderDrawer = ({
  opened,
  onClose,
  order,
  onRemove,
  onClear
}: OrderDrawerProps) => {
  const total = order.reduce((sum, item) => sum + item.subtotal, 0)

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Your Order"
      position="right"
      size="md"
      padding="md"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
    >
      {order.length === 0 ? (
        <Text>Your order is empty.</Text>
      ) : (
        <>
          {order.map((item) => (
            <Group key={item.id} mb="sm">
              <div>
                <Text>
                  {item.name} × {item.quantity}
                </Text>
                <Text size="xs">${item.subtotal.toFixed(2)}</Text>
              </div>
              <Button
                variant="subtle"
                color="red"
                size="xs"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </Button>
            </Group>
          ))}

          <Divider my="sm" />
          <Group mt="md">
            <Text>Total:</Text>
            <Text>${total.toFixed(2)}</Text>
          </Group>

          <Button
            mt="md"
            color="red"
            fullWidth
            onClick={onClear}
            variant="light"
          >
            Clear Order
          </Button>
        </>
      )}
    </Drawer>
  )
}

export default OrderDrawer
