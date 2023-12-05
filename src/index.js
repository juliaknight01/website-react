import { createRoot } from 'react-dom';
import React from 'react';
import "./index.css";
import App from "./App";

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
