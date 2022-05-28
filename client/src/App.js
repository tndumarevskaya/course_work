import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavigationBar from "./components/NavigationBar";
import './App.css';
import { observer } from "mobx-react-lite";
import { check } from "./http/userAPI";
import { Context } from './index';
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(data);
      user.setIsAuthorization(true);
    }).finally(() => setLoading(false))
  }, []);

  return (
    <BrowserRouter className="App">
      <NavigationBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
