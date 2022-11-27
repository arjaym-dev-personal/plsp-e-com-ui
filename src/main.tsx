import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { PersistGate, Provider, store, persistor } from "redux/store";

import "./scss/_global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
