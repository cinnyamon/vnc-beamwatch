import { useState, useEffect } from "react";
import Dashboard from "./components/Dash";
import { Nav } from "./components/Nav";
import { socket } from "./lib/socket";
import { useSockets } from "./hooks/useSockets";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watch" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
