import { useUser } from '@/hooks/useUser';
import { auth, googleAuthProvider } from '@/services/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const Enter = () => {
  const { user, username } = useUser();

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
