import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';
import CartCounter from '../Header/CartCounter';
import Breadcrumb from '../Header/Breadcrumb';

const AppHeader = (props) => {
  return (
    <header>
      <div>
        <h1>
          <img src={logo} className='App-logo' alt='logo' /> Elige tu móvil
        </h1>
        <Breadcrumb />
      </div>
      <CartCounter />
    </header>
  );
};

AppHeader.propTypes = {};

export default AppHeader;
