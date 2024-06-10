import React, { useState } from 'react';
import api from '../../services/api';
import * as S from './style';
import logoImg from '../../assets/logo.svg';
import vacancyCircle2 from '../../assets/vacancyCircle2.png';

interface ResetPasswordFormProps {
  onSuccess: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSuccess }) => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/resetPassword', { email });
      onSuccess();
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error);
      } else {
        setError('Ocorreu um erro ao tentar enviar o e-mail de redefinição de senha');
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

          <S.Login to="/login">Voltar ao Login</S.Login>

          {error && <S.Error>{error}</S.Error>}
          <S.SubmitButton type="submit">Enviar E-mail de Redefinição</S.SubmitButton>
          
        </S.LoginFormContainer>
      </S.RightSection>

    </S.Container>
  );
};

export default ResetPasswordForm;
