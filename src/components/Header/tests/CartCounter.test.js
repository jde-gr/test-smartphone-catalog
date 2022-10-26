import { render } from '../../../test-utils/testing-library-utils';
import CartCounter from '../CartCounter';

test('renders correctly', () => {
  const { container } = render(<CartCounter />);
  expect(container).toMatchSnapshot();
});
