import React, { useState } from 'react';
import api from '../services/api';

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

            // Limpar os campos após o envio bem-sucedido
            setCnpj('');
            setPhone('');
            setIe('');
            setCorporateReason('');
            setFantasyName('');
            setStreet('');
            setNumberStreet('');
            setNeighborhood('');
            
            onSuccess(); // Chama a função onSuccess para atualizar o estado do componente pai
        } catch (error) {
            console.error('Erro ao criar empresa:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                CNPJ:
                <input type="text" name="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
            </label>
            <br />
            <label>
                Nome Fantasia:
                <input type="text" name="fantasyName" value={fantasyName} onChange={(e) => setFantasyName(e.target.value)} required />
            </label>
            <br />
            <label>
                Razão Social:
                <input type="text" name="corporateReason" value={corporateReason} onChange={(e) => setCorporateReason(e.target.value)} required />
            </label>
            <br />
            <label>
                Inscrição Estadual:
                <input type="text" name="ie" value={ie} onChange={(e) => setIe(e.target.value)} required />
            </label>
            <br />
            <label>
                Telefone:
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <br />
            <label>
                Rua:
                <input type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} required />
            </label>
            <br />
            <label>
                Número:
                <input type="text" name="numberStreet" value={numberStreet} onChange={(e) => setNumberStreet(e.target.value)} required />
            </label>
            <br />
            <label>
                Bairro:
                <input type="text" name="neighborhood" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} required />
            </label>
            <br />
            <br />
            <button type="submit">Cadastrar Empresa</button>
        </form>
    );
};

export default CompanyForm;
