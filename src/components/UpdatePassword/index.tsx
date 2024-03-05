import React, { useState } from 'react';
import api from '../../services/api';
import * as S from './style';
import logoImg from '../../assets/logo.svg';
import vacancyCircle2 from '../../assets/vacancyCircle2.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface UpdatePasswordFormProps {
  onSuccess: () => void;
}

const UpdatePasswordFormProps: React.FC<UpdatePasswordFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post('/updatePassword', {
        email,
        token,
        newPassword
      });
      setError('');
      onSuccess();

    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Ocorreu um erro ao alterar');
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
        <S.ButtonRegister to="/register">Cadastre-se</S.ButtonRegister>
        <S.Description>Você encontrará oportunidades para impactar positivamente a comunidade</S.Description>
      </S.LeftSection>

      <S.RightSection>
        <S.LoginFormContainer onSubmit={handleSubmit}>

          <S.Title>Redefinir Senha</S.Title>

          <S.InputLabel >Email:</S.InputLabel>
          <S.Input
            placeholder="Insira seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <S.InputLabel >Token:</S.InputLabel>
          <S.Input
            placeholder="Insira seu token"
            type="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />

          <S.InputLabel>Password:</S.InputLabel>
          <S.InputContainer>
            <S.Input
              placeholder="insira sua senha"
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <S.TogglePasswordVisibility onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </S.TogglePasswordVisibility>

          </S.InputContainer>

          <S.Login to="/login">Voltar ao Login</S.Login>

          {error && <S.Error>{error}</S.Error>}
          <S.SubmitButton type="submit">Confirmar Alteração</S.SubmitButton>
        </S.LoginFormContainer>
      </S.RightSection>
    </S.Container>
  );
};

export default UpdatePasswordFormProps;
