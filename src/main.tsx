import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./scss/_variables.scss";
import "./scss/_global.scss";
import "./scss/_mixins.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
