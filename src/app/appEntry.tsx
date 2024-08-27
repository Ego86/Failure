import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/app/layouts/baseLayout";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { domAnimation, LazyMotion } from "framer-motion";
const root = document.querySelector("#root")!;

const nodeApp = (
  <BrowserRouter>
    <StrictMode>
      <LazyMotion features={domAnimation}>
      <App />
      </LazyMotion>
    </StrictMode>
  </BrowserRouter>
);

createRoot(root).render(nodeApp);
