import React, { useState, useEffect } from 'react';
import * as S from './style';
import Navbar from '../Menu/Navbar';
import { getUserId } from '../../services/authconfig';
import api from '../../services/api';

export interface Candidate {
    id: number;
    CPF: string;
    street: string;
    numberStreet: string;
    neighborhood: string;
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
        neighborhood: ''
    });

    const [user, setUser] = useState<User>({
        id: 0,
        email: '',
        name: ''
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const responseCandidate = await api.get(`/candidateFind/${userId}`);
                setCandidate(responseCandidate.data);

                const responseUser = await api.get(`/user/${userId}`);
                setUser(responseUser.data);
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
            await api.put(`/candidate/${userId}`, candidate);
            console.log('Dados alterados com sucesso!');
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
                    <S.SubmitButton type="submit">Alterar</S.SubmitButton>
                </S.FormContainer>
            </S.Container>
        </>
    );
};

export default CandidateForm;
