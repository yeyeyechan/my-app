import Modal from '../components/ui/Modal';
import CartContextProvider from '../store/cartContext';
import PageContextProvider from '../store/pagination';
import type { AppProps } from 'next/app';
import ProductProvider from '../store/productContext';
import UiContextProvider from '../store/uiContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <PageContextProvider>
        <ProductProvider>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
        </ProductProvider>
      </PageContextProvider>
    </UiContextProvider>
  );
}

export default MyApp;
