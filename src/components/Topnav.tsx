import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotifPanel from './NotifPanel';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
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
  })
);

type Pagetype = {
  page: string;
  index: string;
};

const Topnav = ({ page, index }: Pagetype) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          {page === 'Home' ? (
            <Typography variant='h6' noWrap>
              DASHBOARD
            </Typography>
          ) : (
            <Typography variant='h6' noWrap>
              TASKBOARD {index}
            </Typography>
          )}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label='show 17 new notifications' color='inherit'>
              <Badge badgeContent={17} color='secondary'>
                <NotifPanel />
              </Badge>
            </IconButton>
            <IconButton color='inherit'>
              <ChatBubbleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topnav;
