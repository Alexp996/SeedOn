import { createContext } from 'react';
import { useState } from 'react';

//as the actual value you want to access;
export const UserContext = createContext({
  currentUser: localStorage.getItem('user'),
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'));
  const value = { currentUser, setCurrentUser };
  console.log('userProvider', localStorage.getItem('user'));
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
