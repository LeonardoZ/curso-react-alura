import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const CelulaDeleta = ({ id, removeDado }) => {
  return removeDado ? (
    <TableCell key={id}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => removeDado(id)}
      >
        Remover
      </Button>
    </TableCell>
  ) : (
    <></>
  );
};

const TituloDeleta = ({ removeDado }) => {
  return removeDado ? <TableCell>Remover</TableCell> : 
  <></>;
};

export default props => {
  let { campos, dados, removeDado } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {campos &&
            campos.map((campo, index) => (
              <TableCell key={index}>{campo.titulo}</TableCell>
            ))}
          <TituloDeleta removeDado={removeDado} />
        </TableRow>
      </TableHead>
      <TableBody>
        {dados &&
          dados.map((dado, index) => (
            <TableRow key={index}>
              {campos.map((campo, index) => (
                <TableCell key={index}>{dado[campo.campo]}</TableCell>
              ))}
              <CelulaDeleta id={dado.id} removeDado={removeDado} />
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
