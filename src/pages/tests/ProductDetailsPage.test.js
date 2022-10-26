import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store';
import { render } from '@testing-library/react';
import ProductDetailsPage from '../ProductDetailsPage';

test('renders correctly', () => {
  const { container } = render(
    <MemoryRouter initialEntries={[{ state: { id: 'ZmGrkLRPXOTpxsU4jjAcv' } }]}>
      <Provider store={store}>
        <ProductDetailsPage />
      </Provider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
