import React from "react";

import { MenuItemsGrid, MenuItem, Sidebar, Title, Logout } from "./styles";
import { UserTypeEnum } from "@/contexts/UserContext";

interface IProps {
  type: UserTypeEnum;
}

export const SimpleSidebar = (props: IProps) => (
  <Sidebar>
    <Title href={`/${props.type}`}>ContrataMEI</Title>
    <MenuItemsGrid>
      {props.type === UserTypeEnum.COMPANY ? <MenuItem href="/company/collaborators">Colaboradores</MenuItem> : undefined}
      <MenuItem href={`/${props.type}/nfse`}>Notas fiscais</MenuItem>
      <MenuItem href={`/${props.type}/contracts`}>Contratos</MenuItem>
    </MenuItemsGrid>
    <Logout href="/sign-in">Sair</Logout>
  </Sidebar>
);
