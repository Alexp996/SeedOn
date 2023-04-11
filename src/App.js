import Home from './routes/home/home.components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.components';
import Login from './routes/login/login';
import Register from './routes/register/register';
import ProtectedRoute from './routes/ProtectionLogOut/protectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />}></Route>
        </Route>
      </Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};
export default App;
