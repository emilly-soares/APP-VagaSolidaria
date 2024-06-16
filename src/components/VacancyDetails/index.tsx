import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Navbar from '../Menu';
import Footer from '../Footer';
import * as S from './style';
import clock from '../../assets/clock.svg';
import report from '../../assets/report.png';

export interface Vacancy {
    id: number;
    status: boolean;
    description: string;
    jobTitle: string;
    company_id: number;
    workload: string;
    responsibilities: string;
}

export interface Company {
    id: number;
    cnpj: string;
    phone: string;
    ie: string;
    corporateReason: string;
    fantasyName: string;
    street: string;
    numberStreet: string;
    neighborhood: string;
    logo: string;
}

const VacancyDetails: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    const [vacancy, setVacancy] = useState<Vacancy | null>(null);
    const [company, setCompany] = useState<Company | null>(null);

    const [availability, setAvailability] = useState<string>('');

    useEffect(() => {
        const fetchVacancyDetails = async () => {
            try {
                const response = await api.get(`/vacancy/${id}`);
                setVacancy(response.data);
                const companyResponse = await api.get(`/find/company/${response.data.company_id}`);
                setCompany(companyResponse.data);
            } catch (error) {
                console.error('Erro ao carregar detalhes da vaga:', error);
            }
        };

        fetchVacancyDetails();
    }, [id]);

    const handleApply = () => {
        console.log('Candidatar-se com disponibilidade:', availability);
    };

    const address = company ? `${company.street} ${company.numberStreet}, ${company.neighborhood}` : '';
    console.log(address);

    return (
        <>
            <Navbar />
            <S.Container>

                <S.SectionTitle>
                    <span>Sobre a </span>
                    <span className="highlight">Oportunidade</span>
                </S.SectionTitle>

                <S.DetailsContainer>

                    <S.DetailsLeft>

                        <S.JobTitleContainer>
                            <S.JobTitle>{vacancy?.jobTitle}</S.JobTitle>
                            <S.JobDetails><S.Clock src={clock} style={{ marginRight: '10px', color: "#2B3377" }} />Presencial: {vacancy?.workload}</S.JobDetails>
                        </S.JobTitleContainer>

                        <S.Text>
                            Ao se tornar um {vacancy?.jobTitle}, você terá a oportunidade de contribuir para momentos inesquecíveis e experiências enriquecedoras para pessoas de todas as idades.
                        </S.Text>

                        <S.Text>
                            <strong>Sobre a Vaga:</strong> {vacancy?.description}
                        </S.Text>

                        <S.Text>
                            <strong>Responsabilidades:</strong> {vacancy?.responsibilities}
                        </S.Text>

                        <S.Text>
                            <strong>Benefícios:</strong>
                            <ul>
                                <li>Desenvolvimento de habilidades de liderança, comunicação e resolução de problemas.</li>
                                <li>Oportunidade de fazer parte de uma comunidade engajada e promover o bem-estar.</li>
                                <li>Satisfação pessoal ao ver o impacto positivo que suas atividades têm nas vidas dos participantes.</li>
                                <li>Certificado de voluntariado reconhecendo suas contribuições.</li>
                            </ul>
                            Se você está buscando uma maneira divertida e significativa de dedicar seu tempo, a vaga de {vacancy?.jobTitle} pode ser a escolha perfeita para você!
                        </S.Text>

                        <S.Text>
                            <strong>Como se Candidatar:</strong> Se você está animado para se juntar a nós como um {vacancy?.jobTitle}, descreva sua disponibilidade de horário, com o máximo de detalhes e clique no botão "Candidatar-se" abaixo.
                            Ficamos ansiosos para receber sua inscrição e explorar essa jornada juntos!
                        </S.Text>

                        <S.TextInput
                            type="text"
                            placeholder="Descreva sua disponibilidade de horário"
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                        />

                        <S.Button onClick={handleApply}>Candidatar-se</S.Button>

                    </S.DetailsLeft>

                    <S.DetailsRight>
                        <iframe
                            width="80%"
                            height="500"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBvynskStAY8dOhT8gw0DIaUDSm0fGgcPw&q=${encodeURIComponent(address)}`}
                        />

                    </S.DetailsRight>

                </S.DetailsContainer>

                <div className="report">
                    <S.Report src={report}></S.Report>
                </div>
            </S.Container>

            <Footer />

        </>
    );
};

export default VacancyDetails;
