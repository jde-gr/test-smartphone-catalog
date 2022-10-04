import React from 'react';
import PropTypes from 'prop-types';
import { Header, HeaderTitleWrapper, HeaderTitle } from './AppHeader.styles';

import logo from '../../logo.svg';
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
