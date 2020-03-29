import React from "react";
import LinkWrapper from "../../Utils/LinkWrapper";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Casa do Código
          </Typography>
          <Button color="inherit" component={LinkWrapper} to="/">Home</Button>
          <Button color="inherit" component={LinkWrapper} to="/autores">Autores</Button>
          <Button color="inherit" component={LinkWrapper} to="/livros">Livros</Button>
          <Button color="inherit" component={LinkWrapper} to="/sobre">Sobre</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
