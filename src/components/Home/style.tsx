import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
`;

export const Line = styled.img`
    width: 50px;
    height: auto;
    margin-right: 0.5rem;

    @media (max-width: 768px) {
        width: 30px;
    }
`;

export const Comment = styled.img`
    width: 100%;
`;

export const PlatformSection = styled.div`
    width: 100%;
    padding-left: 5rem;

    @media (max-width: 768px) {
        padding-left: 2rem;
    }
`;

export const PlatformFlex = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const LeftSection = styled.div`
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ReviewsSection = styled.div`
    width: 60%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const HomeTitle = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 0.5rem; 
    width: 70%;

    @media (max-width: 768px) {
        font-size: 32px;
        width: 100%;
    }
`;

export const Caption = styled.p`
    font-size: 25px;
    margin-bottom: 0.8rem; 
    width: 70%;

    @media (max-width: 768px) {
        font-size: 18px;
        width: 100%;
    }
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

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 0.6rem 0.8rem;
    }
`;

export const HandWaveEmoji = styled.span`
    margin-left: 0.5rem;
    font-size: 20px;
`;

export const Menu = styled.div`
    color: white;
    height: 550px; 
    background-color: #5187F0;

    @media (max-width: 768px) {
        height: auto;
        padding: 2rem 1rem;
    }
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

    @media (max-width: 768px) {
        padding: 0.8rem 0.8rem;
        font-size: 14px;
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

    @media (max-width: 768px) {
        padding: 0.8rem 0.8rem;
        font-size: 14px;
    }
`;

export const BenefitsSection = styled.div`
    width: 100%;
    margin-left: 2rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 18px;
    color: #515151;

    @media (max-width: 768px) {
        margin-left: 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
        font-size: 16px;
    }
`;

export const FirstSection = styled.div`
    width: 50%;
    display: flex;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Benefit = styled.img`
    margin-top: 7rem;
    margin-left: 1rem;
    width: 95%;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;
        margin-left: 0;
    }
`;

export const CompanyBenefits = styled.img`
    margin-top: 10rem;
    margin-left: 1rem;
    width: 98%;

    @media (max-width: 768px) {
        margin-top: 5rem;
        margin-left: 0;
        width: 100%;
    }
`;

export const RegisterSection = styled.img`
    margin-top: 10rem;
    margin-left: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        margin-top: 5rem;
        margin-left: 0;
    }
`;

export const PopupContainer = styled.div`
    position: fixed;
    bottom: 15px;
    right: 10px;
    z-index: 1000;
    background-color: #25d366;
    padding: 5px;
    border-radius: 50px;
    display: flex;
    align-items: center; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        bottom: 10px;
        right: 5px;
    }
`;

export const WhatsAppIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-top: 10px;

    @media (max-width: 768px) {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`;

export const WhatsAppLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
