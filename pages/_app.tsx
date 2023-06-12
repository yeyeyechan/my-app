import Modal from '../components/ui/Modal';
import CartContextProvider from '../store/cartContext';
import PageContextProvider from '../store/pagination';
import type { AppProps } from 'next/app';
import ProductProvider from '../store/productContext';
import UiContextProvider from '../store/uiContext';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
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
