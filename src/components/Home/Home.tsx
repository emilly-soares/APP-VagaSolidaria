import React from 'react';
import SocialSection from '../SocialSection';
import Footer from '../Footer';
import { Container, Navbar, LoginLink, ArrowDown, NavbarMenu, NavbarItem, NavbarButtons, NavbarButton, BlueBackground, YellowButton, BenefitsSection, Benefit, CompanyBenefits, RegisterSection } from './style';

const Home: React.FC = () => {
    return (
        <Container>

            <Navbar>
                <NavbarMenu>
                    <NavbarItem to="/opportunities">Oportunidades <ArrowDown>v</ArrowDown></NavbarItem>
                    <NavbarItem to="/evaluations">Avaliações <ArrowDown>v</ArrowDown></NavbarItem>
                    <NavbarItem to="/employers">Empresas</NavbarItem>
                    <NavbarButtons>
                        <LoginLink to="/login">Login</LoginLink>
                        <NavbarButton to="/register">Cadastre-se</NavbarButton>
                    </NavbarButtons>
                </NavbarMenu>

            </Navbar>

            <BlueBackground>
                <div className="reviews">
                    {/* Avaliações */}
                </div>

                <YellowButton>Vagas Disponíveis</YellowButton>
                <p>Você encontrará oportunidades para impactar positivamente a comunidade!</p>
            </BlueBackground>
            <BenefitsSection>
                <h2>Conheça os Benefícios</h2>
                <div className="benefits mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Benefit>
                        <p>Impacto Positivo - Impacto nas comunidades atendidas, melhorando a vida das pessoas e contribuindo para o bem-estar social ambiental.</p>
                    </Benefit>
                    <Benefit>
                        <p>Consciência Social e Empatia - Aumenta a conscientização sobre as necessidades da comunidade e desenvolve a empatia ao vivenciar as realidades de outras pessoas ou animais.</p>
                    </Benefit>
                    <Benefit>
                        <p>Networking e relacionamentos - Permite conhecer pessoas com interesses semelhantes, criando oportunidades para networking e conexões valiosas.</p>
                    </Benefit>
                </div>
            </BenefitsSection>
            <CompanyBenefits>
                <img src="caminho-para-a-imagem" alt="Imagem" />
                <div className="text">
                    <h2>Benefícios para as Empresas</h2>
                    <h3>Responsabilidade Social Corporativa</h3>
                    <p>
                        Mostre ao mundo o poder da sua responsabilidade social corporativa, inspire outras empresas e marquem a diferença coletivamente. Juntos, podemos criar um futuro brilhante, onde a solidariedade e a compaixão são os pilares que sustentam uma sociedade mais inclusiva e sustentável. Faça parte dessa jornada de mudança, pois cada pequeno ato de bondade contribui para um mundo mais humano e solidário.
                    </p>
                </div>
            </CompanyBenefits>
            <RegisterSection>
                <div className="text">
                    <h2>Cadastre-se em Minutos</h2>
                    <span className="icon clock">Icone</span>
                    <p>
                        Bem-vindo à nossa plataforma de trabalho voluntário em Nova Andradina - MS! Aqui, você pode encontrar oportunidades significativas para fazer a diferença na comunidade e contribuir para um futuro mais solidário. Nossa missão é conectar pessoas comprometidas com causas sociais a vagas de trabalho voluntário que se alinhem aos seus interesses e habilidades. Seja você um estudante, profissional ou aposentado, todos são bem-vindos para participar desse movimento de transformação.
                    </p>
                </div>
                <img src="caminho-para-a-imagem" alt="Imagem" />
            </RegisterSection>
            <SocialSection />
            <Footer />
        </Container>
    );
};

export default Home;