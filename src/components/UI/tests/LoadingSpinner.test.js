import { render } from '../../../test-utils/testing-library-utils';
import LoadingSpinner from '../LoadingSpinner';

test('renders correctly', () => {
  const { container } = render(<LoadingSpinner />);
  expect(container).toMatchSnapshot();
});
