import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../services/authconfig';

interface Vacancy {
    id: number;
    jobTitle: string;
    company_id: number;
}

const VacanciesList: React.FC = () => {
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const loadVacancies = async () => {
            try {
                const userId = Number(getUserId());
                if (isNaN(userId)) {
                    throw new Error('User ID is not a valid number');
                }

                const responseCompany = await api.get(`/company/${userId}`);
                const companyData = responseCompany.data;

                const responseVacancies = await api.get(`/vacancies/company/${companyData.id}`);
                const vacanciesData = responseVacancies.data;
                setVacancies(vacanciesData);

            } catch (error) {
                console.error('Erro ao carregar vagas:', error);
                setErrorMessage('Erro ao carregar vagas.');
            } finally {
                setLoading(false);
            }
        };

        loadVacancies();
    }, []);

    const handleViewCandidates = (vacancyId: number) => {
        navigate(`/candidatesList/${vacancyId}`);
    };

    return (
        <S.Container>
            {loading ? (
                <S.Message>Carregando vagas...</S.Message>
            ) : errorMessage ? (
                <S.Message>{errorMessage}</S.Message>
            ) : (
                vacancies.map(vacancy => (
                    <S.VacancyCard key={vacancy.id}>
                        <S.VacancyTitle>{vacancy.jobTitle}</S.VacancyTitle>
                        <S.ViewCandidatesButton onClick={() => handleViewCandidates(vacancy.id)}>
                            Ver Candidatos
                        </S.ViewCandidatesButton>
                    </S.VacancyCard>
                ))
            )}
        </S.Container>
    );
};

export default VacanciesList;
