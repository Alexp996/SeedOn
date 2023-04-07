import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/contact" className="nav-link">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
