import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const Layout = (props) => {
  return (
    <>
      <AppHeader />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
