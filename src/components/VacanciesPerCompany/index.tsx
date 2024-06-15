import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import Navbar from '../Menu';
import Footer from '../Footer';
import { FaSearch, FaClock } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import brand from '../../assets/brand.png';

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

const VacanciesPerCompany: React.FC = () => {

    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [company, setCompany] = useState<Company | null>(null);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const { companyId } = useParams<{ companyId: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const loadVacancies = async () => {
            try {
                const response = await api.get(`/vacancies/company/${companyId}`);
                setVacancies(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar vagas:', error);
                setErrorMessage('Ainda não há vagas cadastradas para esta empresa.');
                setLoading(false);
            }
        };

        const loadCompany = async () => {
            try {
                const response = await api.get(`/companies/`);
                setCompany(response.data);
            } catch (error) {
                console.error('Erro ao carregar empresa:', error);
            }
        };

        loadVacancies();
        loadCompany();
    }, [companyId]);


    const handleViewDetails = (id: number) => {
        navigate(`/vacancy/${id}`);
    };


    const filteredVacancies = vacancies
        .filter(vacancy => vacancy.status)
        .filter(vacancy => vacancy.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <Navbar />

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
                {company && <S.CompanyTitle>{company.corporateReason}</S.CompanyTitle>}
                {loading ? (
                    <S.Message>Carregando vagas...</S.Message>
                ) : filteredVacancies.length > 0 ? (
                    filteredVacancies.map(vacancy => (
                        <S.Card key={vacancy.id}>
                            <S.CardContent>
                                <S.CardTextClock>
                                    <FaClock style={{ marginRight: '5px', color: "#2B3377" }} />
                                    {`Presencial ${vacancy.workload}`}
                                </S.CardTextClock>
                                <S.CardTitle>{vacancy.jobTitle}</S.CardTitle>
                                <S.CardText>{vacancy.description}</S.CardText>
                                <S.ViewButton onClick={() => handleViewDetails(vacancy.id)}>Saiba Mais</S.ViewButton>
                            </S.CardContent>
                        </S.Card>
                    ))
                ) : (
                    <>
                    <S.Message>Ainda não há vagas cadastradas para esta empresa. ☹️Fique atento às futuras oportunidades!</S.Message>
                    <S.Image src={brand} alt="Sem Vagas" ></S.Image>
                    </>
                )}
            </S.Container>

            <Footer />
        </>
    );
};

export default VacanciesPerCompany;
