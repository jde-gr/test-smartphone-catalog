import { render } from '../../test-utils/testing-library-utils';
import NotFound from '../NotFound';

test('renders correctly', () => {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
});
