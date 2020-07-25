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
  })
);

const Sidenav = () => {
  const classes = useStyles();

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
        <div className={classes.toolbar}>
          <Avatar className={classes.large}>R</Avatar>
          <Typography paragraph>John Doe</Typography>
        </div>
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
          <ListItem button>
            <ListItemIcon>
              <Avatar>24</Avatar>
            </ListItemIcon>
            <ListItemText primary='Complete Wireframes' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar>24</Avatar>
            </ListItemIcon>
            <ListItemText primary='Complete Wireframes' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar>24</Avatar>
            </ListItemIcon>
            <ListItemText primary='Complete Wireframes' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar>24</Avatar>
            </ListItemIcon>
            <ListItemText primary='Complete Wireframes' />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidenav;
