import React, { useState, useEffect, Fragment } from "react";
import Header from "../../Components/Header/Header";
import DataTable from "../../Components/DataTable/DataTable";
import PopUp from "../../Utils/PopUp";
import ApiService from "../../Data/ApiService";

export default function Autores() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    ApiService.ListaNomes()
      .then((res) => setAutores(res.data))
      .catch((err) =>
        PopUp.exibeMensagem("error", "Falha ao carregar autores")
      );
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <h1>Autores</h1>
        <DataTable dados={autores} coluna={"nome"} titulo="Autores" />
      </div>
    </Fragment>
  );
}
