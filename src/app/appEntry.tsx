import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { domAnimation, LazyMotion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/root";
import store from "@/shared/store";
import "./main.scss";

const root = document.querySelector("#root")!;

const nodeApp = (
  <BrowserRouter>
    <StrictMode>
      <LazyMotion features={domAnimation}>
        <Provider store={store}>
          <Router />
        </Provider>
      </LazyMotion>
    </StrictMode>
  </BrowserRouter>
);

createRoot(root).render(nodeApp);
