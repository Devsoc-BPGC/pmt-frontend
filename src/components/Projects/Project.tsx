// import React from 'react';
// // import DropDown from './DropDown';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';
// import SettingsIcon from '@material-ui/icons/Settings';
// import TextField from '@material-ui/core/TextField';
// import AddRoundedIcon from '@material-ui/icons/AddRounded';
// import Sidenav from './Sidenav';
// import Topnav from './Topnav';
// import TaskCard from './TaskCard';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     // necessary for content to be below app bar
//     toolbar: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       ...theme.mixins.toolbar,
//     },
//     content: {
//       flexGrow: 1,
//       backgroundColor: theme.palette.background.default,
//       padding: theme.spacing(3),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//   })
// );

// const TaskBoard = () => {
//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.root}>
//         <CssBaseline />
//         <Topnav page='Taskb' index='1' />
//         <Sidenav active="Dashboard" />
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography variant='h3'>TaskBoard</Typography>
//           <Container width={0.8} style={{ height: 'fit-container' }}>
//             <Typography
//               component='div'
//               style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
//             >
//               <Grid
//                 style={{ padding: '2rem' }}
//                 container
//                 direction='row'
//                 justify='space-between'
//                 alignItems='flex-start'
//               >
//                 <Grid item xs={2} boxshadow={10}>
//                   <Paper elevation={10} className={classes.paper}>
//                     <Typography variant='h6'>
//                       To-do{'      '}
//                       <IconButton aria-label='settings'>
//                         <SettingsIcon />
//                       </IconButton>
//                     </Typography>
//                     <Typography paragraph>
//                       <i>A list of all pending tasks</i>
//                     </Typography>
//                     <TaskCard title='Messaging Module- backend development' />
//                     <TaskCard title='Messaging Module- backend development' />
//                     <TaskCard title='Messaging Module- backend development' />
//                     <br />
//                     <br />
//                     <br />
//                     <div className={classes.margin}>
//                       <Grid container spacing={1} alignItems='flex-end'>
//                         <Grid item>
//                           <AddRoundedIcon />
//                         </Grid>
//                         <Grid item>
//                           <TextField
//                             id='outlined-basic'
//                             label='Add a TaskCard'
//                             variant='outlined'
//                           />
//                         </Grid>
//                       </Grid>
//                     </div>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={2} boxshadow={10}>
//                   <Paper elevation={10} className={classes.paper}>
//                     <Typography variant='h6'>
//                       On-going{'      '}
//                       <IconButton aria-label='settings'>
//                         <SettingsIcon />
//                       </IconButton>
//                     </Typography>
//                     <Typography paragraph>
//                       <i>A list of all ongoing tasks</i>
//                     </Typography>
//                     <TaskCard title='Messaging Module- backend development' />
//                     <br />
//                     <br />
//                     <br />
//                     <div className={classes.margin}>
//                       <Grid container spacing={1} alignItems='flex-end'>
//                         <Grid item>
//                           <AddRoundedIcon />
//                         </Grid>
//                         <Grid item>
//                           <TextField
//                             id='outlined-basic'
//                             label='Add a TaskCard'
//                             variant='outlined'
//                           />
//                         </Grid>
//                       </Grid>
//                     </div>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={2} boxshadow={10}>
//                   <Paper elevation={10} className={classes.paper}>
//                     <Typography variant='h6'>
//                       Completed{'      '}
//                       <IconButton aria-label='settings'>
//                         <SettingsIcon />
//                       </IconButton>
//                     </Typography>
//                     <Typography paragraph>
//                       <i>A list of all completed tasks</i>
//                     </Typography>
//                     <TaskCard title='Messaging Module- backend development' />
//                     <TaskCard title='Messaging Module- backend development' />
//                     <br />
//                     <br />
//                     <br />
//                     <div className={classes.margin}>
//                       <Grid container spacing={1} alignItems='flex-end'>
//                         <Grid item>
//                           <AddRoundedIcon />
//                         </Grid>
//                         <Grid item>
//                           <TextField
//                             id='outlined-basic'
//                             label='Add a TaskCard'
//                             variant='outlined'
//                           />
//                         </Grid>
//                       </Grid>
//                     </div>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={2} boxshadow={10}>
//                   <Paper elevation={10} className={classes.paper}>
//                     <Typography variant='h6'>
//                       Bugs{'      '}
//                       <IconButton aria-label='settings'>
//                         <SettingsIcon />
//                       </IconButton>
//                     </Typography>
//                     <Typography paragraph>
//                       <i>A list of all pending issues</i>
//                       <TaskCard title='Messaging Module- backend development' />
//                       <TaskCard title='Messaging Module- backend development' />
//                       <TaskCard title='Messaging Module- backend development' />
//                       <br />
//                       <br />
//                       <br />
//                       <div className={classes.margin}>
//                         <Grid container spacing={1} alignItems='flex-end'>
//                           <Grid item>
//                             <AddRoundedIcon />
//                           </Grid>
//                           <Grid item>
//                             <TextField
//                               id='outlined-basic'
//                               label='Add a TaskCard'
//                               variant='outlined'
//                             />
//                           </Grid>
//                         </Grid>
//                       </div>
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </Typography>
//           </Container>
//         </main>
//       </div>
//     </>
//   );
// };

// export default TaskBoard;

import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Sidenav from '../Common/Navigation/Sidenav';
import Logo from '../Common/Logo';
import Topnav from '../Common/Navigation/Topnav';
// import Issues from './Issues';
// import DashboardProjectCard from './DashboardProjectCard';
// import NewTaskBoardPopup from '../Common/Popups/NewTaskBoardPopup';
import Deadlines from '../Common/Deadlines';
// import '../Taskcard/TaskCard.css';

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

// const Projects = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.project}>
//       <DashboardProjectCard id={0} />
//     </div>
//   );
// };

const TaskBoard = () => {
  const classes = useStyles();
  interface Taskboard {
    id: number;
    title: string;
    description: string;
  }

  const taskboards = [
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
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page='Project' index='1' />
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
              {taskboards.map((taskboard: Taskboard, index: number) => (
                <Grid key={index} item>
                  <Button>
                    <Link
                      to={`/project/${taskboard.id}/taskboard`}
                      id='no-deco'
                    >
                      <Paper elevation={6} className={classes.paper} id='grow'>
                        <Typography
                          variant='h4'
                          style={{ textAlign: 'center' }}
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
                          style={{ textAlign: 'center' }}
                        >
                          {taskboard.description}
                        </Typography>
                      </Paper>
                    </Link>
                  </Button>
                </Grid>
              ))}
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
                  <Button className={classes.addBtn}>
                    <Paper className={classes.paperAdd} id='grow'>
                      +
                    </Paper>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Typography variant='h3' style={{ color: 'white' }}>
          Issues
        </Typography>
        <DashboardIssueCard
          page='Home'
          title='@SameshGSOC assigned you issue #19'
        />
        <br />
        <br />
        <br />
        <Typography variant='h3' style={{ color: 'white' }}>
          Projects
        </Typography>
        <Projects /> */}
      </main>
    </div>
  );
};

export default TaskBoard;
