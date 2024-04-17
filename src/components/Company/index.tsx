import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import CompanyPDF from '../CompanyPDF';
import Navbar from '../Menu/Navbar';
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
    createdAt: string;
    updatedAt: string;

}

const CompanyForm: React.FC = () => {

    const [companies, setCompanies] = useState<Company[]>([]);
    const [editingCompanyId, setEditingCompanyId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false)

    const [cnpj, setCnpj] = useState('');
    const [phone, setPhone] = useState('');
    const [ie, setIe] = useState('');
    const [corporateReason, setCorporateReason] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [street, setStreet] = useState('');
    const [numberStreet, setNumberStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [error, setError] = useState<string>('');

    const loadCompanies = async () => {
        try {
            const response = await api.get('/companies');
            setCompanies(response.data);
        } catch (error) {
            console.error('Erro ao carregar empresas:', error);
        }
    };

    useEffect(() => {
        loadCompanies();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && editingCompanyId) {
                await api.put(`/company/${editingCompanyId}`, {
                    cnpj,
                    phone,
                    ie,
                    corporateReason,
                    fantasyName,
                    street,
                    numberStreet,
                    neighborhood
                });
            } else {
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
            }

            setCnpj('');
            setPhone('');
            setIe('');
            setCorporateReason('');
            setFantasyName('');
            setStreet('');
            setNumberStreet('');
            setNeighborhood('');

            loadCompanies();
            setEditingCompanyId(null);
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao criar/editar empresa:', error);
        }
    };
    const handleDeleteCompany = async (companyId: number) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esta empresa?');
        if (!confirmDelete) return;

        try {
            await api.delete(`/company/${companyId}`);
            loadCompanies();
        } catch (error) {
            console.error('Erro ao excluir empresa:', error);
        }
    };

    const handleEditCompany = async (companyId: number) => {
        try {
            const companyToEdit = companies.find((company: Company) => company.id === companyId);
            if (companyToEdit) {
                setCnpj(companyToEdit.cnpj);
                setPhone(companyToEdit.phone);
                setIe(companyToEdit.ie);
                setCorporateReason(companyToEdit.corporateReason);
                setFantasyName(companyToEdit.fantasyName);
                setStreet(companyToEdit.street);
                setNumberStreet(companyToEdit.numberStreet);
                setNeighborhood(companyToEdit.neighborhood);
                setEditingCompanyId(companyId);
                setIsEditing(true);
            }
        } catch (error) {
            console.error('Erro ao editar empresa:', error);
        }
    };

    return (
        <>
            <Navbar></Navbar>
            <S.Title>Gerenciar Empresas</S.Title>
            <S.Container>

                <S.FormContainer onSubmit={handleSubmit}>
                    <S.InputField type="text" name="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="CNPJ" required />
                    <S.InputField type="text" name="fantasyName" value={fantasyName} onChange={(e) => setFantasyName(e.target.value)} placeholder="Nome Fantasia" required />
                    <S.InputField type="text" name="corporateReason" value={corporateReason} onChange={(e) => setCorporateReason(e.target.value)} placeholder="Razão Social" required />
                    <S.InputField type="text" name="ie" value={ie} onChange={(e) => setIe(e.target.value)} placeholder="Inscrição Estadual" required />
                    <S.InputField type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
                    <S.InputField type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Rua" required />
                    <S.InputField type="text" name="numberStreet" value={numberStreet} onChange={(e) => setNumberStreet(e.target.value)} placeholder="Número" required />
                    <S.InputField type="text" name="neighborhood" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} placeholder="Bairro" required />
                    {error && <S.Error>{error}</S.Error>}
                    <S.SubmitButton type="submit">{isEditing ? 'Editar Empresa' : 'Cadastrar Empresa'}</S.SubmitButton>
                    <CompanyPDF companies={companies} />
                </S.FormContainer>

                <S.CompanyList>
                    <table>
                        <thead>
                            <tr>
                                <S.TableHeader>CNPJ</S.TableHeader>
                                <S.TableHeader>IE</S.TableHeader>
                                <S.TableHeader>Razão Social</S.TableHeader>
                                <S.TableHeader>Nome Fantasia</S.TableHeader>
                                <S.TableHeader>Telefone</S.TableHeader>
                                <S.TableHeader>Ações</S.TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company: Company, index: number) => (
                                <tr key={company.id} style={{ backgroundColor: index % 2 === 0 ? '#f4f4f4' : 'white' }}>
                                    <td>{company.cnpj}</td>
                                    <td>{company.ie}</td>
                                    <td>{company.corporateReason}</td>
                                    <td>{company.fantasyName}</td>
                                    <td>{company.phone}</td>
                                    <td>
                                        <S.ActionButton onClick={() => handleDeleteCompany(company.id)}><FaTrashAlt /></S.ActionButton>
                                        <S.ActionButton onClick={() => handleEditCompany(company.id)}><FaEdit /></S.ActionButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </S.CompanyList>
            </S.Container>
        </>
    );
};

export default CompanyForm;
