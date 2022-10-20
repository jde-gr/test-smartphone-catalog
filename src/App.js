import { Routes, Route, Navigate } from 'react-router-dom';

import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import NotFound from './pages/NotFound';

export const routes = [
  {
    path: '/devices',
    element: <ProductListPage />,
  },
  {
    path: '/device/:device',
    element: <ProductDetailsPage />,
  },
];

function App() {
  localStorage.setItem('products', JSON.stringify({}));
  localStorage.setItem('productsDate', JSON.stringify({}));

  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/devices' />} />
      {routes.map(({ path, element }, key) => (
        <Route path={path} key={key} element={element} />
      ))}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
