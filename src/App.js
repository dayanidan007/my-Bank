import './App.css';
import React from "react";
import { useState, useEffect } from 'react'
import Main from './component/Main'
import { BrowserRouter as Router, Route, } from "react-router-dom";
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
    marginLeft: '60%',
    flexGrow: 1,
  },
  logo: {
    maxWidth: 100,
    maxHeight: 100,
  },

}));

export default function App() {
  const [dayTime, setDayTime] = useState(new Date().toLocaleTimeString())  
  useEffect(()=> {
  });

  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <img src="https://i.ibb.co/PN3tWdt/logo.png" alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            {dayTime}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Router>
        <Route path='/'>
          <Main />
        </Route>
      </Router>
    </div>
  );
}

