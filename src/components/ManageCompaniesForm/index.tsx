import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import CompanyPDF from '../CompanyPDF';
import Navbar from '../Menu';

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
    logo: string;
}

const ManageCompaniesForm: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [editingCompanyId, setEditingCompanyId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const [cnpj, setCnpj] = useState('');
    const [phone, setPhone] = useState('');
    const [ie, setIe] = useState('');
    const [corporateReason, setCorporateReason] = useState('');
    const [fantasyName, setFantasyName] = useState('');
    const [street, setStreet] = useState('');
    const [numberStreet, setNumberStreet] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [logo, setLogo] = useState<File | null>(null);
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setLogo(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('cnpj', cnpj);
        formData.append('phone', phone);
        formData.append('ie', ie);
        formData.append('corporateReason', corporateReason);
        formData.append('fantasyName', fantasyName);
        formData.append('street', street);
        formData.append('numberStreet', numberStreet);
        formData.append('neighborhood', neighborhood);
        if (logo) {
            formData.append('logo', logo);
        }

        try {
            if (isEditing && editingCompanyId) {
                await api.put(`/company/${editingCompanyId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                await api.post('/company', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
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
            setLogo(null);

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
        } catch
        (error) {
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
                setLogo(null);
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
                    <S.InputField type="file" name="logo" onChange={handleFileChange} />
                    {error && <S.Error>{error}</S.Error>}
                    <S.SubmitButton type="submit">{isEditing ? 'Editar Empresa' : 'Cadastrar Empresa'}</S.SubmitButton>
                    <CompanyPDF companies={companies} />
                </S.FormContainer>

                <S.CompanyList>
                    <S.CompanyTable>
                        <thead>
                            <tr>
                                <S.TableHeader>CNPJ</S.TableHeader>
                                <S.TableHeader>IE</S.TableHeader>
                                <S.TableHeader>Razão Social</S.TableHeader>
                                <S.TableHeader>Nome Fantasia</S.TableHeader>
                                <S.TableHeader>Telefone</S.TableHeader>
                                <S.TableHeader>Logo</S.TableHeader>
                                <S.TableHeader>Ações</S.TableHeader>
                            </tr>
                        </thead>
                        <S.CompanyTableBody>
                            {companies.map((company: Company, index: number) => (
                                <S.TableRow key={company.id} style={{ backgroundColor: index % 2 === 0 ? '#f4f4f4' : 'white' }}>
                                    <S.TableCell>{company.cnpj}</S.TableCell>
                                    <S.TableCell>{company.ie}</S.TableCell>
                                    <S.TableCell>{company.corporateReason}</S.TableCell>
                                    <S.TableCell>{company.fantasyName}</S.TableCell>
                                    <S.TableCell>{company.phone}</S.TableCell>
                                    <S.TableCell>
                                        {company.logo && (
                                            <img
                                                src={`http://localhost:3003/uploads/${company.logo}`}
                                                alt={`${company.fantasyName} logo`}
                                                style={{ width: '50px', height: '50px' }}
                                            />
                                        )}
                                    </S.TableCell>
                                    <S.TableCell>
                                        <S.ActionButton onClick={() => handleDeleteCompany(company.id)}><FaTrashAlt /></S.ActionButton>
                                        <S.ActionButton onClick={() => handleEditCompany(company.id)}><FaEdit /></S.ActionButton>
                                    </S.TableCell>
                                </S.TableRow>
                            ))}
                        </S.CompanyTableBody>
                    </S.CompanyTable>
                </S.CompanyList>
            </S.Container>
        </>
    );
};

export default ManageCompaniesForm;
