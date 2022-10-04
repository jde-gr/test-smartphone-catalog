import Layout from '../components/Layout/Layout';
import SearchBar from '../components/Shop/SearchBar';
import ProductList from '../components/Shop/ProductList';

const ProductListPage = () => {
  return (
    <>
      <Layout>
        <SearchBar />
        <ProductList />
      </Layout>
    </>
  );
};

export default ProductListPage;
