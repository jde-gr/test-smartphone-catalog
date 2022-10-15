import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductDetails from '../components/Shop/ProductDetails';

const ProductDetailsPage = () => {
  const location = useLocation();
  const { id, device } = location.state;
  return (
    <>
      <Layout>
        <ProductDetails id={id} device={device} />
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
