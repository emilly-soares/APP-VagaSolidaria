import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import { FaSearch, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export interface Vacancy {
    id: number;
    status: boolean;
    description: string;
    jobTitle: string;
    company_id: number;
    workload: string;
}

export interface Company {
    id: number;
    corporateReason: string;
}

const Vacancies: React.FC = () => {

    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const navigate = useNavigate();

    useEffect(() => {
        const loadVacancies = async () => {
            try {
                const response = await api.get('/vacancies');
                setVacancies(response.data);
            } catch (error) {
                console.error('Erro ao carregar vagas:', error);
            }
        };

        const loadCompanies = async () => {
            try {
                const response = await api.get('/companies');
                setCompanies(response.data);
            } catch (error) {
                console.error('Erro ao carregar empresas:', error);
            }
        };

        loadVacancies();
        loadCompanies();
    }, []);

    const handleViewDetails = (id: number) => {
        navigate(`/vacancy/${id}`);
    };

    const filteredVacancies = vacancies
        .filter(vacancy => vacancy.status)
        .filter(vacancy => vacancy.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    const getCompanyName = (companyId: number) => {
        const company = companies.find(c => c.id === companyId);
        return company ? company.corporateReason : 'Empresa desconhecida';
    };


    return (
        <>

            <S.SearchContainer>
                <S.SearchWrapper>
                    <S.SearchInput
                        type="text"
                        placeholder="Pesquisar por título de cargo..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaSearch color="white" size={20} style={{ margin: '0 10px' }} />
                </S.SearchWrapper>
            </S.SearchContainer>

            <S.Container>
                {filteredVacancies.map(vacancy => (
                    <S.Card key={vacancy.id}>
                        <S.CardContent>
                            <S.CardTextClock><FaClock style={{ marginRight: '5px', color: "#2B3377" }} />{`Presencial ${vacancy.workload}`}</S.CardTextClock>
                            <S.CardText>{`${getCompanyName(vacancy.company_id)}`}</S.CardText>
                            <S.CardTitle>{vacancy.jobTitle}</S.CardTitle>
                            <S.CardText>{vacancy.description}</S.CardText>
                            <S.ViewButton onClick={() => handleViewDetails(vacancy.id)}>Saiba Mais</S.ViewButton>
                        </S.CardContent>
                    </S.Card>
                ))}
            </S.Container>

        </>
    );
};

export default Vacancies;
