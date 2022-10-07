import styled from '@emotion/styled';
import { BREAKPOINTS_MAX } from '../../../core/constants';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 0.75rem;
  box-shadow: 0 0.0625rem 0.5rem rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

export const CardRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 0.75rem;
  box-shadow: 0 0.0625rem 0.5rem rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  ${BREAKPOINTS_MAX.sm} {
    flex-direction: column;
  }
`;
