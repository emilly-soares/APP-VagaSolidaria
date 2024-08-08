import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNavbar = styled.nav`
    width: 100%;
    background-color: #5187F0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 2rem 0.5rem 0.5rem 2rem;
    color: #FFFFFF;
`;

export const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarItem = styled(Link)`
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
    text-decoration: none;
    margin: 0 25px;
    &:hover {
        text-decoration: underline;
    }
`;

export const LoginLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
    color: #FFFFFF;
    margin-right: 20px;
    &:hover {
        text-decoration: underline;
    }
`;

export const NavbarButtons = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem; 
    z-index: 2; 
`;

export const NavbarButton = styled(Link)`
    background-color: #FFCA1D;
    color: #2C2C2C;
    font-weight: bold;
    padding: 10px 25px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-right: 1rem; 
    &:hover {
        background-color: #FFD43B;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: 1px solid;
    border-color: #FFFFFF;
    padding: 0.5rem;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
    color: #FFFFFF;
    margin-right: 20px;
    &:hover {
        text-decoration: underline;
    }
`;

export const FlexItem = styled.div`
    flex: 1;
    z-index: 2;
`;

export const Logo = styled.img`
    width: 150px;
    height: auto;
`;

export const imgCircle = styled.img`
    padding-top: 3rem;
    width: 600px;
    height: auto;
    pointer-events: none;
`;

export const RightSection = styled.div`
    width: 50%;

`;

export const PlatformTitle = styled(Link)`
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #FFFFFF;
    position: absolute;
    left: 12%;
    transform: translateX(-50%);
`;


export const Submenu = styled.div`
    z-index: 2; 
    background-color: #FFFFFF;
    position: absolute;
    right: 10px;
    top: 80px;
    border-radius: 5px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    z-index: 1000;
`;

export const SubmenuLink = styled(Link)`
    display: block;
    padding: 10px 10px;
    color: #333;
    font-size: 16px;
    text-decoration: none;
    z-index: 2;
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const ContainerMenu = styled.nav`
    width: 100%;
    background-color: #5187F0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    color: #FFFFFF;
    padding: 0rem 0.5rem 4rem 2.5rem;
`;

export const LeftSection = styled.div`
    width: 50%;
    height: 120px;
    background-color: #5187F0;
`;

export const Title = styled.h1`
    font-size: 42px;
    font-weight: bold;
    width: 70%;
    padding-left: 2rem;
    color: #FFFFFF;
`;

export const SubmenuButton = styled.button`
    display: block;
   z-index: 2; 
    width: 100%;  
    padding: 10px 20px;
    color: #333;
    font-size: 16px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;
