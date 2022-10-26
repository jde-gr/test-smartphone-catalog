import { render } from '../../../test-utils/testing-library-utils';
import ProductActions from '../ProductActions';

test('renders correctly', () => {
  const { container } = render(<ProductActions />);
  expect(container).toMatchSnapshot();
});
