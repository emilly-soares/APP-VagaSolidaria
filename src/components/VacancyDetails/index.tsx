import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import * as S from './style';
import report from '../../assets/report.png';
import whatsapp from '../../assets/whatsapp.png';
import map from '../../assets/map.svg';
import { getUserId } from '../../services/authconfig';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

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

    const userId = Number(getUserId());
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [vacancy, setVacancy] = useState<Vacancy | null>(null);
    const [company, setCompany] = useState<Company | null>(null);
    const [availability, setAvailability] = useState<string>('');
    const [candidateId, setCandidateId] = useState<number | null>(null);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchCandidateId = async () => {
            try {
                const response = await api.get(`/user-candidateFind/${userId}`);
                const candidateId = response.data.id;
                setCandidateId(candidateId);
                if (!candidateId) {
                    setIsModalOpen(true);
                }
            } catch (error) {
                console.error('Erro ao carregar ID do candidato:', error);
                setIsModalOpen(true);
            }
        };

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

        fetchCandidateId();
        fetchVacancyDetails();

    }, [id, userId, navigate]);

    const handleApply = async () => {
        try {
            if (vacancy && candidateId !== null) {
                const response = await api.post('/apply', {
                    vacancyId: vacancy.id,
                    candidateId,
                    availability,
                });

                if (response.status === 201) {
                    console.log('Candidatura enviada com sucesso!', response.data);
                    toast.success('Candidatura enviada com sucesso!');
                } else if (response.status === 400 && response.data.message) {
                    console.log('Candidatura recusada:', response.data.message);
                    toast.error(response.data.message);
                } else {
                    toast.error('Erro ao enviar candidatura.');
                }
            } else {
                toast.error('Erro ao enviar candidatura.');
            }
        } catch (err) {
            const error = err as AxiosError;
            console.error('Erro ao enviar candidatura:', error);

            if (error.response && error.response.data && (error.response.data as { message: string }).message) {
                toast.error((error.response.data as { message: string }).message);
            } else {
                toast.error('Erro ao enviar candidatura.');
            }
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/manageUser/Candidate');
    };

    const address = company ? `${company.street} ${company.numberStreet}, ${company.neighborhood}` : '';

    return (
        <>
            <S.Container>
                <S.SectionTitle>
                    <span>Sobre a </span>
                    <span className="highlight">Oportunidade</span>
                </S.SectionTitle>

                <S.DetailsContainer>
                    <S.DetailsLeft>
                        <S.JobTitleContainer>
                            <S.JobTitle>{vacancy?.jobTitle ?? 'Vaga não encontrada'}</S.JobTitle>
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

                        {company && (
                            <>
                                <S.CompanyInfo>
                                    <S.CompanyAddress><S.MapIcon src={map} alt="" />{address}, Nova Andradina - MS, 79750-000</S.CompanyAddress>
                                    <S.CompanyName>{company.fantasyName}</S.CompanyName>
                                    {company.logo && <S.CompanyLogo src={`http://localhost:3003/uploads/${company.logo}`} alt={`${company.fantasyName} logo`} />}
                                    <S.CompanyPhone href={`https://wa.me/${company.phone.replace(/\D/g, '')}`} target="_blank">
                                        <S.WhatsappIcon src={whatsapp} alt="WhatsApp" />
                                        {company.phone}
                                    </S.CompanyPhone>
                                </S.CompanyInfo>
                            </>
                        )}
                    </S.DetailsRight>
                </S.DetailsContainer>

                <div className="report">
                    <S.Report src={report}></S.Report>
                </div>

                <S.FirstSection>
                    <S.Caption>Você encontrará oportunidades para impactar positivamente a comunidade!</S.Caption>
                    <S.RegisterButton to='/register'>Cadastre-se</S.RegisterButton>
                </S.FirstSection>
            </S.Container>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Cadastro Necessário"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        maxWidth: '500px',
                        textAlign: 'center'
                    },
                }}
            >
                <h2>Cadastro Necessário</h2>
                <p>Para continuar, você precisa se cadastrar como candidato.</p>
                <S.ModalButton onClick={handleCloseModal}>Cadastrar-se</S.ModalButton>
            </Modal>
        </>
    );
};

export default VacancyDetails;
