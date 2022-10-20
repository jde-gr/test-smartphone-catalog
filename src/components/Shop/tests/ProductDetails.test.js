import { rest } from 'msw';
import { BASE_URL } from '../../../core/constants';
import { server } from '../../../mocks/server';
import {
  render,
  screen,
  waitFor,
} from '../../../test-utils/testing-library-utils';

import ProductDetailsPage from '../../../pages/ProductDetailsPage';
import ProductDetails from '../ProductDetails';

test('displays the device after retrieving it from server', async () => {
  render(<ProductDetails />);
  const deviceModel = await screen.findByText(/iconia talk s$/i);
  expect(deviceModel).toBeInTheDocument();
});

test('go back link links to the device list page', async () => {
  render(<ProductDetails />);

  const goBackLink = await screen.findByRole('link', { name: /volver$/i });
  expect(goBackLink).toHaveAttribute('href', '/devices');
});

/* test('handles error for the device list', async () => {
  server.resetHandlers(
    rest.get(`${BASE_URL}/product/:id`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<ProductDetailsPage />);

  await waitFor(async () => {
    const notification = await screen.findByRole('heading', {
      level: 2,
    });
    expect(notification).toBeInTheDocument();
  });
}); */
