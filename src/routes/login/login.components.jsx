import './login.style.scss';
import { useState } from 'react';

const defaultFormFields = {
  email: '',
  password: '',
};

const SingUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);
  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="wrapper">
      <form onSubmit={() => {}}>
        <label>Email</label>
        <input
          type="text"
          required
          onChange={handlerChange}
          name="email"
          value={email}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handlerChange}
          name="password"
          value={password}
        />
        <br />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default SingUp;
