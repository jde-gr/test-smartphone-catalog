import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbContainer } from './styles/Breadcrumb.styles';

const Breadcrumb = (props) => {
  const location = useLocation();

  return (
    <BreadcrumbContainer>
      <Link key={'/'} to={'/'}>
        <span>{'> '}Inicio</span>
      </Link>
      {!!location.state?.device && (
        <span>
          {' '}
          {' > '}
          {location.state.device}
        </span>
      )}
    </BreadcrumbContainer>
  );
};

Breadcrumb.propTypes = {};

export default Breadcrumb;
