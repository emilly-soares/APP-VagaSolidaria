// style.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #565656;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const JobTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  color: #2B3377;
`;

export const JobDetails = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const TextInput = styled.input`
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc; 
  font-size: 16px;
  border-radius: 4px;
  height: 35px
`;

export const Button = styled.button`
  padding: 20px 30px;
  background-color: #2B3377;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1f254d;
  }
`;
