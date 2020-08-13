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
import Topnav from './Topnav';
import ProjectCard from './ProjectCard';
import DashboardIssueCard from './DashboardIssueCard';
import DashboardTaskboard from './DashboardTaskboard';

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
      <Topnav page='Home' index='1' />
      <Sidenav page='Home' />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DashboardIssueCard
          page='Home'
          title='@SameshGSOC assigned you issue #19'
        />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography variant='h3'>My Projects</Typography>
        {/* <Projects /> */}
        <Taskboards />
      </main>
    </div>
  );
};

export default Home;
