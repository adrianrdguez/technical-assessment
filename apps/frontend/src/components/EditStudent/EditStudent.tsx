import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 1rem;
`;

const FormField = styled.div`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const EditStudentForm: React.FC<{ onSubmit: (formData: any) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
    };

    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleFormSubmit}>
        <FormField>
          <Label>Name:</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormField>
        <FormField>
          <Label>Email:</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormField>
        <FormField>
          <Label>Phone:</Label>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormField>
        <Button type="submit">Save Changes</Button>
      </form>
    </FormContainer>
  );
};

export default EditStudentForm;
