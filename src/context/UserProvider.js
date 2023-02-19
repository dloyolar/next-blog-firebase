import { useUserData } from '@/services/hooks';
import { createContext } from 'react';

export const UserContext = createContext({ user: null, username: null });

export const UserProvider = ({ children }) => {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};
