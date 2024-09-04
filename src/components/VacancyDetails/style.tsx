import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  padding-left: 10rem;
`;

export const SectionTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  span {
    color: #565656;
  }
  .highlight {
    color: #FFCA1D;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsLeft = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const DetailsRight = styled.div`
  flex: 1;
  padding-top: 5rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const JobTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const JobTitle = styled.h2`
  font-size: 32px;
  color: #2B3377;
  margin-right: 20px;
`;

export const JobDetails = styled.p`
  font-size: 14px;
  color: #2B3377;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify;
  line-height: 1.6; 
  margin-top: 10px; 
  margin-bottom: 20px; 
`;

export const TextInput = styled.input`
  width: 65%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc; 
  font-size: 16px;
  border-radius: 5px;
  height: 45px;
  outline:0;
`;

export const Report = styled.img`
  margin-top: 2rem; 
  margin-left: 1rem; 
  width: 90%;
`;

export const Clock = styled.img`
     width: 25px;
`;

export const MapIcon = styled.img`
     width: 20px;
`;

export const Button = styled.button`
  padding: 25px 30px;
  background-color: #2B3377;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1f254d;
  }
`;

export const CompanyInfo = styled.div`
  margin-top: 20px;
  text-align: center; 
`;

export const CompanyAddress = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #2B3377;
`;

export const CompanyLogo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

export const CompanyPhone = styled.a`
  font-size: 16px;
  color: #2B3377;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const FirstSection = styled.div`
    width: 50%;
    display:flex;
    margin-bottom: 2rem;
`;

export const Caption = styled.p`
    font-size: 25px;
    margin-bottom: 0.8rem; 
    width: 70%;
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

export const ModalButton = styled.button`
    background-color: #4169E1; 
    color: white;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #285e98; 
    }
`;

export const WhatsappIcon = styled.img`
  width: 24px;
  margin-right: 10px;
  color: #565656;
`;

