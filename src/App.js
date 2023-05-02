import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.components";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProtectedRoute from "./routes/ProtectionLogOut/protectedRoute";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";


import { Routes, Route } from "react-router-dom"; 

import { useEffect } from "react";
import { useDispatch  } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
  

const App = () => {
  const dispatch = useDispatch();
  /** this dispatch coming from useDispatch, never updating!!  it's always to be the same reference */
  useEffect(()=>{
    const subscribe = (user)=>{
      dispatch(setCurrentUser(user))
    }
    return subscribe;
  }, [])
  /** after this useEffect, we will see in our console the logger with:
   * Prev state: ....
   * Action: ...
   * next state: ...
   * all 3 relate to the user
   */
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};
export default App;
