import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 2em;
    color: #3ADAD9;
    margin-bottom: 20px;
`;

export const Card = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    margin-bottom: 20px;
    padding: 20px;
`;

export const CardTitle = styled.h2`
    font-size: 1.5em;
    color: #5187F0;
`;

export const CardText = styled.p`
    font-size: 1em;
    color: #333;
    margin: 10px 0;
`;
