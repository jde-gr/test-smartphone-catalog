import styled from '@emotion/styled';

export const Badge = styled.span`
  background-color: ${(props) =>
    props.variantColor ? props.variantColor : 'grey'};
  color: ${(props) => (props.color ? props.color : 'white')};
  padding: 0.3125rem 0.625rem;
  border-radius: 1em;
  box-sizing: border-box;
  font-size: 0.75rem;
  line-height: 1rem;
`;
