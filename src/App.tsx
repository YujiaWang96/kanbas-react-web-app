import React from "react";
import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./pages/labs/index";
import Kanbas from "./pages/kanbas";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/kanbas" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
