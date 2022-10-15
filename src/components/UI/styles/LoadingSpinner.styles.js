import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { PRIMARY, TERTIARY } from '../../../core/constants';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${PRIMARY};
  border-right: 2px solid ${PRIMARY};
  border-bottom: 2px solid ${PRIMARY};
  border-left: 4px solid ${TERTIARY};
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
