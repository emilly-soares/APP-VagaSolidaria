import React, { useState } from 'react';
import api from '../../services/api';
import * as S from './style';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import vacancyCircle2 from '../../assets/vacancyCircle2.png';

interface UserFormProps {
  onSuccess: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSuccess }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post('/user', {
        name,
        email,
        password,
        isAdmin,
      });

      setName('');
      setEmail('');
      setPassword('');
      setIsAdmin(false);
      setError('');
      onSuccess();

    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Ocorreu um erro ao cadastrar');
      }
    }
  };

  return (

    <S.Container>

      <S.LeftSection>
        <S.GroupLogo to="/" >
          <S.Logo src={logoImg} alt="Logo VagaSolidária" />
          <S.PlatformTitle>VagaSolidária</S.PlatformTitle>
        </S.GroupLogo>
        <div>
          <S.Vacancy src={vacancyCircle2} alt="Encontre sua Vaga" />
        </div>
        <S.Text>Não tem cadastro?</S.Text>
        <S.ButtonRegister to="/login">Login</S.ButtonRegister>
        <S.Description>Você encontrará oportunidades para impactar positivamente a comunidade</S.Description>
      </S.LeftSection>


      <S.RightSection>
        <S.LoginFormContainer onSubmit={handleSubmit}>

          <S.Title>Cadastre-se</S.Title>

          <S.InputLabel>Nome:</S.InputLabel>
          <S.Input placeholder="insira seu nome completo" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <S.InputLabel>Email:</S.InputLabel>
          <S.Input placeholder="insira seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <S.InputLabel>Password:</S.InputLabel>
          <S.InputContainer>
            <S.Input
              placeholder="insira sua senha"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <S.TogglePasswordVisibility onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </S.TogglePasswordVisibility>

          </S.InputContainer>

          {error && <S.Error>{error}</S.Error>}

          <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>

        </S.LoginFormContainer>
      </S.RightSection>

    </S.Container>
  );
};

export default UserForm;