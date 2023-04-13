import './register.scss';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/contexts.component';

const Register = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //to store values local storage bellow
  const handlerRegister = (e) => {
    e.preventDefault();
    // not sure about that
    localStorage.setItem('user', JSON.stringify(input));
    setCurrentUser(input);
    navigate('/login');
  };

  return (
    <div>
      <form onSubmit={handlerRegister}>
        <div className="container">
          <h1>Register</h1>
          <div className="input_space">
            <label>User</label>
            <br />
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={onChange}
            />
          </div>
          <div className="input_space">
            <label>Email</label>
            <br />
            <input
              type="email"
              required
              name="email"
              value={input.email}
              onChange={onChange}
            />
          </div>
          <div className="input_space">
            <label>Password </label>
            <br />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={onChange}
            />
          </div>
          <button type="submit">Sign Up!</button>
          <div>
            Have already account?
            <Link to="/login">
              <p>Login Here!</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
