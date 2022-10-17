import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/Shop/ProductList';
import { Notification } from '../components/UI/Notification';

const ProductListPage = () => {
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
        <ProductList />
      </Layout>
    </>
  );
};

export default ProductListPage;
