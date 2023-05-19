import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

interface UserFormProps {
  initialValues: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  onSubmit: (values: any) => void;
}

const EditUserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  const validateForm = (values: any) => {
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
  };

  return (
    <Formik initialValues={initialValues} validate={validateForm} onSubmit={onSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default EditUserForm;
