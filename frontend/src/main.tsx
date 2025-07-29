import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RefetchContextProvider } from "./context/RefetchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RefetchContextProvider>
      <App />
    </RefetchContextProvider>
  </StrictMode>
);
