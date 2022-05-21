import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/NavigationBar";
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <NavigationBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
