import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #5187F0; /* Azul */
    color: white;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarItem = styled(Link)`
    color: #EEEEEE; 
    font-size: 14px;
    margin-right: 20px; 
    position: relative;
    text-decoration: none;
`;

export const ArrowDown = styled.span`
    font-family: "Orbitron", sans-serif;
    font-size: 10px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

export const NavbarButtons = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto; 
`;

export const NavbarButton = styled(Link)`
    color: #1F1F1F;
    text-decoration: none;
    background-color: #FFCA1D; /* Amarelo */
    padding: 0.5rem 1rem;
    border-radius: 5px;
`;

export const LoginLink = styled(Link)`
    color: #EEEEEE;
    text-decoration: none;
    margin-right: 20px;
`;

export const BlueBackground = styled.div`
    background-color: #5187F0; /* Azul */
    padding: 2rem;
    text-align: center;
    color: white;
`;

export const YellowButton = styled.button`
    background-color: #FFCA1D; /* Amarelo */
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #000; /* Preto */
    border: none;
    cursor: pointer;
`;

export const BenefitsSection = styled.div`
    background-color: #3ADAD9; /* Verde */
    padding: 2rem;
    color: white;
`;

export const Benefit = styled.div`
    margin-top: 1rem;
`;

export const CompanyBenefits = styled.div`
    background-color: #FD9B79; /* Laranja */
    padding: 2rem;
    color: white;
`;

export const RegisterSection = styled.div`
    background-color: #5187F0; /* Azul */
    padding: 2rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
