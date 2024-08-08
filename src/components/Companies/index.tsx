import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { FaSearch } from 'react-icons/fa'; 
import Footer from '../Footer';

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
    createdAt: string;
    updatedAt: string;
    logo: string;
}

const Companies: React.FC = () => {

    const [companies, setCompanies] = useState<Company[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    const navigate = useNavigate();

    useEffect(() => {
        const loadCompanies = async () => {
            try {
                const response = await api.get('/companies');
                setCompanies(response.data);
            } catch (error) {
                console.error('Erro ao carregar empresas:', error);
            }
        };

        loadCompanies();
    }, []);


    const handleViewOpportunities = (id: number) => {
        navigate(`/vacancies/company/${id}`);
    };


    const filteredCompanies = companies.filter(company =>
        company.corporateReason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>

            <S.SearchContainer>

                <S.SearchWrapper>

                    <S.SearchInput
                        type="text"
                        placeholder="Pesquisar pela razão social..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <FaSearch color="white" size={20} style={{ margin: '0 10px' }} />

                </S.SearchWrapper>

            </S.SearchContainer>

            <S.Container>

                {filteredCompanies.map(company => (
                    <S.Card key={company.id}>
                        <S.CardImage src={`http://localhost:3003/uploads/${company.logo}`} alt={`${company.fantasyName} logo`} />
                        <S.CardContent>
                            <S.CardTitle>{company.fantasyName}</S.CardTitle>
                            <S.CardText>{company.phone}</S.CardText>
                            <S.CardText>{`${company.street}, ${company.numberStreet}, ${company.neighborhood}`}</S.CardText>
                            <S.ViewButton onClick={() => handleViewOpportunities(company.id)}>Ver Oportunidades</S.ViewButton>
                        </S.CardContent>
                    </S.Card>
                ))}

            </S.Container>

        </>
        
    );
};

export default Companies;
