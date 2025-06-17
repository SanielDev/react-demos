import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Greet from "./component/Greet.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);