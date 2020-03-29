import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  titulo: {
    textAlign: "center",
    color: "black"
  }
});

export default function PaginaBasica({ children, titulo }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Container maxWidth="md">
        {titulo && (
          <Typography className={classes.titulo} variant="h2" component="h2">
            {titulo}
          </Typography>
        )}
        {children}
      </Container>
    </Fragment>
  );
}
