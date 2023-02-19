import { doc, onSnapshot, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/services/firebase';
import { useEffect, useState } from 'react';

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscribe;
    if (user) {
      unsubscribe = onSnapshot(
        query(doc(firestore, 'users', user.uid)),
        (snapshot) => {
          setUsername(snapshot.data()?.username);
        }
      );
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
};
