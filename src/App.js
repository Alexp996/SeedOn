import Home from './routes/home/home.components';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import LoginForm from './routes/login/login.components';

const App = () => {
  const Shop = () => {
    return <h1>You don't have money</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<LoginForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
