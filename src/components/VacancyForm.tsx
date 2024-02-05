import React, { useState } from 'react';
import api from '../services/api';

interface VacancyFormProps {
    onSuccess: () => void;
}

const VacancyForm: React.FC<VacancyFormProps> = ({ onSuccess }) => {
    const [status, setStatus] = useState(true);
    const [description, setDescription] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [candidateId, setCandidateId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post('/vacancy', {
                status,
                description,
                jobTitle,
                company_id: companyId,
                candidateId
            });

            setStatus(true);
            setDescription('');
            setJobTitle('');
            setCompanyId('');
            setCandidateId('');
            onSuccess();
        } catch (error) {
            console.error('Erro ao cadastrar vaga:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
            </label>
            <br />
            <label>
                Descrição:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <br />
            <label>
                Empresa:
                <input type="text" value={companyId} onChange={(e) => setCompanyId(e.target.value)} required />
            </label>
            <br />
            <label>
                Status:
                <input type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} />
            </label>

            <br />
            <button type="submit">Cadastrar Vaga</button>
        </form>
    );
};

export default VacancyForm;
