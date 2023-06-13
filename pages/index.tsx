import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/products');
  }, []);

  return <h1> 상품 페이지로 이동합니다.</h1>;
};

export default Home;
