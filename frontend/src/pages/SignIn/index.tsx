import { useState } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Services } from "@services/index";
import {
  SimpleHeader,
  SimpleInput,
  SimpleButton,
  PasswordInput,
} from "@/components";

// Styles
import {
  ActionContent,
  Container,
  Content,
  ForgotPassword,
  Title,
} from "./styles";
import { UserFullContext } from "@/contexts/UserContext";
import { ToastFullContext } from "@/contexts/ToastContext";
import { ModalFullContext } from "@/contexts/ModalContext";

export interface ISignInProps { }

const SignIn: React.FC<ISignInProps> = () => {
  const theme = useTheme();
  const { Login } = UserFullContext();
  const { ShowToast } = ToastFullContext();
  const navigate = useNavigate();
  const signInErrorsFactory = (error: string) => {
    switch (error) {
      case "UserDoesNotExist":
      case "AccountDoesNotExist":
        return "Usuário não existe";
      case "AccountNeedPasswordReset":
        return "Sua senha precisa ser resetada";
      case "SessionAlreadyExists":
        return "Já existe uma sessāo ativa com essa conta";
      default:
        return "Erro desconhecido";
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const handleSignIn = async () => {
    try {
      const { sessionToken, refreshToken, userInfo } = await Services.Account.signIn(email, password);

      Login({
        email: userInfo.email,
        cpf: userInfo.cpf,
        cnpj: userInfo.associatedCnpj ?? "",
        name: userInfo.userName,
        sessionToken,
        refreshToken,
        avatar: userInfo.userAvatar,
        companyRelation: userInfo.companyRelation ?? "",
        companyType: userInfo.companyType ?? "",
        digitalCertified: userInfo.digitalCertified,
        digitalCertifiedIsValid: userInfo.digitalCertifiedIsValid,
        enabledNfse: userInfo.enabledNfse,
        companyName: userInfo.companyName ?? "",
      });

      const relationRoutes: Record<string, string> = {
        hired: "/hired",
        contractor: "/contractor",
      }

      const route = relationRoutes[userInfo.companyRelation ?? ""];

      navigate(route ?? "/associate-company")
    } catch (error: any) {
      ShowToast("error", signInErrorsFactory(error));
    }
  };

  return (
    <Container>
      <SimpleHeader />
      <Content>
        <Title>Login</Title>
        <SimpleInput
          type="text"
          label="E-mail"
          onChange={event => onChangeEmail(event.target.value)}
          value={email}
          marginBottom={24}
        />
        <PasswordInput
          label="Senha"
          onChange={event => onChangePassword(event.target.value)}
          value={password}
        />
        <ForgotPassword onClick={() => navigate("/forgot-password")}>Esqueceu a senha?</ForgotPassword>
        <ActionContent>
          {/* <SimpleButton
            title="Cadastro"
            onClick={() => {}}
            marginRight={24}
            color={theme.colors.white}
            labelColor={theme.colors.primary_branding}
          /> */}
          <SimpleButton
            title="Entrar"
            onClick={() => handleSignIn()}
            color={
              email && password
                ? theme.colors.primary_branding
                : theme.colors.neutral[400]
            }
          />
        </ActionContent>
      </Content>
    </Container>
  );
};

export default SignIn;
