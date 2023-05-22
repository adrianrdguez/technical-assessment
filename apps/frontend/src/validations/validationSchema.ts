import * as Yup from 'yup';

// Validation schema for the form fields in the UserForm
export const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  lastName: Yup.string().required('Los apellidos son requeridos'),
  username: Yup.string().required('El nombre de usuario es requerido'),
  email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es requerido'),
  phone: Yup.string().required('El número de teléfono es requerido'),
});
