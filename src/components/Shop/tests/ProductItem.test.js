import { render } from '../../../test-utils/testing-library-utils';
import ProductItem from '../ProductItem';

test('renders correctly', () => {
  const { container } = render(<ProductItem />);
  expect(container).toMatchSnapshot();
});
