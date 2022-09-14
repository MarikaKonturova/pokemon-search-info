import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { pokedexApi as api } from "./services/pokedexApi";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </HashRouter>
  </React.StrictMode>
);
