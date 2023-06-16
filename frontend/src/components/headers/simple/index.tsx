import React from "react";

import { Header, Title } from "./styles";

interface IProps {
  logo?: boolean;
}

export const SimpleHeader = (props: IProps) => (
  <Header>
    {(props.logo ?? true) ?? (<Title>ContrataMEI</Title>)}
  </Header>
);
