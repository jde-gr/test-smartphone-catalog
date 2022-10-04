import styled from '@emotion/styled';
import { HEADERHEIGHT } from '../../core/constants';

export const NotFoundDiv = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADERHEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundMsg = styled.h2`
  font-size: 1.375rem;
  color: #345678;
`;

export const NotFoundLink = styled.div`
  & a {
    font-size: 1.25rem;
    color: #456789;
    font-weight: 200;
    text-decoration: none;
  }
`;
