import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const LeftSection = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #5187F0; /* Azul */
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
    width: 150px; 
    height: auto; 
    margin-right: 0.2rem; 
    margin-top: -2rem;
`;

export const Vacancy = styled.img`
    width: 500px; 
    height: auto; 
    margin-left: 22rem;
`;

export const PlatformTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    position: absolute;
    top: 40%;
    left: 22%;
    transform: translate(-50%, -50%);
    color: #FFF;
`;

export const Text = styled.h2`
  color: #fff;
  margin-top: 1rem;
  margin-left: 30%;
`;

export const ButtonRegister = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid;
  width: 30%;
  height: 30px;
  font-weight: bold;
  padding: 1rem 1rem;
  margin-left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResetPassword = styled(Link)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  color: #606060;
`;


export const Description = styled.p`
  color: #fff;
  text-align: center;
`;

export const RightSection = styled.div`
  width: 50%;
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  color: #FD9B79;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const TogglePasswordVisibility = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #606060;
`;


export const InputLabel = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  height: 35px;
  width: 400px;
  border: 1px solid #ccc; 
  font-size: 16px;
`;

export const Error = styled.p`
  color: red;
`;

export const GroupLogo = styled(Link)`
  position: relative;
`;


export const SubmitButton = styled.button`
  font-size: 16px;
  background-color: #5187F0; 
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  height: 50px;
  &:hover {
    background-color: #4169E1;
  }

  
`;

