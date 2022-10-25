import React from 'react';
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
