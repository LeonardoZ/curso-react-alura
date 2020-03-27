import React, { useState } from "react";
import FormValidator from "../../Utils/FormValidator";
import PopUp from "../../Utils/PopUp";

export default function Formulario({ escutaSubmit }) {
  const formValidator = new FormValidator([
    {
      campo: "nome",
      metodo: "isEmpty",
      validoQuando: false,
      mensagem: "Entre com um nome",
    },
    {
      campo: "livro",
      metodo: "isEmpty",
      validoQuando: false,
      mensagem: "Entre com um livro",
    },
    {
      campo: "preco",
      metodo: "isInt",
      args: [{ min: 0, max: 99999 }],
      validoQuando: true,
      mensagem: "Entre com um valor numérico",
    },
  ]);

  const estadoInicial = {
    nome: "",
    livro: "",
    preco: "",
    validacao: formValidator.valido(),
  };

  const [formulario, setFormulario] = useState(estadoInicial);

  const escutaInput = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const { nome, livro, preco } = formulario;

  const submitFormulario = () => {
    const validacao = formValidator.valida(formulario);
    if (validacao.isValid) {
      setFormulario(estadoInicial);
      escutaSubmit(formulario);
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];
      const camposInvalidos = campos.filter((elem) => elem.isInvalid);
      camposInvalidos.forEach((campo) => {
        PopUp.exibeMensagem("error", campo.message);
      });
    }
  };

  return (
    <form>
      <div className="row">
        <div className="input-field col s4">
          <label className="input-field" htmlFor="nome">
            Nome
          </label>
          <input
            className="validate"
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={escutaInput}
          />
        </div>
        <div className="input-field col s4">
          <label className="input-field" htmlFor="livro">
            Livro
          </label>
          <input
            className="validate"
            id="livro"
            type="text"
            name="livro"
            value={livro}
            onChange={escutaInput}
          />
        </div>
        <div className="input-field col s4">
          <label className="input-field" htmlFor="preco">
            Preço
          </label>
          <input
            className="validate"
            id="preco"
            type="text"
            name="preco"
            value={preco}
            onChange={escutaInput}
          />
        </div>
        <div className="col s4">
          <button
            onClick={submitFormulario}
            type="button"
            className="indigo lighten-2 waves-effect waves-light btn-large"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
