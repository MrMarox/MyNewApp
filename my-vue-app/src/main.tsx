import React from "react";
import ReactDOM from "react-dom/client";
import Site from "./pages/Site";
// import Site from "./pages/Site1";
import "./assets/styles/_global.scss";
import "./assets/styles/_reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Site />
    </React.StrictMode>,
);
