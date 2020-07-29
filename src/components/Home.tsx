import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Sidenav from './Sidenav';
import Topnav from './Topnav';
import ProjectCard from './ProjectCard';

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
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topnav page='Home' index='1' />
      <Sidenav page='Home' />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant='h3'>My Projects</Typography>
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
      </main>
    </div>
  );
};

export default Home;
