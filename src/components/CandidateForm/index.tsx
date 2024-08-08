import React, { useState, useEffect } from 'react';
import * as S from './style';
import { getUserId } from '../../services/authconfig';
import api from '../../services/api';

export interface Candidate {
    id: number;
    CPF: string;
    street: string;
    numberStreet: string;
    neighborhood: string;
    dateBirth: string;
    phone: string;
}

export interface User {
    id: number;
    email: string;
    name: string;
}

const CandidateForm: React.FC = () => {
    const userId = getUserId();

    const [candidate, setCandidate] = useState<Candidate>({
        id: 0,
        CPF: '',
        street: '',
        numberStreet: '',
        neighborhood: '',
        dateBirth: '',
        phone: ''
    });

    const [user, setUser] = useState<User>({
        id: 0,
        email: '',
        name: ''
    });

    const [isNewCandidate, setIsNewCandidate] = useState(true);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseUser = await api.get(`/user/${userId}`);
                setUser(responseUser.data);

                const responseCandidate = await api.get(`/candidateFind/${userId}`);
                if (responseCandidate.data) {

                    const candidateData = {
                        ...responseCandidate.data,
                        dateBirth: responseCandidate.data.dateBirth ? new Date(responseCandidate.data.dateBirth).toISOString().split('T')[0] : ''
                    };

                    setCandidate(candidateData);
                    setIsNewCandidate(false);
                }

            } catch (error) {
                console.error('Erro ao obter candidato ou usuário:', error);
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


    const handleCandidateChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        setCandidate(prevState => ({
            ...prevState,
            [name]: value
        }));

    };


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {
            await api.put(`/user/${userId}`, user);
            if (isNewCandidate) {
                await api.post(`/candidate`, { ...candidate, userId });
            } else {
                await api.put(`/candidate/${userId}`, candidate);
            }
            setSuccessMessage('Dados cadastrados/alterados com sucesso!');

        } catch (error) {
            console.error('Erro ao alterar dados:', error);
        }

    };


    return (
        <>
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

                    <S.Label htmlFor="cpf">CPF:</S.Label>
                    <S.InputField
                        type="text"
                        name="CPF"
                        value={candidate.CPF}
                        onChange={handleCandidateChange}
                        placeholder="CPF"
                        required
                    />

                    <S.Label htmlFor="street">Rua:</S.Label>
                    <S.InputField
                        type="text"
                        name="street"
                        value={candidate.street}
                        onChange={handleCandidateChange}
                        placeholder="Rua"
                        required
                    />

                    <S.Label htmlFor="numberStreet">Número:</S.Label>
                    <S.InputField
                        type="text"
                        name="numberStreet"
                        value={candidate.numberStreet}
                        onChange={handleCandidateChange}
                        placeholder="Número"
                        required
                    />

                    <S.Label htmlFor="neighborhood">Bairro:</S.Label>
                    <S.InputField
                        type="text"
                        name="neighborhood"
                        value={candidate.neighborhood}
                        onChange={handleCandidateChange}
                        placeholder="Bairro"
                        required
                    />

                    <S.Label htmlFor="dateBirth">Data de Nascimento:</S.Label>
                    <S.InputField
                        type="date"
                        name="dateBirth"
                        value={candidate.dateBirth}
                        onChange={handleCandidateChange}
                        required
                    />

                    <S.Label htmlFor="phone">Telefone:</S.Label>
                    <S.InputField
                        type="tel"
                        name="phone"
                        value={candidate.phone}
                        onChange={handleCandidateChange}
                        placeholder="Telefone"
                        required
                    />

                    <S.SubmitButton type="submit">Salvar</S.SubmitButton>

                </S.FormContainer>

                {successMessage && <S.SuccessMessage>{successMessage}</S.SuccessMessage>}

            </S.Container>
        </>
    );
};

export default CandidateForm;
