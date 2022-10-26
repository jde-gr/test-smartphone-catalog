import { render } from '../../../test-utils/testing-library-utils';
import { Notification } from '../Notification';

test('renders correctly', () => {
  const { container } = render(<Notification />);
  expect(container).toMatchSnapshot();
});
