import React from 'react';
import { SECONDARY } from '../../core/constants';
import { Badge } from './styles/CardCounter.styles';

const CartCounter = (props) => {
  return (
    <div>
      <Badge variantColor={SECONDARY} data-testid='cartItemQty'>
        0
      </Badge>
    </div>
  );
};

export default CartCounter;
