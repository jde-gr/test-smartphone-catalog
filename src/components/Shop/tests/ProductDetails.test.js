import { render, screen } from '../../../test-utils/testing-library-utils';

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
