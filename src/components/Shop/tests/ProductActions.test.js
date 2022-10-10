import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import ProductListPage from '../../../pages/ProductListPage';
import ProductDetailsPage from '../../../pages/ProductDetailsPage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from '../../../store';

const queryClient = new QueryClient();

test('The cart item counter updates after clicking add to cart button', async () => {
  render(
    <MemoryRouter initialEntries={[{ state: 'ZmGrkLRPXOTpxsU4jjAcv' }]}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductDetailsPage />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );
  //   const card1Link = await screen.findByTestId('ZmGrkLRPXOTpxsU4jjAcv');
  //   await userEvent.click(card1Link);

  const deviceModel = await screen.findByText(/iconia talk s$/i);
  expect(deviceModel).toBeInTheDocument();

  const addToCartButton = screen.getByRole('button', {
    name: /añadir al carrito/i,
  });

  const cartCounter = screen.getByTestId('cartItemQty');
  expect(cartCounter).toHaveTextContent(/0/i);

  const storageOption = screen.getByRole('radio', {
    name: '32 GB',
  });
  expect(storageOption).toBeInTheDocument();

  await userEvent.click(storageOption);

  const colorOption = screen.getByRole('radio', { name: 'Black' });
  expect(colorOption).toBeInTheDocument();

  await userEvent.click(addToCartButton);

  const updatedCartCounter = await within(cartCounter).findByText('1');
  expect(updatedCartCounter).toBeInTheDocument();
});
