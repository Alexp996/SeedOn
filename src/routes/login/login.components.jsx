// import './login.style.scss';
// import { Link } from 'react-router-dom';
//
// const verify = () => {
//   const email = document.querySelector('.email').value;
//   const password = document.querySelector('.password').value;
//   if (email === 'as@as' && password === 'asd') {
//     <Link to="/home" />;
//   } else {
//     alert('Password or email not correctly');
//   }
// };
//
// const Login = () => {
//   return (
//     <div className="wrapper">
//       <div className="form-box login">
//         <h2>Login</h2>
//         <form action="#">
//           <div className="input-box">
//             <span className="input"></span>
//             <input className="email" type="email" required></input> <br />
//             <label> Email</label>
//           </div>
//           <div className="input-box">
//             <span className="input"></span>
//             <input className="password" type="password" required></input>
//             <br />
//             <label> Password</label>
//           </div>
//           <button onClick={verify} type="submit" className="btn">
//             Login In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Login;

import { useState } from 'react';
import styles from './LoginForm.module.css';

const LoginForm = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Email</label>
        <input
          className={styles.formField}
          type="text"
          aria-label="Email field"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Password</label>
        <input
          className={styles.formField}
          type="password"
          aria-label="Password field"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Confirm Password</label>
        <input
          className={styles.formField}
          type="password"
          aria-label="Confirm password field"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
        />
      </div>
      <div className={styles.formActions}>
        <button className={styles.formSubmitBtn} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
