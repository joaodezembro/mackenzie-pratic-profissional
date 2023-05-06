import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';

// Styles
import { DatePicker } from "@mui/x-date-pickers";
import {
  Center,
  Container,
  Content,
  Link,
  Subtitle,
  Title,
} from "./styles";
import { SimpleButton } from "@/components/buttons/simple";
import { SimpleHeader } from "@/components/headers/simple";

export interface ISignInProps { }

const SignUp: React.FC<ISignInProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(
      email.length !== 0 &&
      password.length > 5 &&
      name.length !== 0 &&
      cpf.length !== 0 &&
      cnpj.length !== 0 && 
      !birthdate
    )
  }, [email, password])

  return (
    <Container>
      <SimpleHeader/>
      <Content>
        <Center>
          <Title>ContrataMEI</Title>
          <Subtitle>Faça o cadsatro como empresa para acessar o sistema ou&nbsp;<Link href="/sign-in">clique aqui</Link>&nbsp;se já for registrado</Subtitle>
          {valid}
          <TextField label="Digite seu email" name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <TextField margin="dense" label="Digite sua senha" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <TextField margin="dense" label="Digite seu nome" name="name" type="text" onChange={(e) => setName(e.target.value)}/>
          <TextField margin="dense" label="Digite seu CPF" name="cpf" type="text" onChange={(e) => setCpf(e.target.value)}/>
          <TextField margin="dense" label="Digite seu CNPJ" name="cnpj" type="text" onChange={(e) => setCnpj(e.target.value)}/>
          <DatePicker label="Selecione a data de seu nascimento" onChange={(e) => setBirthdate(new Date((e as any).$d))}/>
          <SimpleButton title="Registrar" disabled={!valid}/>
        </Center>
      </Content>
    </Container>
  );
};

export default SignUp;
