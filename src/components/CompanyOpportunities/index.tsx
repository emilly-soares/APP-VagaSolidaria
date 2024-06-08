import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import * as S from './style';

interface Opportunity {
    id: number;
    title: string;
    description: string;
}

const CompanyOpportunities: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                const response = await api.get(`/opportunities/${id}`);
                setOpportunities(response.data);
            } catch (error) {
                console.error('Erro ao carregar oportunidades:', error);
            }
        };

        fetchOpportunities();
    }, [id]);

    return (
        <S.Container>
            <S.Title>Oportunidades</S.Title>
            {opportunities.map(opportunity => (
                <S.Card key={opportunity.id}>
                    <S.CardTitle>{opportunity.title}</S.CardTitle>
                    <S.CardText>{opportunity.description}</S.CardText>
                </S.Card>
            ))}
        </S.Container>
    );
};

export default CompanyOpportunities;
