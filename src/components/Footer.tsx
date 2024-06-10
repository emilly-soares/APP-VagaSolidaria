import React from 'react';
import styled from 'styled-components';
import { SiMinutemailer } from "react-icons/si";
import emailIcon from '../assets/email-icon.svg';

const StyledFooter = styled.footer`
  background-color: #FAFAFF;
  padding-top: 3rem;
  padding-bottom: 5rem;
  color: #2D3150;
  text-align: center;
  width: 100%;
`;

const FooterContent = styled.div`
  margin: 0 auto;
`;

const SupportText = styled.div`
  color: #EB801D;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubscribeText = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.div`
  margin-bottom: 1rem;
`;

const SubscribeButton = styled.button`
  background-color: #5187F0;
  color: #fff;
  padding: 0.5rem 1rem 1rem 0.5rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5298F1;
  }
`;

const EmailInputGroup = styled.div`
width: 30%;
display: flex;
justify-content: center; 
margin: 0 auto; 
border: 1px solid #ccc; 
border-radius: 20px; 
padding: 0.5rem; 
box-shadow: 0px 0px 5px #ccc; 
margin-top: 2rem;
margin-bottom: 10px;
background-image: url(${emailIcon});
background-repeat: no-repeat; 
background-position: 10px center; 
padding-left: 40px;
`;

const EmailInput = styled.input`
  flex: 1; 
  color: #2D3150;
  padding: 0.5rem; 
  outline:0;
  border:0;
  font-size: 16px;
`;


const IconWrapper = styled.span`
  margin-right: 0.5rem;

`;

const Footer: React.FC = () => {

  return (

    <StyledFooter>

      <FooterContent>
        <SupportText>Suporte</SupportText>

        <SubscribeText>Inscreva-se</SubscribeText>

        <InfoText>Fique sabendo sobre as novas vagas</InfoText>
        <EmailInputGroup>
          <EmailInput
            type="email"
            placeholder="insira seu e-mail"
          />

          <SubscribeButton>
            <IconWrapper>
              <SiMinutemailer size={20} />
            </IconWrapper>
            Inscrever
          </SubscribeButton>

        </EmailInputGroup>

      </FooterContent>
      
    </StyledFooter>
  );
};


export default Footer;
