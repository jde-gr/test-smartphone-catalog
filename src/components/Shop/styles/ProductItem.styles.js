import styled from '@emotion/styled';
import { PRIMARY } from '../../../core/constants';

export const LinkContainer = styled.div`
  border-radius: 0.75rem;
  & a {
    color: inherit;
    text-decoration: none;
  }
  & a:hover {
    & div:first-of-type {
      background-color: rgba(52, 86, 120, 0.15);
      border-radius: 0.75rem 0.75rem 0 0;
    }
    & div:nth-of-type(2) {
      background-color: rgba(52, 86, 120, 0.2);
      border-radius: 0 0 0.75rem 0.75rem;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Image = styled.img``;

export const Content = styled.div`
  padding: 1rem;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0 0 0.75rem 0.75rem;
`;

export const Brand = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  text-decoration: none;
`;

export const Model = styled.h6`
  font-size: 1rem;
  font-weight: 300;
  margin: 0.2rem 0;
  text-decoration: none;
`;

export const Price = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0.2rem 0;
  color: ${PRIMARY};
  text-decoration: none;
`;
