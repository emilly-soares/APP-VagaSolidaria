import React from 'react';
import styled from 'styled-components';

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
      color: #fbbf24;
    }
  }
`;

const Button = styled.button`
  background-color: #fbbf24;
  color: #333333;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
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
        <Title>Compartilhe suas Conquistas</Title>
        <SocialIcons>
       
        </SocialIcons>
        <Button>Cadastre-se</Button>
      </Container>
    </Section>
  );
};

export default SocialSection;