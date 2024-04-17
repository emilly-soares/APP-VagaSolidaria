import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { logout, isAuthenticated, getUserId } from '../../services/authconfig';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

export const ContainerNavbar = styled.nav`
    width: 100%;
    background-color: #5187F0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding-top: 1rem;
    padding-bottom: 2rem;
    color: #FFFFFF;
`;


export const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    display: flex;
`;

export const NavbarItem = styled(Link)`
    font-weight: bold;
    font-size: 18px;
    margin-right: 20px; 
    position: relative;
    text-decoration: none;
    margin: 0 25px;
    color: #FFFFFF;
    &:hover {
        text-decoration: underline;
`;

export const NavbarButtons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem; 
`;

export const LoginLink = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
    margin-right: 1rem; 
    color: #FFFFFF;
    &:hover {
        text-decoration: underline;
`;

export const NavbarButton = styled(Link)`
    color: #2C2C2C;
    text-decoration: none;
    background-color: #FFCA1D;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 1rem;
    display: flex;
    text-align: center; 
    &:hover {
        background-color: #FFD43B;
    }
`;

export const Button = styled.button`
    font-weight: bold;
    color: #FFFFFF;
    background-color: transparent; 
    border: none; 
    width: 22%;
    margin-right: 1rem;
    font-size: inherit; 
    cursor: pointer; 
    &:hover {
    text-decoration: underline;
    `

export const FlexItem = styled.div`
    flex: 1;
`;

export const Logo = styled.img`
    width: 150px; 
    height: auto; 
    margin-bottom: 1.5rem;
`;

export const PlatformTitle = styled(Link)`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    margin-left: 7rem;
    text-decoration: none;
    color: #FFFFFF;
`;


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const checkAuthentication = async () => {
            const authenticated = await isAuthenticated();
            if (authenticated) {
                setIsLoggedIn(true);
                const userId = await getUserId();
                try {
                    const response = await api.get(`/user/${userId}`);
                    const user = response.data.name;
                    setUserName(user);
                } catch (error) {
                    console.error('Erro ao buscar o nome do usuário:', error);
                }
            }
        };

        checkAuthentication();
    }, []);


    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        setUserName('');
    };

    return (

        <ContainerNavbar>

            <Logo src={logoImg} alt="Logo VagaSolidária" />
            <PlatformTitle to="/">VagaSolidária</PlatformTitle>

            <NavbarMenu>

                <FlexItem>
                    <NavbarItem to="/opportunities">Oportunidades</NavbarItem>
                </FlexItem>

                <FlexItem>
                    <NavbarItem to="/evaluations">Avaliações</NavbarItem>
                </FlexItem>

                <FlexItem>
                    <NavbarItem to="/employers">Empresas</NavbarItem>
                </FlexItem>

            </NavbarMenu>

            <NavbarButtons>
                {isLoggedIn ? (
                    <>
                        <Button onClick={handleLogout}>Sair</Button>
                        <NavbarButton to="/manageUser">{userName}</NavbarButton>
                    </>
                ) : (
                    <>
                        <LoginLink to="/login">Login</LoginLink>
                        <NavbarButton to="/register">Cadastre-se</NavbarButton>
                    </>
                )}
            </NavbarButtons>

        </ContainerNavbar>
    );
};


export default Navbar;