import React, { useState } from 'react';
import api from '../../../services/api';
import * as S from './style';
interface CompanyFormProps {
    onSuccess: () => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onSuccess }) => {
    const [cnpj, setCnpj] = useState('');
    const [phone, setPhone] = useState('');
    const [ie, setIe] = useState('');
    const [corporateReason, setCorporateReason] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [street, setStreet] = useState('');
    const [numberStreet, setNumberStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/company', {
                cnpj,
                phone,
                ie,
                corporateReason,
                fantasyName,
                street,
                numberStreet,
                neighborhood
            });

            setCnpj('');
            setPhone('');
            setIe('');
            setCorporateReason('');
            setFantasyName('');
            setStreet('');
            setNumberStreet('');
            setNeighborhood('');

            onSuccess();
        } catch (error) {
            console.error('Erro ao criar empresa:', error);
        }
    };

    return (
        <S.FormContainer onSubmit={handleSubmit}>
        <S.InputField type="text" name="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="CNPJ" required />
        <S.InputField type="text" name="fantasyName" value={fantasyName} onChange={(e) => setFantasyName(e.target.value)} placeholder="Nome Fantasia" required />
        <S.InputField type="text" name="corporateReason" value={corporateReason} onChange={(e) => setCorporateReason(e.target.value)} placeholder="Razão Social" required />
        <S.InputField type="text" name="ie" value={ie} onChange={(e) => setIe(e.target.value)} placeholder="Inscrição Estadual" required />
        <S.InputField type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
        <S.InputField type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Rua" required />
        <S.InputField type="text" name="numberStreet" value={numberStreet} onChange={(e) => setNumberStreet(e.target.value)} placeholder="Número" required />
        <S.InputField type="text" name="neighborhood" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} placeholder="Bairro" required />
        {error && <S.Error>{error}</S.Error>}
        <S.SubmitButton type="submit">Cadastrar Empresa</S.SubmitButton>
        
      </S.FormContainer>
    );
};

export default CompanyForm;
