import { type } from '@testing-library/user-event/dist/type';
import { BASE_URL } from '../core/constants';
import { setCartItemCount } from './cart-slice';

export const postItemToCart = (itemId, itemColorCode, itemStorageCode) => {
  return async (dispatch) => {
    const newItem = {
      id: itemId,
      colorCode: itemColorCode,
      storageCode: itemStorageCode,
    };
    const res = await fetch(`${BASE_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    const resData = await res.json();
    console.log(
      '🚀 ~ file: cart-actions.js ~ line 19 ~ return ~ resData',
      JSON.stringify(resData)
    );
    console.log(
      `resData.count: ${resData.count} | type: ${typeof resData.count}`
    );
    dispatch(setCartItemCount({ count: resData.count }));
  };
};
