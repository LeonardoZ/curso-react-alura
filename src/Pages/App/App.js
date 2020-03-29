import React, { useState, useEffect } from "react";
import "./App.css";
import PaginaBasica from "../PaginaBasica/PaginaBasica";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Formulario/Formulario";
import Toast from "../../Components/Toast/Toast";
import ApiService from "../../Data/ApiService";

function App() {
  const [estado, setEstado] = useState({
    autores: [],
    toast: {
      open: false,
      texto: "",
      tipo: "success"
    }
  });

  useEffect(() => {
    ApiService.ListaAutores()
      .then(res => setEstado({...estado, autores: res.data}))
      .catch(_ =>
        setEstado({
          ...estado,
          toast: {
            open: true,
            tipo: "error",
            texto: "Falha ao carregar autores"
          }
        })
      );
  }, []);

  const removerAutor = id => {
    const autoresAtualizados = estado.autores.filter(autor => autor.id !== id);

    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === "deleted") {
          setEstado({
            toast: {
              open: true,
              tipo: "success",
              texto: "Autor removido"
            },
            autores: autoresAtualizados
          });
        }
      })
      .catch(_ =>
        setEstado({
          ...estado.autores,
          toast: { open: true, tipo: "error", texto: "Falha ao remover Autor" }
        })
      );
  };

  const escutaSubmit = dados => {
    const autor = {
      nome: dados.nome,
      livro: dados.livro,
      preco: dados.preco
    };
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (!res.mensagem === "success") {
          return;
        }
        const novoAutor = res.data;
        setEstado({
          autores: [...estado.autores, novoAutor],
          toast: {
            open: true,
            tipo: "success",
            texto: "Autor adicionado com sucesso"
          }
        });
      })
      .catch(_ =>
        setEstado({
          ...estado.autores,
          toast: {
            open: true,
            tipo: "error",
            texto: "Falha ao adicionar Autor"
          }
        })
      );
  };
  const campos = [
    { titulo: "Autor", campo: "nome" },
    { titulo: "Livro", campo: "livro" },
    { titulo: "Preço", campo: "preco" }
  ];
  return (
    <PaginaBasica titulo="Casa do Código">
      <Toast
        handleClose={() =>
          setEstado({
            ...estado,
            toast: {
              open: false,
            }
          })
        }
        open={estado.toast.open}
        severity={estado.toast.tipo}
      >
        {estado.toast.texto}
      </Toast>

      <Form escutaSubmit={escutaSubmit} />
      <Tabela dados={estado.autores} removeDado={removerAutor} campos={campos} />
    </PaginaBasica>
  );
}

export default App;
