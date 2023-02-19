import { auth, googleAuthProvider } from '@/lib/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import Image from 'next/image';

const Enter = () => {
  const user = null;
  const username = null;

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

export default Enter;

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} alt="Google Logo" />
      Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
