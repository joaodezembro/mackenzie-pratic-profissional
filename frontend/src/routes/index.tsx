/* eslint-disable no-nested-ternary */
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import SignUp from "../pages/SignUp";
// import Home from "../pages/Home";
import Home from "@pages/home";
import SignIn from "@pages/sign-in";
import { BodyContainer } from "./styles";
import { UserFullContext, UserTypeEnum } from "@/contexts/UserContext";

export interface IMainRoutesProps { }

const MainRoutes: React.FC<IMainRoutesProps> = () => {
  const { GetUserData } = UserFullContext();
  // function DefaultLayoult(children: any, sidebar = true) {
  //   return (
  //     <>
  //       <CompostHeader />
  //       {GetUserData().companyRelation === "hired" && sidebar ? (
  //         <HiredSideBar />
  //       ) : GetUserData().companyRelation === "contractor" && sidebar  ? (
  //         <ContractorSideBar />
  //       ) : (
  //         <div />
  //       )}
  //       <BodyContainer>{children}</BodyContainer>
  //     </>
  //   );
  // }

  function PrivateRoute(children: any, sidebar = true) {
    // return GetUserData().sessionToken ? (
    //   DefaultLayoult(children, sidebar)
    // ) : (
    //   <Navigate to="/sign-in" />
    // );
  }

  return (
    <Routes>
      <>
        {GetUserData().type === UserTypeEnum.COLLABORATOR && (
          <>
            {/* <Route path="/hired" element={PrivateRoute(<HomeHired />)} /> */}
          </>
        )}
        {GetUserData().type === UserTypeEnum.COMPANY && (
          <>
            {/* <Route
              path="/notifications"
              element={PrivateRoute(<CentralNotifications />)}
            /> */}
          </>
        )}
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </>
    </Routes>
  );
};

export default MainRoutes;
