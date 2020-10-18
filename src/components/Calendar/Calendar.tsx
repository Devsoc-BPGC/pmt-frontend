import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography } from '@material-ui/core';
import Deadlines from '../Common/Deadlines';
import Sidenav from '../Common/Navigation/Sidenav';
import Logo from '../Common/Logo';
import Topnav from '../Common/Navigation/Topnav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#1b262c',
    },
    sidePanels: {
      marginTop: '10%',
      marginBottom: '10%',
    },
    // necessary for content to be below app bar
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#1b262c',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    },
    emptySpace: {
      padding: theme.spacing(3),
    },
  })
);

const Calendar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page='Home' index='1' />
      <div className={classes.sidePanels}>
        <Sidenav active='Calendar' />
        <Deadlines />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.emptySpace} />
        <Typography variant='h3' style={{ color: 'white' }}>
          Calendar
        </Typography>
      </main>
    </div>
  );
};

export default Calendar;
