import React from 'react';
import styled from 'styled-components';
import { SiMinutemailer } from "react-icons/si";
import emailIcon from '../assets/email-icon.svg';

const StyledFooter = styled.footer`
  background-color: #F1F4F8;
  padding: 3rem 1rem 5rem;
  color: #2D3150;
  text-align: center;
  width: 100%;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const SupportText = styled.div`
  color: #EB801D;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const SubscribeText = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const InfoText = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const EmailInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;  /* Define uma largura fixa */
  margin: 0 auto;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #ccc;
  background-image: url(${emailIcon});
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 40px;
  
  @media (max-width: 768px) {
    width: 100%;  /* Deixa o input ocupar toda a largura disponível */
    background-image: none;  /* Remove a imagem de fundo em telas menores */
    padding-left: 20px;
  }
`;

const EmailInput = styled.input`
  flex: 1; 
  color: #2D3150;
  padding: 0.5rem; 
  outline:0;
  border:0;
  font-size: 16px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const SubscribeButton = styled.button`
  background-color: #5187F0;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #5298F1;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0.5rem;
  }
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
