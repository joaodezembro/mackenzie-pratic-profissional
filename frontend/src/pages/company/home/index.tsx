// Styles
import {
  Left,
  Container,
  Content,
  Subtitle,
  Title,
} from "./styles";

export interface IProps { }

const CompanyHome: React.FC<IProps> = () => (
    <Container>
      <Content>
        <Left>
          <Title>ContrataMEI</Title>
          <Subtitle>Selecione um item do menu ao lado para começar a usar a plataforma</Subtitle>
        </Left>
      </Content>
    </Container>
  );

export default CompanyHome;
