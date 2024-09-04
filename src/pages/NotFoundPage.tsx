import React from 'react';
import brand from '../assets/brand.png';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Message = styled.h1`
    font-size: 2rem;
    width: 50%;
    color: #333;
    text-align: center;
    margin: 5rem 0;
`;

const Image = styled.img`
    display: block;
    max-width: 30%;
    height: auto;
`;

const NotFoundPage: React.FC = () => {
    return (
        <Container>
            <Message>Desculpe! Não conseguimos encontrar essa rota</Message>
            <Image src={brand} alt="Sem Vagas" />
        </Container>
    );
};

export default NotFoundPage;
