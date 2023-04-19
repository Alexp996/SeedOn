import './cart-icon.scss';
import { ReactComponent as ShoppingItem } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setisCartOpen, cartCount } = useContext(CartContext);
  const toggleOpen = () => setisCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleOpen}>
      <ShoppingItem className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
