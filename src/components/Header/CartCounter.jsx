import React from 'react';
import { useSelector } from 'react-redux';
import { SECONDARY } from '../../core/constants';
import { Badge } from './styles/CardCounter.styles';

const CartCounter = (props) => {
  const itemCount = useSelector((state) => state.cart.itemCount);
  return (
    <div>
      <Badge variantColor={SECONDARY} data-testid='cartItemQty'>
        {itemCount}
      </Badge>
    </div>
  );
};

export default CartCounter;
