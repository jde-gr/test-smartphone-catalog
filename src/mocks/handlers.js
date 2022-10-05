import { rest } from 'msw';

import { BASE_URL } from '../core/constants';

export const handlers = [
  rest.get(`${BASE_URL}/product`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 'ZmGrkLRPXOTpxsU4jjAcv',
          brand: 'Acer',
          model: 'Iconia Talk S',
          price: '170',
          imgUrl:
            'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
        },
        {
          id: 'cGjFJlmqNPIwU59AOcY8H',
          brand: 'Acer',
          model: 'Liquid Z6 Plus',
          price: '250',
          imgUrl:
            'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
        },
      ])
    );
  }),

  rest.post(`${BASE_URL}/cart`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 1,
      })
    );
  }),
];
