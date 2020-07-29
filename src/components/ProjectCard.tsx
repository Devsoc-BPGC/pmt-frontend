import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
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
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const ProjectCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        xs={3}
        boxshadow={10}
        className={classes.root}
        style={{ margin: '0.5em' }}
      >
        <Card
          className={classes.root}
          style={{ backgroundColor: '#d3d3d3', width: '12em' }}
        >
          <CardActionArea>
            <CardMedia
              style={{ margin: '2rem' }}
              component='img'
              alt='Project Image'
              height='140'
              image=''
              title='Project Image'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Project Name
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
              <Button size='small' color='primary'>
                TaskBoard
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default ProjectCard;
