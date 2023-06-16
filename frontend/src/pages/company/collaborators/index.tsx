// Styles
import { useNavigate } from "react-router-dom";
import InfoSvg from "@assets/info.svg";
import DeleteSvg from "@assets/trash_can.svg";
import { useEffect, useState } from "react";
import { Services } from "@services/index";
import { UserModel } from "@services/account-service";
import {
  Left,
  Container,
  Content,
  Subtitle,
  Title,
  Header,
  List,
  ItemList,
  ItemListActionsButton,
  ItemListActions,
  ItemListTitle,
  ModalContainer,
  Modal
} from "./styles";
import { SimpleButton } from "@/components/buttons/simple";

export interface IProps { }

const CompanyCollaborators: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const [collaborators, setCollaborators] = useState([] as UserModel[]);
  const [details, setDetails] = useState<UserModel | undefined>();

  const handleNewCollaborator = () => {
    navigate("/company/collaborators/new");
  }

  const getCollaborators = async () => {
    const collaborators = await Services.Collaborator.list();
    setCollaborators(collaborators);
  }

  useEffect(() => {
    getCollaborators();
  }, [false])

  return (
    <>
      <Container>
        <Content>
          <Left>
            <Title>Colaboradores</Title>
            <Subtitle>Gerencie os colaboradores da sua empresa.<br />Crie, edite, visualize e inative colaboradores.</Subtitle>
            <Header>
              <SimpleButton title="Criar novo colaborador" onClick={handleNewCollaborator}/>
            </Header>
            <List>
              {collaborators.map(collaborator => (
                <ItemList onClick={() => {setDetails(collaborator)}}>
                  <ItemListTitle>{collaborator.name}</ItemListTitle>
                  <ItemListActions>
                    <ItemListActionsButton src={DeleteSvg} />
                  </ItemListActions>
                </ItemList>
              ))}
            </List>
          </Left>
        </Content>
      </Container>
      {details &&
        <Modal onClick={() => {setDetails(undefined)}}>
          <ModalContainer>
            <span>Id: <b>{details.id}</b></span>
            <span>Nome: <b>{details.name}</b></span>
            <span>Email: <b>{details.email}</b></span>
            <span>CPF: <b>{details.cpf}</b></span>
          </ModalContainer>
        </Modal>
      }
    </>
  )
};

export default CompanyCollaborators;
