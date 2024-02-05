import React, { useState } from 'react';
import UserForm from '../components/UserForm';

const Vacancy: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);

    const handleVacancyCreationSuccess = () => {
        setMessage('Vaga cadastrada com sucesso!');
    };

    return (
        <div>
            <h1>Cadastro de Vagas</h1>
            {message && <p>{message}</p>}
            <UserForm onSuccess={handleVacancyCreationSuccess} />
        </div>
    );
};

export default Vacancy;
