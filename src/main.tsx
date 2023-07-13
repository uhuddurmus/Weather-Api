import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import '~bootstrap/scss/bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
