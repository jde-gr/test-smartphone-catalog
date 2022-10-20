import styled from '@emotion/styled';
import { SUCCESSBG, TERTIARY } from '../../../core/constants';

export const Button = styled.button`
  flex: 0 1 auto;
  margin-top: 0.5rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: ${SUCCESSBG};
  color: white;
  border: 0.0625rem solid ${SUCCESSBG};
  cursor: pointer;

  :hover {
    border: 0.0625rem solid ${TERTIARY};
    box-shadow: 0 0.0625rem 0.5rem rgba(0, 0, 0, 0.25);
  }

  :focus {
    border: 0.0625rem solid ${TERTIARY};
    box-shadow: 0 0.1875rem 0.75rem rgba(0, 0, 0, 0.25);
    text-shadow: 0 0.1875rem 0.75rem rgba(0, 0, 0, 0.25);
  }
`;
