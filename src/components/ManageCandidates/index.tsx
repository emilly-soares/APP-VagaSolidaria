import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import * as S from './style';

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

                            return { ...candidateData, user: userData };
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
                            
                        </S.CandidateCard>


                    ))}
                </S.CandidatesList>
            )}
        </S.Container>
    );
};

export default CandidatesList;
