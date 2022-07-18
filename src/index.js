import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';

//Beim Laden lokaler json-Files -> Fehler: Quellübergreifende (Cross-Origin) Anfrage blockiert
//Temporäre Lösung: about:config öffnen + security.fileuri.strict_origin_policy auf false setzen
//BrowserRouter doesn't work for npm run build
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);