import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import './TaskCard.css';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#848484',
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
      bgcolor='#646464'
      id='grow'
    >
      <CardContent>
        <Typography variant='h6' component='h2'>
          <b>{title}</b>
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button size='small'>Assign Me</Button>
        {'     '}
        <IconButton aria-label='view comments'>
          <CommentIcon fontSize='small' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
