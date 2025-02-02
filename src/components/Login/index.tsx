import React, { useState } from 'react';
import api from '../../services/api';
import Cookies from 'js-cookie';
import * as S from './style';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import vacancyCircle2 from '../../assets/vacancyCircle2.png';
import { TOKEN_KEY, USER_ID } from '../../services/authconfig';
interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/userAuthentication', {
        email,
        password
      });

      const { token, user } = response.data;

      Cookies.set(TOKEN_KEY, token, { expires: 1 });
      Cookies.set(USER_ID, user, { expires: 1 })

      setEmail('');
      setPassword('');
      setError('');
      onSuccess();

    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Ocorreu um erro ao tentar fazer login');
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

          <S.Title>Login</S.Title>

          <S.InputLabel >Email:</S.InputLabel>
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

          <S.ResetPassword to="/resetPassword">Esqueceu a Senha?</S.ResetPassword>

          {error && <S.Error>{error}</S.Error>}

          <S.SubmitButton type="submit">Acessar</S.SubmitButton>

        </S.LoginFormContainer>

      </S.RightSection>

    </S.Container>
  );
};

export default LoginForm;
