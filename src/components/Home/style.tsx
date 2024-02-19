import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color:  #FFFFFF
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
    justify-content: center;
    width: 40%;
`;

export const NavbarItem = styled(Link)`
    color: #EEEEEE; 
    font-weight: bold;
    font-size: 16px;
    margin-right: 20px; 
    position: relative;
    text-decoration: none;
    margin: 0 25px;
`;

export const ArrowDown = styled.span`
    font-family: "Orbitron", sans-serif;
    font-size: 16px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

export const NavbarButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarButton = styled(Link)`
    color: #1F1F1F;
    text-decoration: none;
    background-color: #FFCA1D; 
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 16px;
`;

export const LoginLink = styled(Link)`
    color: #EEEEEE;
    font-weight: bold;
    text-decoration: none;
    margin-right: 20px;
    font-size: 16px;
`;

export const FlexItem = styled.div`
    flex: 1;
`;

export const Logo = styled.img`
  width: 150px; 
  height: auto; 
  margin-right: 0.5rem; 
  margin-top: -3rem;
`;

export const Line = styled.img`
width: 30px; 
height: auto; 
margin-right: 0.5rem; 
`;

export const Comment = styled.img`
margin-top: -600px;
margin-left: 20rem; 
`;

export const PlatformSection = styled.div`
  margin-left: 7rem;
  align-items: center;
  margin-top: -2rem;
  width: 40%;
`;

export const PlatformTitle = styled.h1`
font-size: 20px;
font-weight: bold;
margin: 0;
position: absolute;
top: 30%;
left: 10%;
transform: translate(-50%, -50%);;
`;

export const HomeTitle = styled.h1`
font-size: 48px;
font-weight: bold;
margin-bottom: 0.5rem; 
width: 70%;
`;

export const Caption = styled.p`
font-size: 25px;
margin-bottom: 0.5rem; 
width: 70%;
letter-spacing: 1.5px;
line-height: 1.5;
`;

export const PlatformButton = styled.button`
  background-color: #fff; 
  color: #606060; 
  padding: 0.5rem 1rem;
  border: 2px solid #5187F0; 
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 0.5rem; 
`;

export const HandWaveEmoji = styled.span`
  margin-left: 0.5rem;
  font-size: 20px;
`;

export const Menu = styled.div`
    background-color: #5187F0; /* Azul */
    color: white;
    height: 700px; 
`;

export const YellowButton = styled.button`
    background-color: #FFCA1D; /* Amarelo */
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #000; /* Preto */
    border: none;
    cursor: pointer;
    font-size: 16px;
    height: 45px;
    margin-top: 1rem;
`;

export const BenefitsSection = styled.div`
    width: 100%;
    margin-left: 7rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 18px;
    color: #515151;
`;

export const FirstSection = styled.div`
    width: 50%;
    display:flex;
    margin-bottom: 2rem;
`;

export const Benefit = styled.img`
margin-top: 7rem;
margin-left: 1rem;
`;

export const CompanyBenefits = styled.img`
    margin-top: 10rem;
    margin-left: 1rem;
`;


export const RegisterSection = styled.img`
margin-top: 10rem;
margin-left: 1rem;
`;
