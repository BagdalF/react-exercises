import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CountriesContextProvider from "./Contexts/CountriesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountriesContextProvider>
      <App />
    </CountriesContextProvider>
  </StrictMode>
);
