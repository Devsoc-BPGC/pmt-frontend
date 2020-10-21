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
    },
  })
);

const deadlines = [
  {
    id: 1,
    text: 'Finalise designs for Mello',
    date: new Date(Date.now()),
  },
  {
    id: 2,
    text: 'Complete Backend for Mello',
    date: new Date(Date.now()),
  },
  {
    id: 3,
    text: 'Complete Frontend for Mello',
    date: new Date(Date.now()),
  },
  {
    id: 4,
    text: 'Deploy Mello Website',
    date: new Date(Date.now()),
  },
];

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

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
            {deadlines.map((deadline, index) => (
              <ListItem
                button
                key={deadline.id}
                selected={
                  new Date(deadline.date).getDay() ===
                  new Date(Date.now()).getDate()
                }
              >
                <div className={classes.date}>
                  <Typography variant='h4'>
                    {new Date(deadline.date).getDate() + index}
                  </Typography>
                  <Typography>
                    {weekDays[new Date(deadline.date).getDay() - index]}
                  </Typography>
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
