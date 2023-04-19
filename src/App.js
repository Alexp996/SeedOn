import Home from './routes/home/home.components';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Login from './routes/login/login';
import Register from './routes/register/register';
import ProtectedRoute from './routes/ProtectionLogOut/protectedRoute';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />}></Route>
        </Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
export default App;
