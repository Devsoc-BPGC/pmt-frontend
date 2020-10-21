import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotifPanel from '../Notifications/NotifPanel';
import ChannelSidebar from './ChannelSidebar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: `80%`,
      borderRadius: '0px 0px 0px 36px',
      backgroundColor: '#bbe1fa',
      color: '#1b262c',
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
      <AppBar className={classes.appBar}>
        <Toolbar>
          {page === 'Home' ? (
            <Typography variant='h4' noWrap>
              Dashboard
            </Typography>
          ) : (
            <Typography variant='h4' noWrap>
              {page}
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
              <ChannelSidebar />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topnav;
