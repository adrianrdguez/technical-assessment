import React from 'react';
import { Formik, Form } from 'formik';
import { FormContainer, FormGroup, Label, Input, ErrorMsg, DoubleRow } from './UserForm.styles';


interface UserFormProps {
  initialValues: {
    name: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
  };
  onSubmit: (values: any) => void;
}

const EditUserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  /* const validateForm = (values: any) => {
    const errors: any = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    }

    return errors;
  }; */

  return (
    <Formik initialValues={initialValues} /* validate={validateForm} */ onSubmit={onSubmit}>
      <Form>
        <FormContainer>
          <DoubleRow>
            <FormGroup width={40}>
              <Label htmlFor="name">Nombre</Label>
              <Input type="text" id="name" name="name" />
              <ErrorMsg name="name" component="div" />
            </FormGroup>

            <FormGroup width={40}>
              <Label htmlFor="lastName">Apellidos</Label>
              <Input type="text" id="lastName" name="lastName" />
              <ErrorMsg name="lastName" component="div" />
            </FormGroup>
          </DoubleRow>

          <FormGroup>
            <Label htmlFor="username">Nombre de Usuario</Label>
            <Input type="text" id="username" name="username" />
            <ErrorMsg name="username" component="div" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
            <ErrorMsg name="email" component="div" />
          </FormGroup>

          <FormGroup width={40}>
            <Label htmlFor="phone">Móvil</Label>
            <Input type="text" id="phone" name="phone" />
            <ErrorMsg name="phone" component="div" />
          </ FormGroup>
        </FormContainer>
      </Form>
    </Formik>
  );
};

export default EditUserForm;

