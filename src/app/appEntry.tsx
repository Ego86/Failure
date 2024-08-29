import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { domAnimation, LazyMotion } from "framer-motion";
import Router from "./router/root";
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
