import React from 'react';
import { CardContainer } from './styles/Card.styles';

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
