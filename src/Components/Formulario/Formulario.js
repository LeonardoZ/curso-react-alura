import React, { useState } from "react";
import FormValidator from "../../Utils/FormValidator";
import { Grid, TextField, Button } from "@material-ui/core";
import Toast from "../Toast/Toast";

export default function Formulario({ escutaSubmit }) {
  const formValidator = new FormValidator([
    {
      campo: "nome",
      metodo: "isEmpty",
      validoQuando: false,
      mensagem: {
        open: false,
        tipo: "success",
        texto: "Entre com um nome"
      }
    },
    {
      campo: "livro",
      metodo: "isEmpty",
      validoQuando: false,
      mensagem: {
        open: false,
        tipo: "success",
        texto: "Entre com um livro"
      }
    },
    {
      campo: "preco",
      metodo: "isInt",
      args: [{ min: 0, max: 99999 }],
      validoQuando: true,
      mensagem: {
        open: false,
        tipo: "success",
        texto: "Entre com um valor numérico"
      }
    }
  ]);

  const estadoInicial = {
    nome: "",
    livro: "",
    preco: "",
    mensagem: {
      open: false
    },
    validacao: formValidator.valido()
  };

  const [formulario, setFormulario] = useState(estadoInicial);

  const escutaInput = event => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const { open, nome, livro, preco } = formulario;

  const submitFormulario = () => {
    const validacao = formValidator.valida(formulario);
    if (validacao.isValid) {
      setFormulario(estadoInicial);
      escutaSubmit(formulario);
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];
      const camposInvalidos = campos.filter(elem => elem.isInvalid);
      
      const erros = camposInvalidos.reduce(
        (textos, campo) => textos + campo.message.texto + ". ",
        ""
      );
      setFormulario({
        ...formulario,
        mensagem: {
          open: true,
          texto: erros,
          tipo: "error"
        }
      });
    }
  };

  return (
    <>
      <Toast
        handleClose={() => setFormulario({ ...formulario, mensagem: {
          open: false,
        } })}
        open={formulario.mensagem.open}
        severity={formulario.mensagem.tipo}
      >
        {formulario.mensagem.texto}
      </Toast>

      <form>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TextField
              id="nome"
              label="Nome"
              variant="outlined"
              value={nome}
              name="nome"
              onChange={escutaInput}
            />
          </Grid>
          <Grid item>
            <TextField
              id="livro"
              label="Livro"
              variant="outlined"
              value={livro}
              name="livro"
              onChange={escutaInput}
            />
          </Grid>
          <Grid item>
            <TextField
              id="preco"
              label="Preço"
              variant="outlined"
              value={preco}
              name="preco"
              onChange={escutaInput}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={submitFormulario}
              color="primary"
              variant="outlined"
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
