import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

export const Card = styled.div`
    background-color: #F1F4F8;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    margin-bottom: 20px;
`;

export const CardContent = styled.div`
    padding: 20px;
`;

export const CardTitle = styled.h2`
    font-size: 1.5em;
    color: #2B3377;
    text-align: center;
`;

export const CardText = styled.p`
    font-size: 1em;
    color: #333;
    margin: 10px 0;
    text-align: center;
`;

export const CardTextClock = styled.p`
    font-size: 1em;
    color: #333;
    margin: 10px 0;
    text-align: right;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #F1F4F8;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #686DF1;
    border-radius: 4px;
    overflow: hidden;
    background-color: #686DF1;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 1em;
    border: none;
    outline: none;
    color: #333;
    &:focus {
        border-color: #686DF1;
    }
`;

export const ViewButton = styled.button`
    align-self: center; 
    background-color: #FD9B79;
    color: #333;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #f17e57;
    }
`;

export const CompanyTitle = styled.h1`
    font-size: 2em;
    color: #2B3377;
    text-align: center;
    margin-bottom: 20px;
`;

export const Message = styled.p`
    font-size: 2rem;
    width: 50%;
    color: #333;
    text-align: center;
    margin: 5rem 0;
`;

export const Image = styled.img`
    display: block;
    margin: 20px auto;
    max-width: 30%;
    height: auto;
`;