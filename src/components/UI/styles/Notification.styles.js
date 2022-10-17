import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ERRORBG, SUCCESSBG } from '../../../core/constants';

const fadeInOut = keyframes`
  from, to {
    opacity: 0;
    display: none;
    height: 0;
    padding: 0;
}
  1%, 99% {
    opacity: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
      height: 3rem;
    padding: 0.5rem 2rem;
}
  20%, 80% {
    opacity: 1;
  }
`;

export const SuccessNotification = styled.section`
  background-color: ${SUCCESSBG};
  color: white;
  animation: ${fadeInOut} 4s linear forwards;

  & h2,
  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const ErrorNotification = styled.section`
  background-color: ${ERRORBG};
  color: white;
  animation: ${fadeInOut} 4s linear forwards;

  & h2,
  p {
    font-size: 1rem;
    margin: 0;
  }
`;
