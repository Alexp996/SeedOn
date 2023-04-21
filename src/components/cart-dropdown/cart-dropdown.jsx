import './cart-dropdown.scss';
import Button from '../button/button';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goCheckoutHandler}>Go to checkout </Button>
    </div>
  );
};
export default CartDropdown;
