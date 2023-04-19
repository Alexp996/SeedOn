import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import { useContext } from 'react';
import { UserContext } from '../../contexts/contexts.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('loggedin');
    navigate('/login');
  };

  //this currentUser will be null bcs in UserContext, the default value is null
  console.log('navigation', currentUser);
  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/login">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/home" className="nav-link">
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
