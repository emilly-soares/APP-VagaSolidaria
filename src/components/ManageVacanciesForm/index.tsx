import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as S from './style';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { getUserId } from '../../services/authconfig';

export interface Vacancy {
    id: number;
    status: boolean;
    description: string;
    jobTitle: string;
    company_id: number;
    workload: string;
    responsibilities: string;
}

const ManageVacanciesForm: React.FC = () => {

    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [editingVacancyId, setEditingVacancyId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const [status, setStatus] = useState(true);
    const [description, setDescription] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [workload, setWorkload] = useState('');
    const [companyId, setCompanyId] = useState<number | null>(null);
    const [responsibilities, setResponsibilities] = useState('');



    const [error, setError] = useState<string>('');

    const loadVacancies = async () => {
        try {
            if (companyId) {
                const response = await api.get(`/vacancies/company/${companyId}`);
                setVacancies(response.data);
            }
        } catch (error) {
            console.error('Erro ao carregar vagas:', error);
        }
    };

    const loadCompanyByUserId = async () => {
        try {
            const userId = await getUserId();
            const response = await api.get(`/company/${userId}`);
            if (response.data && response.data.id) {
                setCompanyId(response.data.id);
            } else {
                console.error('Empresa não encontrada para o usuário:', userId);
                setError('Empresa não encontrada para o usuário');
            }
        } catch (error) {
            console.error('Erro ao carregar empresa pelo userId:', error);
            setError('Erro ao carregar empresa');
        }
    };

    useEffect(() => {
        loadCompanyByUserId();
    }, []);

    useEffect(() => {
        if (companyId) {
            loadVacancies();
        }
    }, [companyId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const vacancyData = {
            status,
            description,
            jobTitle,
            company_id: companyId,
            workload,
            responsibilities
        };

        try {
            if (isEditing && editingVacancyId) {
                await api.put(`/vacancy/${editingVacancyId}`, vacancyData);
            } else {
                await api.post('/vacancy', vacancyData);
            }

            setStatus(true);
            setDescription('');
            setJobTitle('');
            setWorkload('');
            setResponsibilities('');

            loadVacancies();
            setEditingVacancyId(null);
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao criar/editar vaga:', error);
        }
    };

    const handleDeleteVacancy = async (vacancyId: number) => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir esta vaga?');
        if (!confirmDelete) return;

        try {
            await api.delete(`/vacancy/${vacancyId}`);
            loadVacancies();
        } catch (error) {
            console.error('Erro ao excluir vaga:', error);
        }
    };

    const handleEditVacancy = async (vacancyId: number) => {
        try {
            const vacancyToEdit = vacancies.find((vacancy: Vacancy) => vacancy.id === vacancyId);
            if (vacancyToEdit) {
                setStatus(vacancyToEdit.status);
                setDescription(vacancyToEdit.description);
                setJobTitle(vacancyToEdit.jobTitle);
                setWorkload(vacancyToEdit.workload);
                setResponsibilities(vacancyToEdit.responsibilities);
                setEditingVacancyId(vacancyId);
                setIsEditing(true);
            }
        } catch (error) {
            console.error('Erro ao editar vaga:', error);
        }
    };

    return (
        <>

            <S.Title>Gerenciar Vagas</S.Title>

            <S.Container>

                <S.FormContainer onSubmit={handleSubmit}>
                    <S.SelectField name="status" value={status.toString()} onChange={(e) => setStatus(e.target.value === 'true')} required>
                        <option value="true">Ativa</option>
                        <option value="false">Inativa</option>
                    </S.SelectField>
                    <S.InputField type="text" name="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Título do Cargo" required />
                    <S.InputField type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" required />
                    <S.InputField type="text" name="workload" value={workload} onChange={(e) => setWorkload(e.target.value)} placeholder="Carga Horária" required />
                    <S.TextareaField
                        name="responsibilities"
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        placeholder="Responsabilidades"
                        required
                    />
                    {error && <S.Error>{error}</S.Error>}
                    <S.SubmitButton type="submit">{isEditing ? 'Editar Vaga' : 'Cadastrar Vaga'}</S.SubmitButton>
                </S.FormContainer>

                <S.VacancyList>
                    <S.VacancyTable>
                        <thead>
                            <tr>
                                <S.TableHeader>ID</S.TableHeader>
                                <S.TableHeader>Status</S.TableHeader>
                                <S.TableHeader>Título do Cargo</S.TableHeader>
                                <S.TableHeader>Descrição</S.TableHeader>
                                <S.TableHeader>Carga Horária</S.TableHeader>
                                <S.TableHeader>Ações</S.TableHeader>
                            </tr>
                        </thead>
                        
                        <S.VacancyTableBody>
                            {vacancies.map((vacancy: Vacancy, index: number) => (
                                <S.TableRow key={vacancy.id} style={{ backgroundColor: index % 2 === 0 ? '#f4f4f4' : 'white' }}>
                                    <S.TableCell>{vacancy.id}</S.TableCell>
                                    <S.TableCell>{vacancy.status ? 'Ativa' : 'Inativa'}</S.TableCell>
                                    <S.TableCell>{vacancy.jobTitle}</S.TableCell>
                                    <S.TableCell>{vacancy.description}</S.TableCell>
                                    <S.TableCell>{vacancy.workload}</S.TableCell>
                                    <S.TableCell>
                                        <S.ActionButton onClick={() => handleDeleteVacancy(vacancy.id)}><FaTrashAlt /></S.ActionButton>
                                        <S.ActionButton onClick={() => handleEditVacancy(vacancy.id)}><FaEdit /></S.ActionButton>
                                    </S.TableCell>
                                </S.TableRow>
                            ))}
                        </S.VacancyTableBody>
                    </S.VacancyTable>
                </S.VacancyList>
            </S.Container>
        </>
    );
};

export default ManageVacanciesForm;
