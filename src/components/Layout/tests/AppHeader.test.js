import { render, screen } from '../../../test-utils/testing-library-utils';
import AppHeader from '../AppHeader';

test('renders correctly', () => {
  const { container } = render(<AppHeader />);
  expect(container).toMatchSnapshot();
});

test('renders a title as a heading with level 1', () => {
  render(<AppHeader />);
  const title = screen.getByRole('heading', {
    level: 1,
    name: /elige tu móvil/i,
  });
  expect(title).toBeInTheDocument();
});
