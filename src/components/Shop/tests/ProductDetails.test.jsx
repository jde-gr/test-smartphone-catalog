import {
  render,
  screen,
  within,
} from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

import ProductDetails from '../ProductDetails';

test('displays the device after retrieving it from server', async () => {
  render(<ProductDetails />);
  const deviceModel = await screen.findByText(/iconia talk s$/i);
  expect(deviceModel).toBeInTheDocument();
});
