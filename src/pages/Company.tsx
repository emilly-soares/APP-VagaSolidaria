import React, { useState } from 'react';
import CompanyForm from './../components/CompanyForm';

const Company: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);

    const handleCompanyCreationSuccess = () => {
        setMessage('Empresa cadastrada com sucesso!');
    };

    return (
        <div>
            <h1>Cadastro de Empresas</h1>
            {message && <p>{message}</p>}
            <CompanyForm onSuccess={handleCompanyCreationSuccess} />
        </div>
    );
};

export default Company;
