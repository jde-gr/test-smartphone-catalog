import React from 'react';

import { InputDiv, Input } from './styles/SearchBar.styles';

const SearchBar = (props) => {
  const inputChangeHandler = (event) =>
    props.onChangeFilter(event.target.value);

  return (
    <InputDiv>
      <Input type='text' placeholder='Buscar' onChange={inputChangeHandler} />
    </InputDiv>
  );
};

export default SearchBar;
