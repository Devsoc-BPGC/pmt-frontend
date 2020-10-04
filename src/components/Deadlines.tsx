import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: '20%',
      left: 0,
      height: 'max-content',
    },
    deadlines: {
      width: '250px',
      borderRadius: '0px 36px 36px 0px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
      backgroundColor: '#bbe1fa',
      padding: '1rem 0rem',
    },
    date: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '1rem',
      textTransform: 'uppercase',
    },
  })
);

interface Deadline {
  id: number;
  text: string;
  date: Array<string>;
}

const deadlines = [
  {
    id: 1,
    text: 'Finalise designs for Mello',
    date: new Date().toString().split(' '),
  },
  {
    id: 2,
    text: 'Complete Backend for Mello',
    date: new Date(2020, 10, 30).toString().split(' '),
  },
  {
    id: 3,
    text: 'Complete Frontend for Mello',
    date: new Date(2020, 11, 4).toString().split(' '),
  },
  {
    id: 4,
    text: 'Deploy Mello Website',
    date: new Date(2020, 11, 17).toString().split(' '),
  },
];

const Deadlines = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.deadlines}>
          <Typography variant='h5' align='center'>
            Deadlines
          </Typography>
          <List>
            {deadlines.map((deadline: Deadline) => (
              <ListItem
                button
                key={deadline.id}
                selected={
                  parseInt(deadline.date[2]) === new Date().getDate() &&
                  deadline.date[1] === new Date().toString().split(' ')[1] &&
                  deadline.date[3] === new Date().toString().split(' ')[3]
                }
              >
                <div className={classes.date}>
                  <Typography variant='h4'>{deadline.date[2]}</Typography>
                  <Typography>{deadline.date[0]}</Typography>
                </div>
                <Typography>{deadline.text}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    </>
  );
};

export default Deadlines;
