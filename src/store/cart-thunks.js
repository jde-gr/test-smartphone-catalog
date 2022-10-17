import {
  BASE_URL,
  ERRORMESSAGE,
  NOTIFICATIONSTATUS,
  SENDNOTIFICATIONMSG,
  SENDNOTIFICATIONTITLE,
} from '../core/constants';
import { setCartItemCount } from './cart-slice';
import { uiActions } from './ui-slice';

export const postItemToCart = (itemId, itemColorCode, itemStorageCode) => {
  return async (dispatch) => {
    const newItem = {
      id: itemId,
      colorCode: itemColorCode,
      storageCode: itemStorageCode,
    };
    const sendData = async () => {
      const res = await fetch(`${BASE_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!res.ok) {
        throw new Error(ERRORMESSAGE.sendCardDataError);
      }

      const resData = await res.json();

      return resData;
    };

    try {
      const cartData = await sendData();
      dispatch(setCartItemCount({ count: cartData.count }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: NOTIFICATIONSTATUS.error,
          title: SENDNOTIFICATIONTITLE.error,
          message: SENDNOTIFICATIONMSG.error,
        })
      );
    }
  };
};
