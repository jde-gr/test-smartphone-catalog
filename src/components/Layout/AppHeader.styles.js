import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  width: 100%;
  height: 5rem;
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
  color: white;

  & img {
    height: 3rem;
    flex: 0 1 auto;
  }
  & h1 {
    height: 3rem;
    line-height: 3rem;
    display: inline-block;
    margin: 0;
    font-size: 2rem;
    font-weight: 500;
  }
`;
