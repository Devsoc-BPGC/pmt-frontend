import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      width: 'max-content',
      borderRadius: '0px 0px 36px 0px',
      left: 0,
      backgroundColor: '#0f4c75',
      color: '#bbe1fa',
      padding: '0rem 0.2rem',
    },
    grow: {
      flexGrow: 1,
    },
  })
);

const Logo = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant='h2' noWrap>
            mello
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Logo;
