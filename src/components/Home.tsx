import React from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Sidenav from './Sidenav';
import Logo from './Logo';
import Topnav from './Topnav';
import ProjectCard from './ProjectCard';
import DashboardIssueCard from './DashboardIssueCard';
import DashboardTaskboard from './DashboardTaskboard';
import Deadlines from './Deadlines';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#1b262c',
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    sidePanels: {
      marginTop: '10%',
      marginBottom: '10%',
    },
    taskboard: {
      position: 'relative',
      bottom: 0,
      width: '85vw',
      backgroundColor: 'lightgrey',
    },
  })
);

const Projects = () => {
  const classes = useStyles();
  return (
    <Container width={0.9} style={{ height: 'fit-container' }}>
      <Typography component='div' style={{ height: '100vh' }}>
        <Grid
          style={{ marginTop: '3vh' }}
          container
          direction='row'
          justify='center'
        >
          <Grid item xs={3} boxshadow={10} style={{ margin: '0.5rem' }}>
            <Card
              className={classes.root}
              style={{
                backgroundColor: '#d3d3d3',
                width: '12em',
                height: '20em',
              }}
            >
              <CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button size='large' color='primary'>
                    New Project
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </Typography>
    </Container>
  );
};

const Taskboards = () => {
  const classes = useStyles();

  return (
    <div className={classes.taskboard}>
      <DashboardTaskboard id={0} />
    </div>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page='Home' index='1' />
      <div className={classes.sidePanels}>
        <Sidenav active='Dashboard' />
        <Deadlines />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DashboardIssueCard
          page='Home'
          title='@SameshGSOC assigned you issue #19'
        />
        <Taskboards />
      </main>
    </div>
  );
};

export default Home;
