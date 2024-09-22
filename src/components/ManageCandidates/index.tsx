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
    conclusion?: string;
    candidateVacancyId: number;
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
    company_id: number;
}

const CandidatesList: React.FC = () => {
    const { vacancyId } = useParams<{ vacancyId: string }>();
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [vacancyTitle, setVacancyTitle] = useState<string>('');
    const [workload, setWorkload] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');

    useEffect(() => {
        const loadVacancyDetails = async () => {
            try {
                const response = await api.get(`/vacancy/${vacancyId}`);
                const vacancyData: Vacancy = response.data;
                setVacancyTitle(vacancyData.jobTitle);
                setWorkload(vacancyData.workload);

                const companyResponse = await api.get(`/find/company/${vacancyData.company_id}`);
                const companyData = companyResponse.data;
                setCompanyName(companyData.fantasyName);
            } catch {
                setErrorMessage('Erro ao carregar detalhes da vaga ou empresa.');
            }
        };

        const loadCandidates = async () => {
            try {
                const response = await api.get(`/candidates/vacancy/${vacancyId}`);
                const candidatesData = response.data;

                const candidatesWithUserDetails = await Promise.all(
                    candidatesData.map(async (candidateVacancy: any) => {
                        try {
                            const userResponse = await api.get(`/candidate/userDetails/${candidateVacancy.candidateId}`);
                            const userData = userResponse.data;

                            const candidateResponse = await api.get(`/user-candidateFind/${userData.id}`);
                            const candidateData = candidateResponse.data;

                            return { ...candidateData, user: userData, conclusion: candidateVacancy.conclusion, availability: candidateVacancy.availability, candidateVacancyId: candidateVacancy.id };
                        } catch {
                            return candidateVacancy;
                        }
                    })
                );

                setCandidates(candidatesWithUserDetails);
            } catch {
                setErrorMessage('Erro ao carregar candidatos.');
            } finally {
                setLoading(false);
            }
        };

        loadVacancyDetails();
        loadCandidates();
    }, [vacancyId]);

    const generateCertificate = async (candidate: Candidate) => {
        const conclusionDate = candidate.conclusion ? formatDate(candidate.conclusion) : formatDate(new Date().toISOString());

        if (!candidate.conclusion) {
            try {
                await api.put(`/candidateVacancy/${candidate.candidateVacancyId}`, {
                    conclusion: new Date().toISOString(),
                });
            } catch {
                console.error('Erro ao atualizar a conclusão.');
            }
        }

        const doc = new jsPDF('l', 'mm', 'a4');
        const img = new Image();
        img.src = certificado;

        img.onload = () => {
            doc.setFillColor(247, 247, 247);
            doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

            doc.addImage(img, 'PNG', 200, 10, 70, 50);

            doc.setFontSize(28);
            doc.setFont('helvetica', 'bold');
            doc.text('CERTIFICADO DE CONCLUSÃO', doc.internal.pageSize.width / 2, 68, { align: 'center' });

            doc.setFontSize(22);
            doc.setFont('helvetica', 'normal');
            doc.text(`Certificamos que ${candidate.user?.name}`, doc.internal.pageSize.width / 2, 90, { align: 'center' });
            doc.text(`CPF: ${candidate.CPF}`, doc.internal.pageSize.width / 2, 100, { align: 'center' });

            doc.setFontSize(20);
            doc.text(`Participou ativamente como voluntário na função de ${vacancyTitle}`, doc.internal.pageSize.width / 2, 115, { align: 'center' });
            doc.text(`Com uma carga horária total de ${workload}`, doc.internal.pageSize.width / 2, 125, { align: 'center' });

            doc.setFontSize(16);
            doc.text('_____________________________________', doc.internal.pageSize.width / 2, 150, { align: 'center' });

            doc.text(companyName, doc.internal.pageSize.width / 2, 165, { align: 'center' });
            doc.text('Nova Andradina/MS', doc.internal.pageSize.width / 2, 175, { align: 'center' });

            doc.setFontSize(14);
            doc.text(`Emitido em ${conclusionDate}`, doc.internal.pageSize.width / 3, 200);

            doc.save(`certificado_${candidate.user?.name}.pdf`);
        };

        img.onerror = () => {
            console.error('Erro ao carregar a imagem do certificado.');
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
                                    {candidate.phone}
                                </S.WhatsappLink>
                            </S.CandidateInfo>
                            <S.GenerateCertificateButton onClick={() => generateCertificate(candidate)}>
                                {candidate.conclusion ? 'Gerar Certificado Novamente' : 'Concluir e gerar certificado'}
                            </S.GenerateCertificateButton>
                        </S.CandidateCard>
                    ))}
                </S.CandidatesList>
            )}
        </S.Container>
    );
};

export default CandidatesList;
