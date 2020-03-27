import React from "react";

export default function DataTable(props) {
  return (
    <table className="centered ">
      <THead titulo={props.titulo} />
      <TBody dados={props.dados} coluna={props.coluna} />
    </table>
  );
}

const THead = ({ titulo }) => {
  return (
    <thead>
      <tr>
        <th>{titulo}</th>
      </tr>
    </thead>
  );
};

const TBody = ({ dados, coluna }) => {
  const dadosColuna = dados.map((dado) => dado[coluna]);

  return (
    <tbody>
      {dadosColuna &&
        dadosColuna.map((dado, index) => (
          <tr key={index}>
            <td>{dado}</td>
          </tr>
        ))}
    </tbody>
  );
};
