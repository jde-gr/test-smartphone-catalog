import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '../../../test-utils/testing-library-utils';

import userEvent from '@testing-library/user-event';

import ProductList from '../ProductList';

test('displays image for each mobile device from server', async () => {
  render(<ProductList />);

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
  render(<ProductList />);

  const searchInput = screen.getByPlaceholderText(/buscar/i);
  expect(searchInput).toBeInTheDocument();
});

test('updates device list when typing on search', async () => {
  render(<ProductList />);

  // find device model that will be filtered and that one which will remain
  const modelText = screen.getByText(/Iconia Talk S$/i);
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
