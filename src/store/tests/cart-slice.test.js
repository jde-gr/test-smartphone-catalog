import {
  cartItemAddedState,
  initialState,
  resCount,
} from '../../test-utils/fixtures/cartFixtures';
import cartSlice, { setCartItemCount } from '../cart-slice';

describe('Tests at cartSlice', () => {
  test('returns the initial state', () => {
    const state = cartSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
    expect(cartSlice.name).toBe('cart');
  });

  test('updates the state', () => {
    const state = cartSlice.reducer(initialState, setCartItemCount(resCount));
    expect(state).toEqual(cartItemAddedState);
  });
});
