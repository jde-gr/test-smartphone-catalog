import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductDetails from '../components/Shop/ProductDetails';
import { Notification } from '../components/UI/Notification';

const ProductDetailsPage = () => {
  const location = useLocation();
  const { id, device } = location.state;

  const notification = useSelector((state) => state.ui.notification);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <ProductDetails id={id} device={device} />
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
