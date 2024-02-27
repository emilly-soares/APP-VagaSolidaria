import React, { useState, useEffect } from 'react';
import SocialSection from '../SocialSection';
import Footer from '../Footer';
import * as S from './style';
import logoImg from '../../assets/logo.svg';
import line from '../../assets/line.svg';
import comment from '../../assets/comment.png';
import benefit from '../../assets/benefit.svg';
import center from '../../assets/center.svg';
import registerSection from '../../assets/registerSection.svg'
import { useNavigate } from 'react-router-dom';
import { logout, isAuthenticated, getUser } from '../../services/authconfig';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const checkAuthentication = async () => {
            const authenticated = await isAuthenticated();
            if (authenticated) {
                setIsLoggedIn(true);
                const user = await getUser();
                setUserName(user.name);
            }
        };
        checkAuthentication();
    }, []);

    const handleLoginClick = () => {
        if (isLoggedIn) {
            handleLogout();
        } else {
            navigate('/login');
        }
    };

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        setUserName('');
    };

    return (
        <S.Container>

            <S.Menu>

                <S.Navbar>
                    <S.NavbarMenu>
                        <S.FlexItem>
                            <S.NavbarItem to="/opportunities">Oportunidades <S.ArrowDown>-</S.ArrowDown></S.NavbarItem>
                        </S.FlexItem>
                        <S.FlexItem>
                            <S.NavbarItem to="/evaluations">Avaliações <S.ArrowDown>-</S.ArrowDown></S.NavbarItem>
                        </S.FlexItem>
                        <S.FlexItem>
                            <S.NavbarItem to="/employers">Empresas</S.NavbarItem>
                        </S.FlexItem>
                    </S.NavbarMenu>
                    <S.NavbarButtons>
                        {isLoggedIn ? (
                            <>
                                <button onClick={handleLogout}>Sair</button>
                                <S.NavbarButton to="/manageUser">Alterar Usuário</S.NavbarButton>
                            </>
                        ) : (
                            <>
                                <S.LoginLink to="/login">Login</S.LoginLink>
                                <S.NavbarButton to="/register">Cadastre-se</S.NavbarButton>
                            </>
                        )}
                    </S.NavbarButtons>
                </S.Navbar>

                <div style={{ position: 'relative' }}>
                    <S.Logo src={logoImg} alt="Logo VagaSolidária" />
                    <S.PlatformTitle>VagaSolidária</S.PlatformTitle>
                </div>

                <S.PlatformSection>

                    <div>
                        <S.PlatformButton>
                            Conheça a Plataforma <S.HandWaveEmoji role="img" aria-label="hand-wave">👋</S.HandWaveEmoji>
                        </S.PlatformButton>
                    </div>
                    <div>
                        <S.HomeTitle>Unindo Voluntários e Oportunidades Solidárias</S.HomeTitle>
                        <S.Caption>VagaSolidária é uma plataforma online que reúne voluntários e organizações para compartilhar oportunidades de trabalho voluntário em projetos sociais</S.Caption>
                        <S.YellowButton to="/register">Vagas Disponíveis</S.YellowButton>
                    </div>
                    <div className="reviews">
                        <S.Comment src={comment} alt="comentários" ></S.Comment>
                    </div>
                </S.PlatformSection>

            </S.Menu>

            <S.BenefitsSection>
                <S.Line src={line} alt="linha"></S.Line>
                <S.FirstSection>
                    <S.Caption>Você encontrará oportunidades para impactar positivamente a comunidade!</S.Caption>
                    <S.YellowButton to='/register'>Cadastre-se</S.YellowButton>
                </S.FirstSection>
                <div className="benefits">
                    <S.Benefit src={benefit}></S.Benefit>
                </div>
            </S.BenefitsSection>

            <S.CompanyBenefits src={center} alt="Benefícios para empresas" ></S.CompanyBenefits>

            <S.RegisterSection src={registerSection}></S.RegisterSection>

            <SocialSection />
            <Footer />
        </S.Container>
    );
};

export default Home;