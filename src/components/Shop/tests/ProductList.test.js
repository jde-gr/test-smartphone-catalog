import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../test-utils/testing-library-utils';

import ProductList from '../ProductList';
import { productListData } from '../../../test-utils/fixtures/productListFixtures';

test('displays image for each mobile device from server', async () => {
  render(<ProductList data={productListData} />);

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
  render(<ProductList data={productListData} />);

  const searchInput = screen.getByPlaceholderText(/buscar/i);
  expect(searchInput).toBeInTheDocument();
});

test('updates device list when typing on search', async () => {
  render(<ProductList data={productListData} />);

  // find device model that will be filtered and that one which will remain
  const modelText = await screen.findByText(/Iconia Talk S$/i);
  const model2Text = screen.getByText(/Liquid Z6 Plus$/i);
  expect(modelText).toBeInTheDocument();
  expect(model2Text).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText(/buscar/i);
  expect(searchInput).toBeInTheDocument();

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'liquid');

  // expect the filtered device not to appear any more, while remaining the other one
  expect(modelText).not.toBeInTheDocument();
  expect(model2Text).toBeInTheDocument();
});

test('device card links to the details page', async () => {
  render(<ProductList data={productListData} />);

  const card1Link = await screen.findByTestId('ZmGrkLRPXOTpxsU4jjAcv');
  expect(card1Link).toHaveAttribute('href', '/device/:ZmGrkLRPXOTpxsU4jjAcv');
});

/* test('handles error for the device list', async () => {
  server.resetHandlers(
    rest.get(`${BASE_URL}/product`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<ProductListPage />);

  await waitFor(async () => {
    const notification = await screen.findByTestId('notification');
    expect(notification).toBeInTheDocument();
  });
}); */
