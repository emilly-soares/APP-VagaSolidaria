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

export const UserList = styled.div`
    width: 70%;
    padding: 20px;
`;

export const UserTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const UserTableBody = styled.tbody``;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f4f4f4;
    }
`;

export const TableCell = styled.td`
    padding: 20px;
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

export const EditButton = styled(ActionButton)`
    background-color: #5187F0;
    color: #fff;
    padding: 5px 10px;
    margin-left: 10px;
`;

export const DeleteButton = styled(ActionButton)`
    color: #fff;
    padding: 5px 10px;
`;
