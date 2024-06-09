import React, { useEffect, useState } from 'react';
import { logout, isAuthenticated, getUserId } from '../../services/authconfig';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import * as S from './style';

const Navbar: React.FC = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            const authenticated = await isAuthenticated();
            if (authenticated) {
                setIsLoggedIn(true);
                const userId = await getUserId();
                try {
                    const response = await api.get(`/user/${userId}`);
                    setUserName(response.data.name);
                    setUserRole(response.data.role);
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
        setUserRole('');
        setIsSubmenuOpen(false);
    };

    return (
        <S.ContainerNavbar>
            <S.Logo src={logoImg} alt="Logo VagaSolidária" />
            <S.PlatformTitle to="/">VagaSolidária</S.PlatformTitle>
            <S.NavbarMenu>
                <S.FlexItem>
                    <S.NavbarItem to="/opportunities">Oportunidades</S.NavbarItem>
                </S.FlexItem>
                <S.FlexItem>
                    <S.NavbarItem to="/evaluations">Avaliações</S.NavbarItem>
                </S.FlexItem>
                <S.FlexItem>
                    <S.NavbarItem to="/companies">Empresas</S.NavbarItem>
                </S.FlexItem>
            </S.NavbarMenu>
            <S.NavbarButtons>
                {isLoggedIn ? (
                    <>
                        <S.Button onClick={toggleSubmenu}>{userName}</S.Button>
                        {isSubmenuOpen && (
                            <S.Submenu>
                                {userRole === 'admin' ? (
                                    <S.SubmenuLink to="/manageCompanies">Gerenciar Empresas</S.SubmenuLink>
                                ) : (
                                    <S.SubmenuLink to="/profile">Meu Perfil</S.SubmenuLink>
                                )}
                                <S.SubmenuLink to="/resetPassword">Alterar Senha</S.SubmenuLink>
                                <S.SubmenuButton onClick={handleLogout}>Sair</S.SubmenuButton>
                            </S.Submenu>
                        )}
                    </>
                ) : (
                    <>
                        <S.LoginLink to="/login">Login</S.LoginLink>
                        <S.NavbarButton to="/register">Cadastre-se</S.NavbarButton>
                    </>
                )}
            </S.NavbarButtons>
        </S.ContainerNavbar>
    );
};

export default Navbar;
