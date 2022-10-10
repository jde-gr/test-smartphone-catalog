import { setCartItemCount } from '../cart-slice';
import { postItemToCart } from '../cart-thunks';

describe('Cart thunk tests', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test('Calls setCartItemCount', async () => {
    await postItemToCart()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setCartItemCount({ count: 1 }));

    const value = setCartItemCount();
    console.log(value);
  });
});
