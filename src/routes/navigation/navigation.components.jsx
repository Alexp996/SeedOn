import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

const Navigation = () => {
  const navigate = useNavigate();
  // const userName = JSON.parse(localStorage.getItem('user'));
  const handleLogOut = () => {
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
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <button onClick={handleLogOut} className="nav-link">
            Log Out
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
