import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from "@pages/home";
import SignIn from "@pages/sign-in";
import SignUp from "@pages/sign-up";
import CompanyHome from "@pages/company/home";
import { UserTypeEnum } from "@services/account-service";
import CompanyCollaborators from "@pages/company/collaborators";
import CompanyCollaboratorNew from "@pages/company/collaborators-new";
import CompanyNfse from "@pages/company/nfse";
import CompanyContracts from "@pages/company/contracts";
import CompanyContractsNew from "@pages/company/contracts-new";
import { UserFullContext } from "@/contexts/UserContext";
import { SimpleSidebar } from "@/components/sidebar/simple";
import { BodyContainer, SidebarContainer } from "./styles";
import { SimpleHeader } from "@/components/headers/simple";

export interface IMainRoutesProps { }

const MainRoutes: React.FC<IMainRoutesProps> = () => {
  const { GetUserData } = UserFullContext();

  const PrivateRoute = (children: any) => GetUserData().sessionToken ?
    children : (<Navigate to="/sign-in" />)

  const Sidebar = (children: any, userType: UserTypeEnum) => (
      <>
        <SimpleHeader logo={false} />
        <SidebarContainer>
          <SimpleSidebar type={userType} />
          <BodyContainer>{children}</BodyContainer>
        </SidebarContainer>
      </>
  )

  return (
    <Routes>
      <>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Company */}
        {GetUserData().type === UserTypeEnum.COMPANY && (
          <>
            <Route path="/company" element={PrivateRoute(
              Sidebar(<CompanyHome />, GetUserData().type as UserTypeEnum)
            )} />
            <Route path="/company/collaborators" element={PrivateRoute(
              Sidebar(<CompanyCollaborators />, GetUserData().type as UserTypeEnum)
            )} />
            <Route path="/company/collaborators/new" element={PrivateRoute(
              Sidebar(<CompanyCollaboratorNew />, GetUserData().type as UserTypeEnum)
            )} />
            <Route path="/company/nfse" element={PrivateRoute(
              Sidebar(<CompanyNfse />, GetUserData().type as UserTypeEnum)
            )} />
            <Route path="/company/contracts" element={PrivateRoute(
              Sidebar(<CompanyContracts />, GetUserData().type as UserTypeEnum)
            )} />
            <Route path="/company/contracts/new" element={PrivateRoute(
              Sidebar(<CompanyContractsNew />, GetUserData().type as UserTypeEnum)
            )} />
          </>
        )}
      </>
    </Routes>
  )
};

export default MainRoutes;
