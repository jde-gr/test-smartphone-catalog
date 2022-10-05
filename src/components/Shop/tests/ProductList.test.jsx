import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ProductList from '../ProductList';

test('displays image for each mobile device from server', async () => {
  const queryClient = new QueryClient();
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
