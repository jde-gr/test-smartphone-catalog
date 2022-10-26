import { render } from '../../test-utils/testing-library-utils';
import ProductListPage from '../ProductListPage';

test('renders correctly', () => {
  const { container } = render(<ProductListPage />);
  expect(container).toMatchSnapshot();
});
