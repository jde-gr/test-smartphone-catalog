import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/Shop/ProductList';
import { LoadingWrapper } from '../components/Shop/styles/ProductDetails.styles';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { Notification } from '../components/UI/Notification';
import {
  FETCHNOTIFICATIONMSG,
  FETCHNOTIFICATIONTITLE,
  NOTIFICATIONSTATUS,
} from '../core/constants';
import { useProducts } from '../hooks/useProducts';
import { uiActions } from '../store/ui-slice';

const ProductListPage = () => {
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  const [localData, setLocalData] = useState(null);
  const { status, data, error, isFetching } = useProducts();

  useEffect(() => {
    status === 'error' &&
      dispatch(
        uiActions.showNotification({
          status: NOTIFICATIONSTATUS.error,
          title: FETCHNOTIFICATIONTITLE.error,
          message: `${FETCHNOTIFICATIONMSG.error}: ${error.toString()}`,
        })
      );
    if (status === 'success') {
      const localItems = localStorage.getItem('products') || JSON.stringify({});
      setLocalData(JSON.parse(localItems));
    }
  }, [status, data, error, dispatch]);

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
        {(status === 'loading' || isFetching) && (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        )}
        {!!localData && <ProductList data={localData} />}
      </Layout>
    </>
  );
};

export default ProductListPage;
