import styled from '@emotion/styled';

export const InputDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  margin: 0.5rem 0rem;
`;

export const Input = styled.input`
  width: 16.25rem;
  border: 0.0625rem solid #345678;
  display: block;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  border-radius: 0.375rem;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 14.5rem center;
  box-sizing: border-box;
`;
