import React, { useState } from 'react';
import CompanyForm from '../components/Company';

const Company: React.FC = () => {
    const [message, setMessage] = useState<string | null>(null);

    const handleCompanyCreationSuccess = () => {
        setMessage('Empresa cadastrada com sucesso!');
    };

    return (
        <div>
            <h1>Gerenciamento de Empresas</h1>
            {message && <p>{message}</p>}
            <CompanyForm onSuccess={handleCompanyCreationSuccess} />
        </div>
    );
};

export default Company;
