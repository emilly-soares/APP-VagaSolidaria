import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { logout, isAuthenticated, getUserId } from '../../services/authconfig';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import circle from "../../assets/vacancyCircle.png";
import * as S from './style';

export const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const navigate = useNavigate();

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
        navigate('/'); 
    };

    return (
        <S.ContainerNavbar>
            <S.Logo src={logoImg} alt="Logo VagaSolidária" />
            <S.PlatformTitle to="/">VagaSolidária</S.PlatformTitle>
            <S.NavbarMenu>
                <S.FlexItem>
                    <S.NavbarItem to="/vacancies">Oportunidades</S.NavbarItem>
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
                                {userRole === 'admin' && (
                                    <>
                                        <S.SubmenuLink to="/manageUsers">Gerenciar Usuários</S.SubmenuLink>
                                        <S.SubmenuLink to="/manageCompanies">Gerenciar Empresas</S.SubmenuLink>
                                    </>
                                )}
                                {userRole === 'business' && (
                                    <>
                                        <S.SubmenuLink to="/manageVacancies">Gerenciar Vagas</S.SubmenuLink>
                                        <S.SubmenuLink to="/vacanciesList">Gerenciar Candidatos</S.SubmenuLink>
                                        <S.SubmenuLink to="/manageUser/Company">Meu Perfil</S.SubmenuLink>
                                    </>
                                )}
                                {userRole === 'candidate' && (
                                    <S.SubmenuLink to="/manageUser/Candidate">Meu Perfil</S.SubmenuLink>
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

export const Menu: React.FC = () => {
    return (
        <S.ContainerMenu>
            <S.LeftSection>
                <S.Title>Unindo Voluntários e Oportunidades Solidárias</S.Title>
            </S.LeftSection>

            <S.RightSection>
                <S.imgCircle src={circle} alt="encontre uma vaga" />
            </S.RightSection>
        </S.ContainerMenu>
        
    );
};
