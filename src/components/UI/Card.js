import React from 'react';
import { CARD_DIRECTION } from '../../core/constants';
import { CardContainer, CardRowContainer } from './styles/Card.styles';

const Card = ({
  direction = CARD_DIRECTION.column,
  width = 'inherit',
  children,
}) => {
  return (
    <div style={{ width: width }}>
      {direction === CARD_DIRECTION.column && (
        <CardContainer>{children}</CardContainer>
      )}
      {direction === CARD_DIRECTION.row && (
        <CardRowContainer>{children}</CardRowContainer>
      )}
    </div>
  );
};

export default Card;
