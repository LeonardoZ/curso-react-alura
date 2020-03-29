import React, { useState, useEffect } from "react";
import PaginaBasica from "../PaginaBasica/PaginaBasica";
import Tabela from "../../Components/Tabela/Tabela";
import ApiService from "../../Data/ApiService";
import Toast from "../../Components/Toast/Toast";

export default function Autores() {
  const [{ autores, toast }, setEstado] = useState({
    autores: [],
    toast: { open: false }
  });

  useEffect(() => {
    ApiService.ListaAutores()
      .then(res => setEstado({ toast: { open: false }, autores: res.data }))
      .catch(_ =>
        setEstado({
          ...autores,
          toast: {
            open: true,
            tipo: "error",
            texto: "Falha ao carregar autores"
          }
        })
      )
  }, []);

  const campos = [
    {
      titulo: "Autores",
      campo: "nome"
    }
  ];

  return (
    <PaginaBasica titulo="Autores">
      <Toast
        handleClose={() =>
          setEstado({
            autores,
            toast: {
              open: false
            }
          })
        }
        open={toast.open}
        severity={toast.tipo}
      >
        {toast.texto}
      </Toast>

      <Tabela dados={autores} campos={campos} />
    </PaginaBasica>
  );
}
