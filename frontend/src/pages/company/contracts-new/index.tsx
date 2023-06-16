// Styles
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Services } from "@services/index";
import { MenuItem, Select } from "@mui/material";
import { MuiFileInput } from 'mui-file-input'
import { ToastFullContext } from "@/contexts/ToastContext";
import { SimpleButton } from "@/components/buttons/simple";
import {
  Left,
  Container,
  Content,
  Subtitle,
  Title,
  Form,
} from "./styles";

export interface IProps { }

const CompanyContractsNew: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const { ShowToast } = ToastFullContext();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);

  const [valid, setValid] = useState(false);

  const handleContracts = () => {
    navigate("/company/contracts");
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
        return "Usuário já existe";
      default:
        return "Erro desconhecido";
    }
  };

  const handleRegister = async () => {
    try {
      if (!valid) return;

      await Services.Account.signUp(password, email, name, cpf, cnpj, birthdate?.toLocaleDateString('en-US').replace("/","-").replace("/","-") ?? "");

      handleContracts();
    } catch (error: any) {
      ShowToast("error", signUpErrorsFactory(error));
    }
  };

  const handleSetCollaborator = () => {

  }

  const handleSetType = () => {

  }

  return (
    <Container>
      <Content>
        <Left>
          <Title>Novo contrato</Title>
          <Subtitle>Cadastre e envie um novo contrato para um colaborador.</Subtitle>
            <Form>
              <Select defaultValue="10" margin="dense" name="collaborator" label="Colaborador" onChange={handleSetCollaborator}>
                <MenuItem value="10">Carolina Salazar</MenuItem>
                <MenuItem value="20">Dario Perez</MenuItem>
              </Select>
              <Select defaultValue="10" margin="dense" name="type"  label="Tipo de contrato" onChange={handleSetType}>
                <MenuItem value="10">Prestação de serviço</MenuItem>
                <MenuItem value="20">NDA</MenuItem>
                <MenuItem value="20">Outro</MenuItem>
              </Select>
              <MuiFileInput margin="dense" name="file" label="PDF do contrato"/>
            </Form>
            <SimpleButton title="Enviar" onClick={handleRegister} disabled={!valid}/>
            <SimpleButton title="Voltar" onClick={handleContracts}/>
        </Left>
      </Content>
    </Container>
  )
};

export default CompanyContractsNew;
