import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import TaskinfoModal from './TaskinfoModal';

import './TaskCard.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3282B8',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  action: {
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  padd: {
    padding: '0.4rem',
    boxShadow: '3px 3px 5px grey ',
    textTransform: 'capitalize',
  },
});

type Desc = {
  title: string;
};
const TaskCard = ({ title }: Desc) => {
  const classes = useStyles();
  return (
    <Card
      style={{ width: 'fit-container' }}
      className={classes.root}
      bgcolor='#3282B8'
      id='grow'
    >
      <CardContent>
        <Typography variant='h6' component='h2'>
          <b>{title}</b>
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <TaskinfoModal />

        <IconButton aria-label='view comments'>
          <CommentIcon fontSize='small' htmlColor='black' />
        </IconButton>

        <Button size='medium' id='button' className={classes.padd}>
          {'Assign Me'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
