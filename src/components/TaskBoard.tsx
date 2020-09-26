import React from 'react';
// import DropDown from './DropDown';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Sidenav from './Sidenav';
import Topnav from './Topnav';
import TaskCard from './TaskCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const TaskBoard = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Topnav page='Taskb' index='1' />
        <Sidenav active='Dashboard' />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography variant='h3'>TaskBoard</Typography>
          <Container width={0.8} style={{ height: 'fit-container' }}>
            <Typography
              component='div'
              style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
            >
              <Grid
                style={{ padding: '2rem' }}
                container
                direction='row'
                justify='space-between'
                alignItems='flex-start'
              >
                <Grid item xs={2} boxshadow={10}>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography variant='h6'>
                      To-do{'      '}
                      <IconButton aria-label='settings'>
                        <SettingsIcon />
                      </IconButton>
                    </Typography>
                    <Typography paragraph>
                      <i>A list of all pending tasks</i>
                    </Typography>
                    <TaskCard title='Messaging Module- backend development' />
                    <TaskCard title='Messaging Module- backend development' />
                    <TaskCard title='Messaging Module- backend development' />
                    <br />
                    <br />
                    <br />
                    <div className={classes.margin}>
                      <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item>
                          <AddRoundedIcon />
                        </Grid>
                        <Grid item>
                          <TextField
                            id='outlined-basic'
                            label='Add a TaskCard'
                            variant='outlined'
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={2} boxshadow={10}>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography variant='h6'>
                      On-going{'      '}
                      <IconButton aria-label='settings'>
                        <SettingsIcon />
                      </IconButton>
                    </Typography>
                    <Typography paragraph>
                      <i>A list of all ongoing tasks</i>
                    </Typography>
                    <TaskCard title='Messaging Module- backend development' />
                    <br />
                    <br />
                    <br />
                    <div className={classes.margin}>
                      <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item>
                          <AddRoundedIcon />
                        </Grid>
                        <Grid item>
                          <TextField
                            id='outlined-basic'
                            label='Add a TaskCard'
                            variant='outlined'
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={2} boxshadow={10}>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography variant='h6'>
                      Completed{'      '}
                      <IconButton aria-label='settings'>
                        <SettingsIcon />
                      </IconButton>
                    </Typography>
                    <Typography paragraph>
                      <i>A list of all completed tasks</i>
                    </Typography>
                    <TaskCard title='Messaging Module- backend development' />
                    <TaskCard title='Messaging Module- backend development' />
                    <br />
                    <br />
                    <br />
                    <div className={classes.margin}>
                      <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item>
                          <AddRoundedIcon />
                        </Grid>
                        <Grid item>
                          <TextField
                            id='outlined-basic'
                            label='Add a TaskCard'
                            variant='outlined'
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={2} boxshadow={10}>
                  <Paper elevation={10} className={classes.paper}>
                    <Typography variant='h6'>
                      Bugs{'      '}
                      <IconButton aria-label='settings'>
                        <SettingsIcon />
                      </IconButton>
                    </Typography>
                    <Typography paragraph>
                      <i>A list of all pending issues</i>
                      <TaskCard title='Messaging Module- backend development' />
                      <TaskCard title='Messaging Module- backend development' />
                      <TaskCard title='Messaging Module- backend development' />
                      <br />
                      <br />
                      <br />
                      <div className={classes.margin}>
                        <Grid container spacing={1} alignItems='flex-end'>
                          <Grid item>
                            <AddRoundedIcon />
                          </Grid>
                          <Grid item>
                            <TextField
                              id='outlined-basic'
                              label='Add a TaskCard'
                              variant='outlined'
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Typography>
          </Container>
        </main>
      </div>
    </>
  );
};

export default TaskBoard;
