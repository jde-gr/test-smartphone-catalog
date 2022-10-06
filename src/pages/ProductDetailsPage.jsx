import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductDetails from '../components/Shop/ProductDetails';

const ProductDetailsPage = () => {
  const location = useLocation();
  const { id } = location.state;
  return (
    <>
      <Layout>
        <ProductDetails id={id} />
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
