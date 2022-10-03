import './App.css';
import Layout from './components/Layout/Layout';
import ProductList from './components/Shop/ProductList';
import SearchBar from './components/Shop/SearchBar';

function App() {
  return (
    <>
      <Layout>
        <SearchBar />
        <ProductList />
      </Layout>
    </>
  );
}

export default App;
