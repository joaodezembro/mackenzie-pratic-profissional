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
} from "./styles";

export interface IProps { }

const CompanyNfse: React.FC<IProps> = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Left>
          <Title>Notas fiscais</Title>
          <Subtitle>Visualize as NFSe emitidas pelos colaboradores.<br />Clique na NFSe para visualizar os detalhes dela.</Subtitle>
          <List>
            <ItemList>
              <ItemListTitle>Carolina Salazar</ItemListTitle>
              <ItemListSubtitle>Maio/23 (R$3500,00)</ItemListSubtitle>
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

export default CompanyNfse;
