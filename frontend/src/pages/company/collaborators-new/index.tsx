// Styles
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { Services } from "@services/index";
import { ToastFullContext } from "@/contexts/ToastContext";
import { SimpleButton } from "@/components/buttons/simple";
import {
  Left,
  Container,
  Content,
  Subtitle,
  Title,
} from "./styles";

export interface IProps { }

const CompanyCollaboratorNew: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const { ShowToast } = ToastFullContext();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

  const [valid, setValid] = useState(false);

  const handleCollaborators = () => {
    navigate("/company/collaborators");
  }

  useEffect(() => {
    setValid(
      email.length !== 0 &&
      password.length > 5 &&
      name.length !== 0 &&
      cpf.length !== 0 &&
      cnpj.length !== 0 && 
      !!birthdate &&
      !Number.isNaN(birthdate?.getTime())
    )
  }, [email, password, name, cpf, cnpj, birthdate])

  const signUpErrorsFactory = (error: string) => {
    switch (error) {
      case "UserAlreadyExists":
        return "Email, CPF e/ou CNPJ já existem";
      default:
        return "Erro desconhecido";
    }
  };

  const handleRegister = async () => {
    try {
      if (!valid) return;

      await Services.Collaborator.register(password, email, name, cpf, cnpj, birthdate?.toLocaleDateString('en-US').replace("/","-").replace("/","-") ?? "");

      handleCollaborators();
    } catch (error: any) {
      ShowToast("error", signUpErrorsFactory(error));
    }
  };

  return (
    <Container>
      <Content>
        <Left>
          <Title>Novo colaborador</Title>
          <Subtitle>Cadastre um novo colaborador da sua empresa.</Subtitle>
            <TextField label="Digite o email" name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField margin="dense" label="Digite a senha" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <TextField margin="dense" label="Digite o nome" name="name" type="text" onChange={(e) => setName(e.target.value)}/>
            <TextField margin="dense" label="Digite o CPF" name="cpf" type="number" onChange={(e) => setCpf(e.target.value)}/>
            <TextField margin="dense" label="Digite o CNPJ" name="cnpj" type="number" onChange={(e) => setCnpj(e.target.value)}/>
            <DatePicker label="Selecione a data de nascimento" onChange={(e) => setBirthdate(new Date((e as any)?.$d ?? NaN) ?? undefined)}/>
            <SimpleButton title="Cadastrar" onClick={handleRegister} disabled={!valid}/>
            <SimpleButton title="Voltar" onClick={handleCollaborators}/>
        </Left>
      </Content>
    </Container>
  )
};

export default CompanyCollaboratorNew;
