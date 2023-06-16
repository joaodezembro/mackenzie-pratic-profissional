// Styles
import { useNavigate } from "react-router-dom";
import InfoSvg from "@assets/info.svg";
import {
  Left,
  Container,
  Content,
  Subtitle,
  Title,
  List,
  ItemList,
  ItemListActionsButton,
  ItemListActions,
  ItemListTitle,
  ItemListSubtitle,
  Header,
} from "./styles";
import { SimpleButton } from "@/components/buttons/simple";

export interface IProps { }

const CompanyContracts: React.FC<IProps> = () => {
  const navigate = useNavigate();

  const handleNewContract = () => {
    navigate("/company/contracts/new");
  }

  return (
    <Container>
      <Content>
        <Left>
          <Title>Contratos</Title>
          <Subtitle>Gerencie os contratos da sua empresa.<br />Crie, visualize e envie contratos aos colaboradores.</Subtitle>
          <Header>
            <SimpleButton title="Envie novo contrato" onClick={handleNewContract}/>
          </Header>
          <List>
            <ItemList>
              <ItemListTitle>Carolina Salazar</ItemListTitle>
              <ItemListSubtitle>Prestação de serviços (22/05/2023)</ItemListSubtitle>
              <ItemListActions>
                <ItemListActionsButton src={InfoSvg} />
              </ItemListActions>
            </ItemList>
          </List>
        </Left>
      </Content>
    </Container>
  )
};

export default CompanyContracts;
