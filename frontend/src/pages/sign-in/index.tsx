import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Services } from "@services/index";

// Styles
import {
  Center,
  Container,
  Content,
  Link,
  Subtitle,
  Title,
} from "./styles";
import { UserFullContext } from "@/contexts/UserContext";
import { ToastFullContext } from "@/contexts/ToastContext";
import { SimpleButton } from "@/components/buttons/simple";
import { SimpleHeader } from "@/components/headers/simple";

export interface ISignInProps { }

const SignIn: React.FC<ISignInProps> = () => {
  const { Login } = UserFullContext();
  const { ShowToast } = ToastFullContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(email.length !== 0 && password.length > 5)
  }, [email, password])
  
  
  const signInErrorsFactory = (error: string) => {
    switch (error) {
      case "UserDontExist":
        return "Usuário não existe";
      default:
        return "Erro desconhecido";
    }
  };

  const handleSignIn = async () => {
    try {
      if (!valid) return;

      const { token, user } = await Services.Account.signIn(email, password);

      Login({
        sessionToken: token,
        type: user.type ?? "",
        cnpj: user?.company?.cnpj ?? "",
        cpf: user.cpf,
        email: user.email,
        name: user.name,
      });

      const relationRoutes: Record<string, string> = {
        company: "/company",
        collaborator: "/collaborator",
      }

      const route = relationRoutes[user.type ?? ""];
      navigate(route)
    } catch (error: any) {
      ShowToast("error", signInErrorsFactory(error));
    }
  };

  return (
    <Container>
      <SimpleHeader/>
      <Content>
        <Center>
          <Title>ContrataMEI</Title>
          <Subtitle>Faça o login para acessar o sistema ou&nbsp;<Link href="/sign-up">clique aqui</Link>&nbsp;para se registrar</Subtitle>
          <TextField label="Digite seu email" name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <TextField margin="dense" label="Digite sua senha" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <SimpleButton title="Entrar" onClick={handleSignIn} disabled={!valid}/>
        </Center>
      </Content>
    </Container>
  );
};

export default SignIn;
