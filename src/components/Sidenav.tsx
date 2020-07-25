import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { grey } from '@material-ui/core/colors';
// import { MouseEvent } from 'react';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      marginTop: '20px',
    },
    drawerPaper: {
      width: drawerWidth,
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
    deadline: {
      overflowY: 'scroll',
    },
    deadline1: {
      overflowY: 'scroll',
      maxHeight: 200,
    },
    tb: {
      backgroundColor: '#A4A4A4',
      padding: theme.spacing(2),
    },
  })
);

type Pagetype = {
  page: string;
};
const deadlines = [
  {
    date: 24,
    text: 'Complete Wireframe',
  },
  {
    date: 25,
    text: 'Complete Wireframe',
  },
  {
    date: 26,
    text: 'Complete Wireframe',
  },
  {
    date: 27,
    text: 'Complete Wireframe',
  },
  {
    date: 28,
    text: 'Complete Wireframe',
  },
  {
    date: 29,
    text: 'Complete Wireframe',
  },
];
const taskboards = [
  {
    name: 'TaskBoard 1',
  },
  {
    name: 'TaskBoard 2',
  },
  {
    name: 'TaskBoard 3',
  },
  {
    name: 'TaskBoard 4',
  },
  {
    name: 'TaskBoard 5',
  },
  {
    name: 'TaskBoard 6',
  },
  {
    name: 'TaskBoard 7',
  },
  {
    name: 'TaskBoard 8',
  },
  {
    name: 'TaskBoard 9',
  },
];

const Sidenav = ({ page }: Pagetype) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event: MouseEvent, index: Number) => {
    setSelectedIndex(index);
  };

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        {page === 'Home' ? (
          <div className={classes.toolbar}>
            <Avatar className={classes.large}>R</Avatar>
            <Typography paragraph>John Doe</Typography>
          </div>
        ) : (
          <div>
            <Typography variant='h5' className={classes.tb}>
              TaskBoards
            </Typography>

            <List
              className={classes.deadline1}
              component='nav'
              aria-label='Taskboard menu'
            >
              {taskboards.map((taskboard, i) => {
                return (
                  <ListItem
                    button
                    selected={selectedIndex === i}
                    onClick={(event: MouseEvent) =>
                      handleListItemClick(event, i)
                    }
                  >
                    <ListItemText primary={taskboard.name} />
                  </ListItem>
                );
              })}
              
            </List>
          </div>
        )}

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary='Statistics' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary='Calendar' />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.deadline}>
          <ListItem>
            <Typography heading>Upcoming Deadlines</Typography>
          </ListItem>

          {deadlines.map((deadline, index) => {
            return (
              <ListItem key={index} button>
                <ListItemIcon>
                  <Avatar>{deadline.date}</Avatar>
                </ListItemIcon>
                <ListItemText primary={deadline.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidenav;
