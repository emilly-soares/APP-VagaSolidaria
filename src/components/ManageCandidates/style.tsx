import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Message = styled.p`
  text-align: center;
  color: #333;
`;

export const WhatsappLink = styled.a`
    color: #09431f; 
    text-decoration: none; 
    font-weight: bold;
    
    &:hover {
        color: #128c7e; 
    }
`;

export const VacancySection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const VacancyTitle = styled.h2`
  font-size: 24px;
  color: #2B3377;
  margin: 0;
`;

export const CandidatesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CandidateCard = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CandidateName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CandidateInfo = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const CandidateNeighborhood = styled.p`
  font-size: 16px;
  color: #777;
`;
