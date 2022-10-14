import styled from '@emotion/styled';
import { BREAKPOINTS_MAX, PRIMARY, TERTIARY } from '../../../core/constants';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 2rem 2rem 0;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Image = styled.img``;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0 0.75rem 0.75rem 0;
  flex: 1 1 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  ${BREAKPOINTS_MAX.sm} {
    border-radius: 0 0 0.75rem 0.75rem;
  }
`;

export const Details = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  color: ${PRIMARY};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Price = styled.h5`
  color: ${TERTIARY};
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0.2rem 0;
  text-decoration: none;
`;

export const SubTitle = styled.h4`
  color: ${PRIMARY};
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5em 0 0.25em 0;
`;

export const Desc = styled.p`
  color: black;
  font-size: 0.8125rem;
  font-weight: 400;
  margin: 0;
  text-decoration: none;
`;

export const Key = styled.span`
  font-weight: 500;
`;

export const Actions = styled.div`
  padding: 1rem;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.025);
  border-radius: 0 0 0.75rem 0;
`;
