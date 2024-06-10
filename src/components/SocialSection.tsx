import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Section = styled.section`
  background-color: #ffffff;
  color: #333333;
  padding: 3rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #565656;
  margin-bottom: 1.5rem;
`;

const Yellow = styled.span`
font-size: 2rem;
font-weight: bold;
color: #fbbf24;
margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  & > a {
    color: #333333;
    margin-right: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      background-color: #ffd43b;
    }
  }
`;

const Button = styled.button`
  background-color: #fbbf24;
  color: #333333;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd43b;
  }

`;

const SocialSection: React.FC = () => {

  return (

    <Section>

      <Container>
        <Title><Yellow>Compartilhe</Yellow> suas Conquistas</Title>

        <SocialIcons>
          <FaLinkedin size={50} color="#0e76a8" background-color="#FFFFFF" />
          <FaInstagram size={50} color="#d6249f" />
          <FaWhatsapp size={50} color="#075e54" background-color="#075e54" />
        </SocialIcons>

        <Button>Cadastre-se</Button>
        
      </Container>

    </Section>
  );
};

export default SocialSection;