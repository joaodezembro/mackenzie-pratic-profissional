import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export enum UserTypeEnum {
  COMPANY = "company",
  COLLABORATOR = "collaborator",
}

type UserStateType = {
  email: string;
  cpf: string;
  cnpj: string;
  name: string;
  sessionToken: string;
  type: UserTypeEnum | string;
};

type LoginResponse = {
  email: string;
  cpf: string;
  cnpj: string;
  name: string;
  sessionToken: string;
  type: UserTypeEnum;
};

export type UserContextType = {
  Login: (loginResponse: LoginResponse) => void;
  Logout: () => void;
  GetUserData: () => UserStateType;
  SetUserDataKeyValue: (
    key: keyof UserStateType,
    value: string,
  ) => void;
};

const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userState, setUserState] = useState<UserStateType>({
    email: localStorage.getItem("email") || "",
    cpf: localStorage.getItem("cpf") || "",
    cnpj: localStorage.getItem("cnpj") || "",
    name: localStorage.getItem("name") || "",
    sessionToken: localStorage.getItem("sessionToken") || "",
    type: localStorage.getItem("type") || "",
  });

  const Login = (loginResponse: LoginResponse) => {
    setUserState({
      email: loginResponse.email,
      cpf: loginResponse.cpf,
      cnpj: loginResponse.cnpj,
      name: loginResponse.name,
      sessionToken: loginResponse.sessionToken,
      type: loginResponse.type,
    });
    localStorage.setItem("email", loginResponse.email || "");
    localStorage.setItem("cpf", loginResponse.cpf || "");
    localStorage.setItem("cnpj", loginResponse.cnpj || "");
    localStorage.setItem("name", loginResponse.name || "");
    localStorage.setItem("sessionToken", loginResponse.sessionToken || "");
    localStorage.setItem(
      "type",
      loginResponse.type || "",
    );
  };

  const GetUserData = useCallback(() => userState, [userState]);

  const Logout = () => {
    localStorage.clear();
    setUserState({
      email: "",
      cpf: "",
      cnpj: "",
      name: "",
      sessionToken: "",
      type: "",
    });
  };

  const SetUserDataKeyValue = (
    key: keyof UserStateType,
    value: string,
  ) => {
    setUserState(state => ({ ...state, [key]: value }));
    localStorage.setItem(key, value);
  };

  const userProviderValue = useMemo(
    () => ({ Login, Logout, GetUserData, SetUserDataKeyValue }),
    [Login, Logout, GetUserData],
  );

  return (
    <UserContext.Provider value={userProviderValue}>
      {children}
    </UserContext.Provider>
  );
};

export function UserFullContext() {
  const context = useContext(UserContext);
  return context;
}
