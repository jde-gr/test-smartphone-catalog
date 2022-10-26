import { render } from '../../../test-utils/testing-library-utils';
import Card from '../Card';

test('renders correctly', () => {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});
