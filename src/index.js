import React from "react";

import { createRoot } from "react-dom"; // Import createRoot from react-dom
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import server from "./ServerIndex/serverIndex";

if (process.env.NODE_ENV === "development") {
  server();
}

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
