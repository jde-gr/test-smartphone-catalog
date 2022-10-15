import styled from '@emotion/styled';
import { BREAKPOINTS } from '../../../core/constants';

export const PageContainer = styled.div`
  padding: 0 2rem 2rem 2rem;
  box-sizing: border-box;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PLPList = styled.div`
  display: grid;
  gap: 0.5rem;

  ${BREAKPOINTS.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${BREAKPOINTS.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${BREAKPOINTS.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
