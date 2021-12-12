import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import Nav from "./components/Nav";
import About from "./views/About";
import Shop from "./views/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Byty from "./views/hledani/byty";
import Domy from "./views/hledani/domy";
import Projekty from "./views/hledani/projekty";
import Ostatni from "./views/hledani/ostatni";
import Pozemky from "./views/hledani/pozemky";
import Komercni from "./views/hledani/komercni";
import Inzerat from "./views/Inzerat";
import Bruh from "./Bruh"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/hledani/byty" element={<Byty />} />
        <Route path="/hledani/domy" element={<Domy />} />
        <Route path="/hledani/pozemky" element={<Pozemky />} />
        <Route path="/hledani/projekty" element={<Projekty />} />
        <Route path="/hledani/komercni" element={<Komercni />} />
        <Route path="/hledani/ostatni" element={<Ostatni />} />
        <Route path="/inzerat" element={<Inzerat />} />
        <Route path="/bruh" element={<Bruh />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
