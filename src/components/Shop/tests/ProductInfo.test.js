import { render } from '../../../test-utils/testing-library-utils';
import ProductInfo from '../ProductInfo';

test('renders correctly', () => {
  const { container } = render(<ProductInfo />);
  expect(container).toMatchSnapshot();
});
