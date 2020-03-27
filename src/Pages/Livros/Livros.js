import React, { useState, useEffect, Fragment } from "react";
import Header from "../../Components/Header/Header";
import DataTable from "../../Components/DataTable/DataTable";
import PopUp from "../../Utils/PopUp";
import ApiService from "../../Data/ApiService";

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    ApiService.ListaLivros()
      .then((res) => setLivros(res.data))
      .catch((err) => PopUp.exibeMensagem("error", "Falha ao carregar livros"));
  }, []);
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>Livros</h1>
        <DataTable dados={livros} coluna={"livro"} titulo="Livros" />
      </div>
    </Fragment>
  );
}
