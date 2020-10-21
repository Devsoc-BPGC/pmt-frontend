import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Sidenav from '../Common/Navigation/Sidenav';
import Logo from '../Common/Logo';
import Topnav from '../Common/Navigation/Topnav';
import Deadlines from '../Common/Deadlines';
import TaskCard from './TaskCard';
import './TaskCard.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#1b262c',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      //   color: theme.palette.text.secondary,
      color: '#000',
      borderRadius: '40px',
      backgroundColor: '#bbe1fa',
      width: '19vw',
      marginTop: '4vw',
    },
    margin: {
      //   margin: theme.spacing(0),
      backgroundColor: '#fff',
      borderRadius: '40px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '0',
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
    sidePanels: {
      marginTop: '10%',
      marginBottom: '10%',
    },
    project: {
      position: 'relative',
      bottom: 0,
      width: '75vw',
    },
    end: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '17vw',
    },
    heading: {
      color: 'white',
      textAlign: 'center',
    },
  })
);

const data = [
  {
    id: 0,
    name: 'Mello',
    tasks: [
      [
        ['Finish Designs- UI/UX Team', 'Plot Experience Maps- UX Team'],
        ['Final Designs- Rohit and Akanksha', 'Design Documentation- UI team'],
        ['Wireframes- UI/UX Team'],
        [
          'No design for new TaskBoard',
          'All hover effects not clearly defined',
        ],
      ],
      [
        [
          'Execute Wireframes- frontend team',
          'Complete coding of final designs',
          'Integrate with backend',
          'Setup Apollo CLient',
          'Setup Redux- Rohit',
        ],
        ['Hard-coded Final designs- front end team'],
        ['Hard coded Wirerfames'],
        [
          'No integration of all components',
          'Code is not efficient',
          'College is very hectic',
        ],
      ],
      [
        [
          'Messaging module- kronos team',
          'Setup graphql and Apollo server- backend team',
          'Integrate with frontend',
        ],
        ['Setup MongoDB and Schemas', 'Setup queries and mutations'],
        ['Backend Server backbone setup'],
        ['GraphQL not integrated in setup'],
      ],
      [
        [
          'Deploy Base website- Deployment team',
          'Deploy final website- deployment team',
        ],
        ['Waiting for completion of base website'],
        [],
        [],
      ],
      [
        ['Resolve merge conflicts if any- Review team'],
        [
          'Review PRs to frontend repo and merge- Sarvesh',
          'Review PRs to backend repo and merge- Sarvesh',
        ],
        ['Merge Dashboard wireframes PR', 'Merge TaskBoard wireframes PR'],
        ['EEE dept Bits Goa'],
      ],
    ],
  },
  {
    id: 1,
    name: 'Waves',
    tasks: [
      [
        [
          'Execute Layout- Android team',
          'Complete coding of final designs',
          'Integrate with backend',

          'Setup React-Native- Satej',
        ],
        ['Hard-coded Final designs- Android team'],
        ['Hard coded Layout'],
        [
          'Not much integration of all components',
          'Code is not efficient',
          'College is very hectic',
        ],
      ],
      [
        [
          'Execute Wireframes- frontend team',
          'Complete coding of final designs',
          'Integrate with backend',

          'Setup Redux- Rohit',
        ],
        ['Hard-coded Final designs- frontend team'],
        ['Hard coded Wireframes'],
        [
          'Not much integration of all components',
          'Code is not efficient',
          'College is very hectic',
        ],
      ],
      [
        ['Setup express server- backend team', 'Integrate with frontend'],
        ['Setup MongoDB and Schemas', 'Setup queries and responses'],
        ['Backend Server backbone setup'],
        [],
      ],
    ],
  },
  {
    id: 1,
    name: 'Waves',
    tasks: [
      [
        ['Execute Wireframes- frontend team', 'Integrate with backend'],
        ['Setup AngularJS, html and Sass boilerplate'],
        ['Learn AngularJS'],
        ['College is very hectic'],
      ],
      [
        ['Setup express server- backend team', 'Integrate with frontend'],
        ['Learn PostgreSQL - backend team'],
        ['Boilerplate code setup'],
        [],
      ],
    ],
  },
];

type ListOfTasks = {
  title: string;
  descr: string;
};

interface Tasks {
  id: number;
  name: string;
  tasks: Array<Array<Array<string>>>;
}

// interface RouteParams {
//   id: string;
// }

// type Params = {
//   id: string;
// };

const Tasks = () => {
  const classes = useStyles();
  //   const params: Params = useParams<RouteParams>();
  const location = useLocation();
  const arr: string[] = location.pathname.split('/');

  const [id, setID] = useState(parseInt(arr[2]));
  const [active, setActive] = useState(0);

  useEffect(() => {
    data.forEach((proj: Tasks) => {
      if (proj.name === arr[1]) setActive(proj.id);
    });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page={arr[1]} index={id} />
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
          TaskBoard {id}
        </Typography>
        <br />
        <br />
        <br />
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='flex-start'
          spacing={1}
        >
          {[
            { title: 'To-Do', descr: 'A list of all pending tasks' },
            { title: 'On-Going', descr: 'A list of all ongoing tasks' },
            { title: 'Completed', descr: 'A list of all completed tasks' },
            { title: 'Bugs', descr: 'A list of all pending issues' },
          ].map((list: ListOfTasks, index: number) => {
            return (
              <Grid item boxshadow={10}>
                <div className={classes.paper}>
                  <Typography variant='h6'>
                    <b>{list.title}</b>
                    <IconButton aria-label='settings'>
                      <SettingsIcon htmlColor='black' />
                    </IconButton>
                  </Typography>
                  <Typography paragraph>
                    <i>{list.descr}</i>
                  </Typography>
                  {data[active].tasks[id - 1][index].map((task: string) => {
                    return <TaskCard title={task} />;
                  })}

                  <br />
                  <br />
                  <br />
                  <div className={classes.margin}>
                    <Grid container spacing={1} className={classes.end}>
                      <Grid item>
                        <TextField
                          id='end-add'
                          label='Add a TaskCard'
                          variant='standard'
                        />
                      </Grid>
                      <IconButton aria-label='add taskcard'>
                        <AddRoundedIcon htmlColor='black' />
                      </IconButton>
                    </Grid>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
};

export default Tasks;
