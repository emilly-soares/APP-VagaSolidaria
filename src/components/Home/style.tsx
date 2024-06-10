import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
`;

export const Line = styled.img`
    width: 50px; 
    height: auto; 
    margin-right: 0.5rem; 
`;

export const Comment = styled.img`
    width: 100%;
`;

export const PlatformSection = styled.div`
    width: 100%;
    padding-left: 5rem;
`;

export const PlatformFlex = styled.div`
    display: flex;
`;

export const LeftSection = styled.div`
    width: 50%;
`;

export const ReviewsSection = styled.div`
    width: 50%;
`;

export const HomeTitle = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 0.5rem; 
    width: 70%;
`;

export const Caption = styled.p`
    font-size: 25px;
    margin-bottom: 0.8rem; 
    width: 70%;
`;

export const PlatformButton = styled.button`
    background-color: #FFFFFF; 
    color: #3C3C3C; 
    padding: 0.8rem 1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    justify-content: space-between;
`;

export const HandWaveEmoji = styled.span`
    margin-left: 0.5rem;
    font-size: 20px;
`;

export const Menu = styled.div`
    color: white;
    height: 600px; 
    background-color: #5187F0;
    
`;

export const YellowButton = styled(Link)`
    background-color: #FFCA1D; 
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 1rem;
    border-radius: 5px;
    color: #2C2C2C;
    font-size: 16px;
    &:hover {
        background-color: #FFD43B;
    }
`;

export const RegisterButton = styled(Link)`
    background-color: #FFCA1D;
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 1rem;
    border-radius: 5px;
    color: #2C2C2C;
    cursor: pointer;
    height: 20%;
    font-size: 16px;
    margin-top: 2rem;
    &:hover {
        background-color: #FFD43B;
    }
    `;

export const BenefitsSection = styled.div`
    width: 100%;
    margin-left: 7rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 18px;
    color: #515151;
`;

export const FirstSection = styled.div`
    width: 50%;
    display:flex;
    margin-bottom: 2rem;
`;

export const Benefit = styled.img`
    margin-top: 7rem;
    margin-left: 1rem;
`;

export const CompanyBenefits = styled.img`
    margin-top: 10rem;
    margin-left: 1rem;
`;

export const RegisterSection = styled.img`
    margin-top: 10rem;
    margin-left: 1rem;
`;
