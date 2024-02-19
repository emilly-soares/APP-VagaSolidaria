import React from 'react';
import SocialSection from '../SocialSection';
import Footer from '../Footer';
import { Container, Navbar, LoginLink, ArrowDown, NavbarMenu, NavbarItem, NavbarButtons, NavbarButton, Menu, HomeTitle, Caption, YellowButton, Comment, BenefitsSection, FirstSection, Benefit, CompanyBenefits, RegisterSection, FlexItem, Logo, PlatformSection, PlatformTitle, PlatformButton, HandWaveEmoji, Line } from './style';
import logoImg from '../../assets/logo.svg';
import line from '../../assets/line.svg';
import comment from '../../assets/comment.png';
import benefit from '../../assets/benefit.svg';
import center from '../../assets/center.svg';
import registerSection from '../../assets/registerSection.svg'

const Home: React.FC = () => {
    return (
        <Container>

            <Menu>
                <Navbar>
                    <NavbarMenu>
                        <FlexItem>
                            <NavbarItem to="/opportunities">Oportunidades <ArrowDown>-</ArrowDown></NavbarItem>
                        </FlexItem>
                        <FlexItem>
                            <NavbarItem to="/evaluations">Avaliações <ArrowDown>-</ArrowDown></NavbarItem>
                        </FlexItem>
                        <FlexItem>
                            <NavbarItem to="/employers">Empresas</NavbarItem>
                        </FlexItem>
                    </NavbarMenu>
                    <NavbarButtons>
                        <LoginLink to="/login">Login</LoginLink>
                        <NavbarButton to="/register">Cadastre-se</NavbarButton>
                    </NavbarButtons>
                </Navbar>

                <div style={{ position: 'relative' }}>
                    <Logo src={logoImg} alt="Logo VagaSolidária" />
                    <PlatformTitle>VagaSolidária</PlatformTitle>
                </div>

                <PlatformSection>

                    <div>
                        <PlatformButton>
                            Conheça a Plataforma <HandWaveEmoji role="img" aria-label="hand-wave">👋</HandWaveEmoji>
                        </PlatformButton>
                    </div>
                    <div>
                        <HomeTitle>Unindo Voluntários e Oportunidades Solidárias</HomeTitle>
                        <Caption>VagaSolidária é uma plataforma online que reúne voluntários e organizações para compartilhar oportunidades de trabalho voluntário em projetos sociais</Caption>
                        <YellowButton>Vagas Disponíveis</YellowButton>
                    </div>
                    <div className="reviews">
                        <Comment src={comment} alt="comentários" ></Comment>
                    </div>
                </PlatformSection>

            </Menu>



            <BenefitsSection>
                <Line src={line} alt="linha"></Line>
                <FirstSection>
                    <Caption>Você encontrará oportunidades para impactar positivamente a comunidade!</Caption>
                    <YellowButton>Cadastre-se</YellowButton>
                </FirstSection>

                <div className="benefits">
                  <Benefit src={benefit}></Benefit>
                </div>
            </BenefitsSection>

                <CompanyBenefits src={center} alt="Benefícios para empresas" ></CompanyBenefits>
    
            <RegisterSection src={registerSection}></RegisterSection>
  
            <SocialSection />
            <Footer />
        </Container>
    );
};

export default Home;