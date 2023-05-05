import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { UserFullContext, UserTypeEnum } from "@/contexts/UserContext";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const navigate = useNavigate();
  const { GetUserData } = UserFullContext();

  useEffect(() => {
    if (!GetUserData().sessionToken) {
      navigate("/sign-in");
    } else if (GetUserData().type === UserTypeEnum.COLLABORATOR) {
      navigate("/collaborator");
    } else if (GetUserData().type === UserTypeEnum.COMPANY) {
      navigate("/company");
    }
  }, []);

  return (
    <Container />
  );
};

export default Home;
