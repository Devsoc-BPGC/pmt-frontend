import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';

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
    },
    selected: {
      background: '#0f4c75 !important',
      color: '#bbe1fa !important',
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
              <ListItem
                button
                key={text}
                selected={selectedSideNavItem === text}
                classes={{ selected: classes.selected }}
                onClick={() => handleSelectedSideNavItem(text)}
              >
                <ListItemText primary={text} className={classes.sideNavLink} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </div>
    </>
  );
};

export default Sidenav;
