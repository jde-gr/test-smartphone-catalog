import { render, screen } from '../../../test-utils/testing-library-utils';
import AppHeader from '../AppHeader';

test('renders a title as a heading with level 1', () => {
  render(<AppHeader />);
  const title = screen.getByRole('heading', {
    level: 1,
    name: /elige tu móvil/i,
  });
  expect(title).toBeInTheDocument();
});
