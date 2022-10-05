import { render, screen } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';

import ProductList from '../ProductList';

const queryClient = new QueryClient();

test('displays image for each mobile device from server', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );

  // find images
  const mobileImages = await screen.findAllByRole('img', {
    name: /^dispositivo/i,
  });
  expect(mobileImages).toHaveLength(2);

  // confirm alt text of images
  const altText = mobileImages.map((element) => element.alt);
  expect(altText).toEqual([
    'Dispositivo Acer Iconia Talk S',
    'Dispositivo Acer Liquid Z6 Plus',
  ]);
});

test('displays a search bar to filter devices', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );

  const searchInput = screen.getByPlaceholderText(/buscar/i);
  expect(searchInput).toBeInTheDocument();
});
