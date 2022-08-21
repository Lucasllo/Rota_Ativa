import "./reset.css";
import "./base.css";
import { Cabecalho } from "./cabecalho/cabecalho";
import { Route, Routes, useLocation } from "react-router-dom";
import { Index } from "./index/index";
import { Rodape } from "./rodape/rodape";
import { Cadastro } from "./cadastro/cadastro";
import { Login } from "./login/login";
import { useState } from "react";

function App() {

  return (
    <>
      <Cabecalho />
      <Routes>
        <Route element={<Index />} exact path="/"></Route>
        <Route element={<Cadastro />} exact path="/cadastro"></Route>
        <Route element={<Login />} exact path="/login"></Route>
      </Routes>
      { useLocation().pathname == "/" 
      ? 
      <Rodape />
      :
      ""
      }
    </>
  );
}

export default App;
