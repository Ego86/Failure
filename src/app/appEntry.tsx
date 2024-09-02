import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { domAnimation, LazyMotion } from "framer-motion";
import Router from "./router/root";
import { Provider } from "react-redux";
import store from "@/shared/store";

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
