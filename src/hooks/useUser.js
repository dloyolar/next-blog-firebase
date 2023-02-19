import { UserContext } from '@/context/UserProvider';
import { useContext } from 'react';

export const useUser = () => {
  const { user, username } = useContext(UserContext);

  return { user, username };
};
