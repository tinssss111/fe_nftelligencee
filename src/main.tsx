import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LucidProvider } from "./context/LucidProvider.tsx";
import { Buffer } from "buffer";
window.Buffer = Buffer;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LucidProvider>
      <App />
    </LucidProvider>
  </StrictMode>
);
