import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: 'max-content',
    },
    sideNav: {
      width: '250px',
      borderRadius: '0px 36px 36px 0px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
      backgroundColor: '#bbe1fa',
      padding: '1rem 0rem',
      color: '#1b262c',
    },
    sideNavLink: {
      textAlign: 'center',
      fontWeight: 700,
    },
    selected: {
      background: '#0f4c75 !important',
      color: 'white !important',
    },
  })
);

type LinkType = {
  active: string;
};

const Sidenav = ({ active }: LinkType) => {
  const classes = useStyles();
  const [selectedSideNavItem, setSelectedSideNavItem] = useState(active);

  const handleSelectedSideNavItem = (sideNavItem: string) => {
    setSelectedSideNavItem(sideNavItem);
  };

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.sideNav}>
          <List>
            {['Dashboard', 'Calendar', 'Profile', 'Settings'].map(text => (
              <Link
                to={text === 'Dashboard' ? '/' : text.toLowerCase()}
                id='no-deco'
                style={{ textDecoration: 'none', color: '#1b262c' }}
              >
                <ListItem
                  button
                  key={text}
                  selected={selectedSideNavItem === text}
                  classes={{ selected: classes.selected }}
                  onClick={() => handleSelectedSideNavItem(text)}
                >
                  <ListItemText
                    primary={text}
                    className={classes.sideNavLink}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Paper>
      </div>
    </>
  );
};

export default Sidenav;
