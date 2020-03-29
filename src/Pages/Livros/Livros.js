import React, { useState, useEffect } from "react";
import PaginaBasica from "../PaginaBasica/PaginaBasica";
import Tabela from "../../Components/Tabela/Tabela";
import ApiService from "../../Data/ApiService";
import Toast from "../../Components/Toast/Toast";

export default function Livros() {
  const [{ livros, toast }, setEstado] = useState({
    livros: [],
    toast: { open: false }
  });

  useEffect(() => {
    ApiService.ListaLivros()
      .then(res => setEstado({ toast: { open: false }, livros: res.data }))
      .catch(_ =>
        setEstado({
          ...livros,
          toast: {
            open: true,
            tipo: "error",
            texto: "Falha ao carregar livros"
          }
        })
      )
  }, []);

  const campos = [
    {
      titulo: "Livros",
      campo: "livro"
    }
  ];

  return (
    <PaginaBasica titulo="Livros">
      <Toast
        handleClose={() =>
          setEstado({
            livros,
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

      <Tabela dados={livros} campos={campos} />
    </PaginaBasica>
  );
}
