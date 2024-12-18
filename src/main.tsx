import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./il8n.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./il8n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      {" "}
      <App />{" "}
    </I18nextProvider>
  </StrictMode>
);
