/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import theme from "./global/theme";
import "./global/styles.css";
// import { ModalProvider } from "./contexts/ModalContext";
import { ToastProvider } from "./contexts/ToastContext";
// import { ModalList } from "./components/Modal";
import { ToastComponent } from "./components/toast";
import { UserProvider } from "./contexts/UserContext";
import { EnvironmentConfig } from "./configs/enviroment-config";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <ModalProvider> */}
          <ToastProvider>
            <UserProvider>
              <ThemeProvider theme={theme}>
                <MainRoutes />
                <ToastComponent />
                {/* <ModalList /> */}
              </ThemeProvider>
            </UserProvider>
          </ToastProvider>
        {/* </ModalProvider> */}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
