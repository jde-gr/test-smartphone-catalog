import styled from '@emotion/styled';
import { HEADERHEIGHT } from '../../../core/constants';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: ${HEADERHEIGHT};
  background-color: #345678;
  box-sizing: border-box;
`;

export const HeaderTitleWrapper = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.div`
  height: 3rem;
  flex: none;
  display: flex;
  justify-content: flex-start;
  color: white;
  background-color: #345678;

  & img {
    height: 3rem;
    flex: 0 1 auto;
  }
  & h1 {
    height: 3rem;
    line-height: 3rem;
    display: inline-block;
    margin: 0 0.5rem 0;
    font-size: 2rem;
    font-weight: 500;
  }
`;
