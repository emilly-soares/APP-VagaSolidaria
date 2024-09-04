import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  width:40%;
  margin: 0 auto;
`;

export const Message = styled.p`
  text-align: center;
  color: #333;
`;

export const VacancySection = styled.div`
  margin-bottom: 20px;
`;

export const VacancyTitle = styled.h2`
  font-size: 24px;
  color: #2B3377;
`;

export const CandidatesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VacancyCard = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const VacancyName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const VacancyEmail = styled.p`
  font-size: 16px;
`;

export const CandidateNeighborhood = styled.p`
  font-size: 16px;
  color: #4169E1;
`;

export const ViewCandidatesButton = styled.button`
cursor: pointer;
border: 1px solid;
border-color: #FFFFFF;
padding: 0.5rem;
font-weight: bold;
text-decoration: none;
font-size: 18px;
color: #000;
margin-right: 20px;
&:hover {
    text-decoration: underline;
}
`;