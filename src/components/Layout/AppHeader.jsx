import React from 'react';
import {
  Header,
  HeaderTitleWrapper,
  HeaderTitle,
} from './styles/AppHeader.styles';

import logo from '../../logo.png';
import CartCounter from '../Header/CartCounter';
import Breadcrumb from '../Header/Breadcrumb';

const AppHeader = (props) => {
  return (
    <Header>
      <HeaderTitleWrapper>
        <HeaderTitle>
          <img src={logo} className='App-logo' alt='logo' />{' '}
          <h1>Elige tu móvil</h1>
        </HeaderTitle>
        <Breadcrumb />
      </HeaderTitleWrapper>
      <CartCounter />
    </Header>
  );
};

AppHeader.propTypes = {};

export default AppHeader;
