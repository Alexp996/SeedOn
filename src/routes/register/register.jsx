import './register.scss';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  //to store values local storage
  const handlerRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
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
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
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
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="input_space">
            <label>Password </label>
            <br />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
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
