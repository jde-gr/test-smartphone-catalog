import { Link } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import {
  NotFoundDiv,
  NotFoundMsg,
  NotFoundLink,
} from './styles/NotFound.styles';

const NotFound = () => {
  return (
    <Layout>
      <NotFoundDiv>
        <NotFoundMsg>¡Página no encontrada!</NotFoundMsg>
        <NotFoundLink>
          <Link to={'/'}>
            {'>'} Ir a la página principal {'>'}
          </Link>
        </NotFoundLink>
      </NotFoundDiv>
    </Layout>
  );
};

export default NotFound;
