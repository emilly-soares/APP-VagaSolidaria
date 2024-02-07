import React, { useState } from 'react';
import VacancyForm from './../components/VacancyForm';

const Vacancy: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);

    const handleVacancyCreationSuccess = () => {
        setMessage('Vaga cadastrada com sucesso!');
    };

    return (
        <div>
            <h1>Cadastro de Vagas</h1>
            {message && <p>{message}</p>}
            <VacancyForm onSuccess={handleVacancyCreationSuccess} />
        </div>
    );
};

export default Vacancy;
