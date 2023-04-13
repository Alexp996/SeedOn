import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';
import { useContext } from 'react';
import { UserContext } from '../../contexts/contexts.component';

const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
          <button to="/home" className="nav-link">
            Home
          </button>

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
