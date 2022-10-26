import { render, screen } from '../../../test-utils/testing-library-utils';
import Breadcrumb from '../Breadcrumb';

test('renders correctly', () => {
  const { container } = render(<Breadcrumb />);
  expect(container).toMatchSnapshot();
});

test('go back link links to the device list page', async () => {
  render(<Breadcrumb />);

  const homeLink = await screen.findByRole('link', { name: /inicio$/i });
  expect(homeLink).toHaveAttribute('href', '/');
});
