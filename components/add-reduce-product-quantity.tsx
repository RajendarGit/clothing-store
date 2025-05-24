import { useDispatch } from 'react-redux';
import { updateQuantity } from '@/redux/features/cart-slice';
import { Button } from './ui/button';

interface CartItem {
  id: string | number;
  quantity: number;
}

const AddReduceProductQuantity = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: Number(item.id), quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: Number(item.id), quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button variant='ghost' size='sm' onClick={handleDecrease}>-</Button>
      <span>{item.quantity}</span>
      <Button variant='ghost' size='sm' onClick={handleIncrease}>+</Button>
    </div>
  );
};

export default AddReduceProductQuantity;
