import styled, { css } from 'styled-components';
import { Field, ErrorMessage } from 'formik';

interface FormGroupProps {
  width?: number;
}

export const FormContainer = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
font-style: normal;
font-weight: 400;
font-size: 11px;
margin-bottom: 10px;
margin-bottom: 5px;
`;

export const Input = styled(Field)`
  background: #FFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 5px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
`;

export const DoubleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  ${props => (
    props.width ? css`width: ${props.width}%;` : css`width: 100%;`
  )}
`;