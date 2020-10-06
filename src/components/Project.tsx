import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Sidenav from './Sidenav';
import Logo from './Logo';
import Topnav from './Topnav';

import NewTaskBoardPopup from './NewTaskBoardPopup';
import Deadlines from './Deadlines';
import './TaskCard.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#1b262c',
      flexGrow: 1,
    },
    // necessary for content to be below app bar
    paper: {
      height: '50vh',
      width: '20vw',
      backgroundColor: '#bbe1fa',

      padding: '2rem',
      borderRadius: '20px',
    },
    paperAdd: {
      height: '10vh',
      width: '5vw',
      backgroundColor: '#bbe1fa',

      padding: '2rem',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
    },
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
    sidePanels: {
      marginTop: '10%',
      marginBottom: '10%',
    },
    project: {
      position: 'relative',
      bottom: 0,
      width: '75vw',
    },
    flexcon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addBtn: {
      display: 'flex',
      textAlign: 'center',
      fontSize: '75px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'white',
      textAlign: 'center',
    },
  })
);

const TaskBoard = () => {
  const classes = useStyles();
  type Board = {
    id: number;
    title: string;
    description: string;
  };

  interface TaskBoards {
    id: number;
    name: string;

    boards: Array<Board>;
  }
  const [active, setActive] = useState(0);
  const location = useLocation();
  const arr: string[] = location.pathname.split('/');

  const taskboards = [
    {
      id: 0,
      name: 'Mello',
      boards: [
        {
          id: 1,

          title: 'Taskboard 1',
          description: 'The tasks for the UI/UX team are shown here',
        },
        {
          id: 2,
          title: 'Taskboard 2',
          description: 'The tasks for the frontend team are shown here',
        },
        {
          id: 3,
          title: 'Taskboard 3',
          description: 'The tasks for the backend team are shown here',
        },
        {
          id: 4,
          title: 'Taskboard 4',
          description: 'The tasks for the deployment team are shown here',
        },
        {
          id: 5,
          title: 'Taskboard 5',
          description: 'The tasks for the Debug & Review team are shown here',
        },
      ],
    },
    {
      id: 1,
      name: 'Waves',
      boards: [
        {
          id: 1,

          title: 'App',
          description: 'The tasks for the AppDev team are shown here',
        },
        {
          id: 2,
          title: 'Website',
          description: 'The tasks for the WebDev team are shown here',
        },
        {
          id: 3,
          title: 'Backend',
          description: 'The tasks for the backend team are shown here',
        },
      ],
    },
    {
      id: 2,
      name: 'Shortme',
      boards: [
        {
          id: 1,

          title: 'Frontend',
          description: 'The tasks for the frontend team are shown here',
        },

        {
          id: 3,
          title: 'Backend',
          description: 'The tasks for the backend team are shown here',
        },
      ],
    },
  ];

  useEffect(() => {
    taskboards.forEach((taskboard: TaskBoards) => {
      if (taskboard.name === arr[1]) setActive(taskboard.id);
    });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page={arr[1]} index='1' />
      <div className={classes.sidePanels}>
        <Sidenav active='Dashboard' />
        <Deadlines />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <br />
        <br />
        <br />
        <Typography variant='h3' className={classes.heading}>
          TaskBoards
        </Typography>
        <br />
        <br />
        <br />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify='center' spacing={6}>
              {taskboards[active].boards.map(
                (taskboard: Board, index: number) => (
                  <Grid key={index} item>
                    <Button>
                      <Link
                        to={`/${taskboards[active].name}/${taskboard.id}/taskboard`}
                        id='no-deco'
                      >
                        <Paper
                          elevation={6}
                          className={classes.paper}
                          id='grow'
                        >
                          <Typography
                            variant='h4'
                            style={{
                              textAlign: 'center',
                            }}
                          >
                            {taskboard.title}
                            <IconButton aria-label='settings'>
                              <SettingsIcon htmlColor='black' />
                            </IconButton>
                          </Typography>
                          <br />
                          <br />
                          <br />
                          <Typography
                            variant='body1'
                            style={{
                              textAlign: 'center',
                            }}
                          >
                            {taskboard.description}
                          </Typography>
                        </Paper>
                      </Link>
                    </Button>
                  </Grid>
                )
              )}
              <Grid item className={classes.flexcon}>
                <div
                  className={classes.paper}
                  style={{
                    backgroundColor: '#1b262c',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {/* <Button className={classes.addBtn}>
                    <Paper className={classes.paperAdd} id='grow'>
                      +
                    </Paper>
                  </Button> */}
                  <Paper className={classes.paperAdd} id='grow'>
                    <NewTaskBoardPopup />
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default TaskBoard;
