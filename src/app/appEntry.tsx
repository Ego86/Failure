import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/root";
import "./main.scss";

const root = document.querySelector("#root")!;

const nodeApp = (
  <BrowserRouter>
    <StrictMode>
      <LazyMotion features={domAnimation}>
          <Router />
      </LazyMotion>
    </StrictMode>
  </BrowserRouter>
);

createRoot(root).render(nodeApp);
