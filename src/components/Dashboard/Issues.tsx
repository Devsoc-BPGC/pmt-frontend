import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  issue: {
    backgroundColor: '#BBE1FA',
    color: '#1b262c',
    margin: '0.5rem',
    width: '175px',
    maxHeight: '175px',
    transition: 'all 2s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 12px #d3d3d3',
      cursor: 'pointer',
      maxHeight: '500px',
    },
  },
  extraContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  taskButton: {
    width: '100%',
    margin: '1rem auto',
    background: '#0F4C75',
    color: '#BBE1FA',
    '&:hover': {
      background: '#0F4C75',
      color: '#BBE1FA',
    },
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'center',
  },
  projectName: {
    color: '#0F4C75',
    textAlign: 'center',
    top: 100000,
    bottom: 0,
    position: 'sticky',
    fontWeight: 600,
  },
});

interface Issue {
  id: number;
  projectName: string;
  taskboardName: string;
  body: string;
  task: number;
  taskboard: number;
  date: Date;
  isShown: boolean;
}

const issues_data = [
  {
    id: 0,
    projectName: 'Mello',
    taskboardName: 'Taskboard1',
    body: '@arjun assigned you to complete wireframes',
    task: 12,
    taskboard: 3,
    date: new Date(),
    isShown: false,
  },
  {
    id: 1,
    projectName: 'Waves',
    taskboardName: 'App',
    body: '@arjun assigned you to work in the Waves Marketplace',
    task: 3,
    taskboard: 1,
    date: new Date(),
    isShown: false,
  },
  {
    id: 2,
    projectName: 'Waves',
    taskboardName: 'Backend',
    body: '@arjun created a new issue for waves backend',
    task: 5,
    taskboard: 3,
    date: new Date(),
    isShown: false,
  },
  {
    id: 3,
    projectName: 'Shortme',
    taskboardName: 'Backend',
    body: '@ishant created a new issue in backend',
    task: 8,
    taskboard: 2,
    date: new Date(),
    isShown: false,
  },
  {
    id: 4,
    projectName: 'Mello',
    taskboardName: 'Taskboard3',
    body: '@sarvesh created a new issue in chat-module',
    task: 7,
    taskboard: 3,
    date: new Date(),
    isShown: false,
  },
  {
    id: 5,
    projectName: 'Shortme',
    taskboardName: 'Frontend',
    body: '@sarvesh assigned you a new task',
    task: 15,
    taskboard: 1,
    date: new Date(),
    isShown: false,
  },
];

const Issues = () => {
  const classes = useStyles();

  const [isShown, setIsShown] = React.useState([]);

  React.useEffect(() => {
    issues_data.forEach((issue: Issue) => {
      setIsShown((oldIsShown: Array<boolean>) => {
        return [...oldIsShown, issue.isShown];
      });
    });
  }, [setIsShown]);

  return (
    <div className={classes.root}>
      {issues_data.map((issue: Issue) => {
        return (
          <>
            <Card
              style={{ width: 'fit-container' }}
              className={classes.issue}
              onMouseEnter={() => {
                let newIsShown = isShown;
                issue.isShown = true;
                newIsShown[issue.id] = issue.isShown;
                setIsShown((oldIsShown: Array<boolean>) => {
                  return [...oldIsShown, issue.isShown];
                });
              }}
              onMouseLeave={() => {
                let newIsShown = isShown;
                issue.isShown = false;
                newIsShown[issue.id] = issue.isShown;
                setIsShown((oldIsShown: Array<boolean>) => {
                  return [...oldIsShown, issue.isShown];
                });
              }}
              id='grow'
              key={issue.id}
            >
              <CardContent>
                <Typography variant='subtitle1' component='p'>
                  {issue.body}
                </Typography>

                {isShown[issue.id] && (
                  <div className={classes.extraContent}>
                    <Typography variant='subtitle1' component='p'>
                      Task #{issue.task} in Taskboard {issue.taskboard} at{' '}
                      {issue.date.toDateString()},{' '}
                      {issue.date.toLocaleTimeString()}
                    </Typography>
                    <Link
                      to={`/${issue.projectName}/${issue.taskboard}/${issue.taskboardName}`}
                      id='no-deco'
                    >
                      <Button
                        variant='contained'
                        className={classes.taskButton}
                        onClick={() => {
                          let newIsShown = isShown;
                          issue.isShown = false;
                          newIsShown[issue.id] = issue.isShown;
                          setIsShown((oldIsShown: Array<boolean>) => {
                            return [...oldIsShown, issue.isShown];
                          });
                        }}
                      >
                        Go To Task
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
              <CardActions className={classes.cardFooter}>
                <Typography className={classes.projectName} variant='h5'>
                  {issue.projectName}
                </Typography>
              </CardActions>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Issues;
