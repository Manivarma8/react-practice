import React from "react";
import "./style.css";
import App from "./app";
import Reactdom from "react-dom";

const root = Reactdom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>  
        <App />
    </React.StrictMode>
)