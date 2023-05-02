import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { setCurrentUser } from '../../store/user/user.action';

const Navigation = () => {
  const navigate = useNavigate();


  const { isCartOpen } = useContext(CartContext);

  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('loggedin');
    navigate('/login');
  };

  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/login">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <button onClick={handleLogOut} className="nav-link">
            Log Out
          </button>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
