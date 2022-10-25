import styled from '@emotion/styled';

export const BreadcrumbContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.25rem;

  & span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.75rem;
    line-height: 0.75rem;
  }

  & a {
    text-decoration: none;
    margin-right: 0.25rem;
    line-height: 0.75rem;
    font-size: 0.75rem;
    & span {
      color: white;
    }
  }
`;
