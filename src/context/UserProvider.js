import { createContext } from 'react';

export const UserContext = createContext({ user: null, username: null });

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: {}, username: 'Diego' }}>
      {children}
    </UserContext.Provider>
  );
};
