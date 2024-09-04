import React from 'react';
import SocialSection from '../SocialSection';
import Footer from '../Footer';
import * as S from './style';
import line from '../../assets/line.svg';
import comment from '../../assets/comment.png';
import benefit from '../../assets/benefit.svg';
import center from '../../assets/center.svg';
import registerSection from '../../assets/registerSection.svg';
import whatsapp from '../../assets/whatsapp.png';
import { Navbar } from '../Menu';

const Home: React.FC = () => {

    return (
        <>

            <Navbar />

            <S.Container>

                <S.Menu>

                    <S.PlatformSection>

                        <S.PlatformButton>
                            Conheça a Plataforma <S.HandWaveEmoji role="img" aria-label="hand-wave">👋</S.HandWaveEmoji>
                        </S.PlatformButton>

                        <S.PlatformFlex>

                            <S.LeftSection>
                                <S.HomeTitle>Unindo Voluntários e Oportunidades Solidárias</S.HomeTitle>
                                <S.Caption>VagaSolidária é uma plataforma online que reúne voluntários e organizações para compartilhar oportunidades de trabalho voluntário em projetos sociais</S.Caption>
                                <S.YellowButton to="/Vagas">Vagas Disponíveis</S.YellowButton>
                            </S.LeftSection>

                            <S.ReviewsSection>
                                <S.Comment src={comment} alt="comentários" ></S.Comment>
                            </S.ReviewsSection>

                        </S.PlatformFlex>

                    </S.PlatformSection>

                </S.Menu>

                <S.PopupContainer>
                    <S.WhatsAppLink href="https://wa.me/67999757009" target="_blank" rel="noopener noreferrer">
                        <S.WhatsAppIcon src={whatsapp} alt="WhatsApp" />
                        Fale Conosco
                    </S.WhatsAppLink>
                </S.PopupContainer>

                <S.BenefitsSection>

                    <S.Line src={line} alt="linha"></S.Line>

                    <S.FirstSection>
                        <S.Caption>Você encontrará oportunidades para impactar positivamente a comunidade!</S.Caption>
                        <S.RegisterButton to='/register'>Cadastre-se</S.RegisterButton>
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

        </>
    );
};

export default Home;