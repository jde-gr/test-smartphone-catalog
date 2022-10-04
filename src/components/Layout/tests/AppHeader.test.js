import { render, screen } from '@testing-library/react';
import AppHeader from '../AppHeader';

test('renders a title as a heading with level 1', () => {
  render(<AppHeader />);
  const title = screen.getByRole('heading', {
    level: 1,
    name: /Elige tu móvil/i,
  });
  expect(title).toBeInTheDocument();
});
