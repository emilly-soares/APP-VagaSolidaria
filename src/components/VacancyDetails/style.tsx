import styled from 'styled-components';

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
  align-items: flex-start;
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
  border-radius: 4px;
  height: 45px;
`;

export const Report = styled.img`
     margin-left: 1rem; 
     width: 90%;
`;

export const Clock = styled.img`
     width: 25px;
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