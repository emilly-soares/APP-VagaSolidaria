import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  height: 35px;
  width: 400px;
  border: 1px solid #ccc; 
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  font-size: 16px;
  background-color: #5187F0; /* Azul */
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 200px;
  margin-top: 20px;
  &:hover {
    background-color: #4169E1;
  }
`;

export const Error = styled.p`
  color: red;
`;