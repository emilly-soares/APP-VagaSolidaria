import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'; 
import * as S from './style';
import certificado from '../../assets/certificado.png'; 

const jsPDF = require('jspdf').jsPDF;

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const getCurrentDate = (): string => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

interface Candidate {
    id: number;
    dateBirth: string;
    CPF: string;
    phone: string;
    street: string;
    numberStreet: string;
    neighborhood: string;
    candidateId: number;
    availability: string;
    user?: User;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Vacancy {
    id: number;
    jobTitle: string;
    workload: string;
}

const CandidatesList: React.FC = () => {
    const { vacancyId } = useParams<{ vacancyId: string }>();
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [vacancyTitle, setVacancyTitle] = useState<string>('');
    const [workload, setWorkload] = useState<string>('');

    useEffect(() => {
        const loadVacancyDetails = async () => {
            try {
                const response = await api.get(`/vacancy/${vacancyId}`);
                const vacancyData: Vacancy = response.data;
                setVacancyTitle(vacancyData.jobTitle);
                setWorkload(vacancyData.workload);
            } catch (error) {
                console.error('Erro ao carregar detalhes da vaga:', error);
                setErrorMessage('Erro ao carregar detalhes da vaga.');
            }
        };

        const loadCandidates = async () => {
            try {
                const response = await api.get(`/candidates/vacancy/${vacancyId}`);
                const candidatesData = response.data;

                const candidatesWithUserDetails = await Promise.all(
                    candidatesData.map(async (candidate: Candidate) => {
                        try {
                            const userResponse = await api.get(`/candidate/userDetails/${candidate.candidateId}`);
                            const userData = userResponse.data;

                            const candidateResponse = await api.get(`/user-candidateFind/${userData.id}`);
                            const candidateData = candidateResponse.data;

                            console.log('Dados do Candidato:', candidateData);

                            return { ...candidateData, user: userData, availability: candidate.availability };
                        } catch (error) {
                            console.error(`Erro ao buscar usuário para candidato ${candidate.candidateId}:`, error);
                            return candidate;
                        }
                    })
                );

                setCandidates(candidatesWithUserDetails);
            } catch (error) {
                console.error('Erro ao carregar candidatos:', error);
                setErrorMessage('Erro ao carregar candidatos.');
            } finally {
                setLoading(false);
            }
        };

        loadVacancyDetails();
        loadCandidates();
    }, [vacancyId]);

    const generateCertificate = (candidate: Candidate) => {
        const doc = new jsPDF('l', 'mm', 'a4');
        
        const img = new Image();
        img.src = certificado; 
        img.onload = () => {
            doc.setFillColor(247, 247, 247); 
            doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

            doc.addImage(img, 'PNG', 160, 10, 50, 50); 

            doc.setFontSize(28);
            doc.text('Certificado de Conclusão de Trabalho Voluntário', 20, 80);
            doc.setFontSize(22);
            doc.text(`Certificamos que ${candidate.user?.name}`, 20, 100);
            doc.text(`CPF: ${candidate.CPF}`, 20, 110);
            doc.text(`Participou ativamente como ${vacancyTitle}`, 20, 120);
            doc.text(`Com carga horária de ${workload}`, 20, 130);
            doc.text(`Em ${getCurrentDate()}`, 20, 140);
            doc.text(`Nova Andradina/MS`, 20, 150);

            doc.save(`certificado_${candidate.user?.name}.pdf`);
        };

        img.onerror = () => {
            console.error('Erro ao carregar a imagem.');
        };
    };

    return (
        <S.Container>
            <S.VacancySection>
                <S.VacancyTitle>
                    Candidatos para {vacancyTitle} - {workload ? `${workload}` : 'Carga horária não disponível'}
                </S.VacancyTitle>
            </S.VacancySection>
            {loading ? (
                <S.Message>Carregando candidatos...</S.Message>
            ) : errorMessage ? (
                <S.Message>{errorMessage}</S.Message>
            ) : candidates.length === 0 ? (
                <S.Message>Nenhum candidato para esta vaga.</S.Message>
            ) : (
                <S.CandidatesList>
                    {candidates.map((candidate, index) => (
                        <S.CandidateCard key={`${candidate.id}-${index}`}>
                            <S.CandidateName>{candidate.user?.name || 'Nome não disponível'}</S.CandidateName>
                            <S.CandidateInfo>
                                <strong>Email:</strong> {candidate.user?.email || 'Email não disponível'}
                            </S.CandidateInfo>
                            <S.CandidateInfo>
                                <strong>Data de Nascimento:</strong> {formatDate(candidate.dateBirth)}
                            </S.CandidateInfo>
                            <S.CandidateInfo>
                                <strong>Telefone:</strong> {candidate.phone}
                            </S.CandidateInfo>
                            <S.CandidateInfo>
                                <strong>Endereço:</strong> {candidate.street}, {candidate.numberStreet} -{' '}
                                {candidate.neighborhood}
                            </S.CandidateInfo>
                            <S.CandidateInfo>
                                <strong>Disponibilidade:</strong> {candidate.availability || 'Não informado'}
                            </S.CandidateInfo>
                            <S.CandidateInfo>
                                <strong>WhatsApp:</strong>{' '}
                                <S.WhatsappLink
                                    href={`https://wa.me/${candidate.phone.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Enviar mensagem
                                </S.WhatsappLink>
                            </S.CandidateInfo>
                            <S.GenerateCertificateButton
                                onClick={() => generateCertificate(candidate)}
                            >
                                Concluir e Gerar Certificado
                            </S.GenerateCertificateButton>
                        </S.CandidateCard>
                    ))}
                </S.CandidatesList>
            )}
        </S.Container>
    );
};

export default CandidatesList;
