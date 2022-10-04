import { Routes, Route, Navigate } from 'react-router-dom';

import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/devices' />} />
      <Route path='/devices' element={<ProductListPage />} />
      <Route path='/device' element={<ProductDetailsPage />} />
      <Route path='/device/:device' element={<ProductDetailsPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
