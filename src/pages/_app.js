import { Navbar } from '@/components/Navbar';
import { UserProvider } from '@/context/UserProvider';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserProvider>
  );
}
