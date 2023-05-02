import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const handlerLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem('loggedin', true);
      navigate('/');
    } else {
      alert('Wrong email or password!');
    }
  };
  return (
    <div>
      <form onSubmit={handlerLogin}>
        <div className="container">
          <h1>Login</h1>
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
            Don't have an account?
            <Link to="/register">
              <p>Register Here!</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
