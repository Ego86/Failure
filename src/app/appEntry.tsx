import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/app/layouts/baseLayout";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
const root = document.querySelector("#root")!;

const nodeApp = (
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);

createRoot(root).render(nodeApp);
