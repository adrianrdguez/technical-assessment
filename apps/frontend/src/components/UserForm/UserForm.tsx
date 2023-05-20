import React from 'react';
import { Formik, Form } from 'formik';
import { FormContainer, FormGroup, Label, Input, DoubleRow, StyleErrorMsg } from './UserForm.styles';
import { validationSchema } from '../../validations/validationSchema';
import SaveButton from '../Buttons/SaveButton/SaveButton';

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
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <FormContainer>
          <DoubleRow>
            <FormGroup width={40}>
              <Label htmlFor="name">Nombre</Label>
              <Input type="text" id="name" name="name" />
              <StyleErrorMsg name="name" component="p" />
            </FormGroup>

            <FormGroup width={40}>
              <Label htmlFor="lastName">Apellidos</Label>
              <Input type="text" id="lastName" name="lastName" />
              <StyleErrorMsg name="lastName" component="p" />
            </FormGroup>
          </DoubleRow>

          <FormGroup>
            <Label htmlFor="username">Nombre de Usuario</Label>
            <Input type="text" id="username" name="username" />
            <StyleErrorMsg name="username" component="p" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
            <StyleErrorMsg name="email" component="p" />
          </FormGroup>

          <FormGroup width={40}>
            <Label htmlFor="phone">Móvil</Label>
            <Input type="text" id="phone" name="phone" />
            <StyleErrorMsg name="phone" component="p" />
          </ FormGroup>
        </FormContainer>
        <button
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default EditUserForm;

