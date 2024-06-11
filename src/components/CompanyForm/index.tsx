import React, { useState, useEffect } from 'react';
import * as S from './style';
import Navbar from '../Menu';
import { getUserId } from '../../services/authconfig';
import api from '../../services/api';

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
    logo?: string;
    userId?: number; 
}

export interface User {
    id: number;
    email: string;
    name: string;
}

const CompanyForm: React.FC = () => {

    const userId = Number(getUserId()); 

    const [company, setCompany] = useState<Company>({
        id: 0,
        cnpj: '',
        phone: '',
        ie: '',
        corporateReason: '',
        fantasyName: '',
        street: '',
        numberStreet: '',
        neighborhood: '',
        logo: '',
        userId: userId 
    });

    const [user, setUser] = useState<User>({
        id: 0,
        email: '',
        name: ''
    });

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [logo, setLogo] = useState<File | null>(null); 

    useEffect(() => {
        async function fetchData() {
            try {
                const responseUser = await api.get(`/user/${userId}`);
                setUser(responseUser.data);

                const responseCompany = await api.get(`/company/${userId}`);
                if (responseCompany.data) {
                    setCompany(responseCompany.data);
    
                }

            } catch (error) {
                console.error('Erro ao obter empresa ou usuário:', error);
            }
        }
        fetchData();
    }, [userId]);

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCompany(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setLogo(e.target.files[0]);
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.put(`/user/${userId}`, user);

            const formData = new FormData();
            formData.append('cnpj', company.cnpj);
            formData.append('phone', company.phone);
            formData.append('ie', company.ie);
            formData.append('corporateReason', company.corporateReason);
            formData.append('fantasyName', company.fantasyName);
            formData.append('street', company.street);
            formData.append('numberStreet', company.numberStreet);
            formData.append('neighborhood', company.neighborhood);
            if (logo) {
                formData.append('logo', logo);
            }
            formData.append('userId', company.userId?.toString() || ''); 

          
                await api.put(`/company/${company.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
        
            setSuccessMessage('Dados alterados com sucesso!');
        } catch (error) {
            console.error('Erro ao alterar dados:', error);
        }
    };

    return (
        <>
            <Navbar />
            <S.Container>
                <S.FormContainer onSubmit={handleSubmit}>
                    <S.Label htmlFor="email">E-mail:</S.Label>
                    <S.InputField
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleUserChange}
                        placeholder="E-mail"
                        required
                    />

                    <S.Label htmlFor="name">Nome:</S.Label>
                    <S.InputField
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleUserChange}
                        placeholder="Nome"
                        required
                    />

                    <S.Label htmlFor="cnpj">CNPJ:</S.Label>
                    <S.InputField
                        type="text"
                        name="cnpj"
                        value={company.cnpj}
                        onChange={handleCompanyChange}
                        placeholder="CNPJ"
                        required
                    />

                    <S.Label htmlFor="phone">Telefone:</S.Label>
                    <S.InputField
                        type="tel"
                        name="phone"
                        value={company.phone}
                        onChange={handleCompanyChange}
                        placeholder="Telefone"
                        required
                    />

                    <S.Label htmlFor="ie">IE:</S.Label>
                    <S.InputField
                        type="text"
                        name="ie"
                        value={company.ie}
                        onChange={handleCompanyChange}
                        placeholder="Inscrição Estadual"
                        required
                    />

                    <S.Label htmlFor="corporateReason">Razão Social:</S.Label>
                    <S.InputField
                        type="text"
                        name="corporateReason"
                        value={company.corporateReason}
                        onChange={handleCompanyChange}
                        placeholder="Razão Social"
                        required
                    />

                    <S.Label htmlFor="fantasyName">Nome Fantasia:</S.Label>
                    <S.InputField
                        type="text"
                        name="fantasyName"
                        value={company.fantasyName}
                        onChange={handleCompanyChange}
                        placeholder="Nome Fantasia"
                        required
                    />

                    <S.Label htmlFor="street">Rua:</S.Label>
                    <S.InputField
                        type="text"
                        name="street"
                        value={company.street}
                        onChange={handleCompanyChange}
                        placeholder="Rua"
                        required
                    />

                    <S.Label htmlFor="numberStreet">Número:</S.Label>
                    <S.InputField
                        type="text"
                        name="numberStreet"
                        value={company.numberStreet}
                        onChange={handleCompanyChange}
                        placeholder="Número"
                        required
                    />

                    <S.Label htmlFor="neighborhood">Bairro:</S.Label>
                    <S.InputField
                        type="text"
                        name="neighborhood"
                        value={company.neighborhood}
                        onChange={handleCompanyChange}
                        placeholder="Bairro"
                        required
                    />

                    <S.Label htmlFor="logo">Logo:</S.Label>
                    <S.InputField
                        type="file"
                        name="logo"
                        onChange={handleFileChange}
                    />

                    <S.SubmitButton type="submit">Salvar</S.SubmitButton>
                </S.FormContainer>
                {successMessage && <S.SuccessMessage>{successMessage}</S.SuccessMessage>}
            </S.Container>
        </>
    );
};

export default CompanyForm;
