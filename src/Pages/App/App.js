import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Formulario/Formulario";
import Header from "../../Components/Header/Header";
import PopUp from "../../Utils/PopUp";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import ApiService from "../../Data/ApiService";

function App() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    ApiService.ListaAutores()
      .then((res) => setAutores(res.data))
      .catch((err) =>
        PopUp.exibeMensagem("error", "Falha ao carregar autores")
      );
  }, []);

  const removerAutor = (id) => {
    const autoresAtualizados = autores.filter((autor) => autor.id !== id);

    ApiService.RemoveAutor(id)
      .then((res) => {
        if (res.message === "deleted") {
          setAutores(autoresAtualizados);
          PopUp.exibeMensagem("success", "Autor removido");
        }
      })
      .catch((err) => PopUp.exibeMensagem("error", "Falha ao remover Autor"));
  };

  const escutaSubmit = (autor) => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(ApiService.TrataErros)
      .then((res) => {
        if (!res.mensagem === "success") {
          return;
        }
        setAutores([...autores, autor]);
        PopUp.exibeMensagem("success", "Autor adicionado");
      })
      .catch((err) => PopUp.exibeMensagem("error", "Falha ao adicionar autor"));
  };

  return (
    <Fragment>
      <Header />
      <div className="container mb-10">
        <Tabela autores={autores} removerAutor={removerAutor} />
        <Form escutaSubmit={escutaSubmit} />
      </div>
    </Fragment>
  );
}

export default App;
