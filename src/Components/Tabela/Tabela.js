import React, { Component } from "react";
import CoolButton from "../CoolButton/CoolButton";

export default class Tabela extends Component {
  render() {
    let { autores, removerAutor } = this.props;

    return (
      <table className="centered highlight">
        <THead />
        <TBody autores={autores} removerAutor={removerAutor} />
      </table>
    );
  }
}

const THead = () => {
  return (
    <thead>
      <tr>
        <th>Autor</th>
        <th>Livro</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TBody = ({ autores, removerAutor }) => {
  return (
    <tbody>
      {autores &&
        autores.map((autor, index) => (
          <tr key={autor.id}>
            <td>{autor.nome}</td>
            <td>{autor.livro}</td>
            <td>{autor.preco}</td>
            <td>
              <CoolButton primary onClick={() => removerAutor(autor.id)}>
                Remover
              </CoolButton>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
