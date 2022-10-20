import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Actions } from './styles/ProductDetails.styles';
import { postItemToCart } from '../../store/cart-thunks';
import { Button } from './styles/ProductActions.styles';

const ProductActions = ({ id, options }) => {
  const dispatch = useDispatch();

  return (
    <Actions>
      <Formik
        initialValues={{
          storageInput: String(options.storages[0].code),
          colorInput: String(options.colors[0].code),
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          dispatch(postItemToCart(id, values.colorInput, values.storageInput));
        }}
      >
        {({ values }) => (
          <Form>
            <div id='storageGroup'>Almacenamiento: </div>
            <div role='group' aria-labelledby='storageGroup'>
              {options.storages.map((storage) => (
                <label key={storage.code}>
                  <Field
                    type='radio'
                    name='storageInput'
                    value={String(storage.code)}
                  />
                  {storage.name}{' '}
                </label>
              ))}
            </div>

            <div id='colorGroup'>Color: </div>
            <div role='group' aria-labelledby='colorGroup'>
              {options.colors.map((color) => (
                <label key={color.code}>
                  <Field
                    type='radio'
                    name='colorInput'
                    value={String(color.code)}
                  />
                  {color.name}{' '}
                </label>
              ))}
            </div>

            <Button type='submit'>Añadir al carrito</Button>
          </Form>
        )}
      </Formik>
    </Actions>
  );
};

ProductActions.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object,
};

export default ProductActions;
