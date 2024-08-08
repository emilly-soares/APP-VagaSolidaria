import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const ManageUsersForm: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string>('');

    const loadUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            setError('Erro ao carregar');
        }
    };


    useEffect(() => {
        loadUsers();
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {
            const newUser = {
                name: name,
                email: email,
                password: 'vagasolidaria123',
                role: 'business',
            };

            if (isEditing && editingUserId) {
                await api.put(`/user/${editingUserId}`, newUser);
            } else {
                await api.post('/user', newUser);
            }

            setName('');
            setEmail('');
            loadUsers();
            setEditingUserId(null);
            setIsEditing(false);

        } catch (error) {
            console.error('Erro ao criar/editar usuário:', error);
        }
    };


    const handleDeleteUser = async (userId: number) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este usuário?');
        if (!confirmDelete) return;

        try {
            await api.delete(`/user/${userId}`);
            loadUsers();
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    };


    const handleEditUser = (user: User) => {
        setName(user.name);
        setEmail(user.email);
        setEditingUserId(user.id);
        setIsEditing(true);
    };


    return (

        <>

            <S.Title>Gerenciar Usuários</S.Title>

            <S.Container>

                <S.FormContainer onSubmit={handleSubmit}>
                    <S.InputField type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
                    <S.InputField type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    {error && <S.Error>{error}</S.Error>}
                    <S.SubmitButton type="submit">{isEditing ? 'Editar Usuário' : 'Cadastrar Usuário'}</S.SubmitButton>
                </S.FormContainer>

                <S.UserList>

                    <S.UserTable>

                        <thead>
                            <tr>
                                <S.TableHeader>Nome</S.TableHeader>
                                <S.TableHeader>Email</S.TableHeader>
                                <S.TableHeader>Role</S.TableHeader>
                                <S.TableHeader>Ações</S.TableHeader>
                            </tr>
                        </thead>
                        
                        <S.UserTableBody>
                            {users.map((user: User) => (
                                
                                <S.TableRow key={user.id}>
                                    <S.TableCell>{user.name}</S.TableCell>
                                    <S.TableCell>{user.email}</S.TableCell>
                                    <S.TableCell>{user.role}</S.TableCell>
                                    <S.TableCell>
                                        <S.ActionButton onClick={() => handleDeleteUser(user.id)}>
                                            <FaTrashAlt />
                                        </S.ActionButton>
                                        <S.ActionButton onClick={() => handleEditUser(user)}>
                                            <FaEdit />
                                        </S.ActionButton>
                                    </S.TableCell>
                                </S.TableRow>

                            ))}
                        </S.UserTableBody>

                    </S.UserTable>

                </S.UserList>

            </S.Container>

        </>
    );
};

export default ManageUsersForm;
