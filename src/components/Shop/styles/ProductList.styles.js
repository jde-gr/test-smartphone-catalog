import styled from '@emotion/styled';
import { breakpoints } from '../../../core/constants';

export const PLPList = styled.div`
  display: grid;
  gap: 0.5rem;

  ${breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${breakpoints.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
