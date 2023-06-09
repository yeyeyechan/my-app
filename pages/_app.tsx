import Modal from '../components/ui/Modal';
import CartContextProvider from '../store/cartContext';
import PageContextProvider from '../store/pagination';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <PageContextProvider>
        <Component {...pageProps} />
      </PageContextProvider>
    </CartContextProvider>
  );
}

export default MyApp;
