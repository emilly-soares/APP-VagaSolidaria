import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center; 
    align-items: flex-start;
    margin: 0 auto; 
    max-width: 1200px;
`;

export const FormContainer = styled.form`
    width: 33%;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 28px;
    color: #333;
    margin-top: 1rem;
    text-align: center;
`;

export const InputField = styled.input`
    margin-bottom: 10px;
    padding: 5px;
    height: 35px;
    width: 100%;
    border: 1px solid #ccc;
    font-size: 16px;
`;

export const SelectField = styled.select`
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    background-color: #fff;
    color: #333;
`;

export const SubmitButton = styled.button`
    font-size: 16px;
    background-color: #5187F0;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 50px;
    margin-top: 20px;
    &:hover {
        background-color: #5187CC;
    }
`;

export const Error = styled.p`
    color: red;
    margin-top: 10px;
`;

export const VacancyList = styled.div`
    width: 70%;
    padding: 20px;
`;

export const VacancyListItem = styled.li`
    list-style-type: none;
    margin-bottom: 10px;
`;

export const EditButton = styled.button`
    background-color: #5187F0;
    color: #fff;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
`;

export const DeleteButton = styled.button`
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;

export const TableHeader = styled.th`
    background-color: #5187F0;
    color: #fff;
    padding: 10px;
    text-align: left;
`;

export const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 5px;
    color: #5187F0;
    font-size: 16px;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f4f4f4;
    }
`;

export const TableCell = styled.td`
    padding: 20px;
`;

export const VacancyTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TextareaField = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    resize: vertical; 
    line-height: 1.5; 

    background: repeating-linear-gradient(
        white, 
        white 25px, 
        #f4f4f4 26px
    );
    outline: none;

    &:focus {
        border-color: #007bff;
    }
`;

export const VacancyTableBody = styled.tbody``;
