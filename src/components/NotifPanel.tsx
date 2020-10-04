import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import './NotifPanel.css';
import { Modal, Paper, Badge } from '@material-ui/core';

// const styles = require(../css/NotifPanel.css);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const useStyles = makeStyles(theme => ({
  shape: {
    borderRadius: 50,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  notifPanelStyle: {
    backgroundColor: '#BBE1FA',
    padding: 0,
    maxWidth: (25 * windowWidth) / 100,
    maxHeight: (60 * windowHeight) / 100,
  },
  notifHead: {
    ...theme.typography.button,
    padding: theme.spacing(),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0F4C75',
    color: '#BBE1FA',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Styledbutton1 = styled(Button)`
  background-color: #0f4c75;
  color: #ffffff;
`;
const Styledbutton2 = styled(Button)`
  background-color: #ffffff;
  color: #000000;
`;
export default function NotifPanel() {
  const buttonClassStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    paddingBottom: 10,
  };
  /// /////////////////////////

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: { currentTarget: any }) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  function NotifContent() {
    return (
      <div
        style={{
          backgroundColor: '#BBE1FA',
          overflowY: 'scroll',
        }}
        className={classes.notifPanelStyle}
      >
        <div>
          <div className={classes.root}>
            <Typography variant='body1' align='center'>
              XYZ wants to join project 1
            </Typography>
            <div style={buttonClassStyle}>
              <Styledbutton2
                onClick={handleClose}
                variant='contained'
                // color='primary'
              >
                Accept
              </Styledbutton2>
              <Styledbutton1 onClick={handleClose} variant='contained'>
                Decline
              </Styledbutton1>
            </div>
          </div>
          <Divider />
          <div data-align='center' className={classes.root}>
            <Typography variant='body1' align='center'>
              XYZ wants to join taskborad 1 in project 1
            </Typography>
            <div style={buttonClassStyle}>
              <Styledbutton2
                onClick={handleClose}
                variant='contained'
                // color='primary'
              >
                Accept
              </Styledbutton2>
              <Styledbutton1
                onClick={handleClose}
                variant='contained'
                // color='secondary'
              >
                Decline
              </Styledbutton1>
            </div>
          </div>
          <Divider />
          <div className={classes.root}>
            <Typography variant='body1' align='center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              voluptatibus fugiat cumque doloribus, et inventore fuga quo
              reiciendis quas aperiam!
            </Typography>
            <div style={buttonClassStyle}>
              <Styledbutton1
                variant='contained'
                // color='primary'
                href='#contained-buttons'
                onClick={handleClose}
              >
                Request to join
              </Styledbutton1>
            </div>
          </div>
          <Divider />
          <div className={classes.root}>
            <Typography variant='body1' align='center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              voluptatibus fugiat cumque doloribus, et inventore fuga quo
              reiciendis quas aperiam!
            </Typography>
            <div style={buttonClassStyle}>
              <Styledbutton1
                variant='contained'
                // color='primary'
                href='#contained-buttons'
                onClick={handleClose}
              >
                Request to join
              </Styledbutton1>
            </div>
          </div>
          <Divider />
          <div className={classes.root}>
            <Typography variant='body1' align='center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              voluptatibus fugiat cumque doloribus, et inventore fuga quo
              reiciendis quas aperiam!
            </Typography>
            <div style={buttonClassStyle}>
              <Styledbutton1
                variant='contained'
                // color='primary'
                href='#contained-buttons'
                onClick={handleClose}
              >
                Request to join
              </Styledbutton1>
            </div>
          </div>
          <Divider />
          <div className={classes.root}>
            <Typography variant='body1' align='center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              voluptatibus fugiat cumque doloribus, et inventore fuga quo
              reiciendis quas aperiam!
            </Typography>
            <div style={buttonClassStyle}>
              <Styledbutton1
                variant='contained'
                // color='primary'
                href='#contained-buttons'
                onClick={handleClose}
              >
                Request to join
              </Styledbutton1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function NotifHead() {
    return (
      <div className={classes.notifHead}>
        <Typography
          variant='h6'
          style={{
            alignSelf: 'center',
          }}
        >
          NOTIFICATIONS
        </Typography>
        <IconButton
          color='inherit'
          style={{
            alignSelf: 'center',
            position: 'absolute',
            right: '0',
            top: '1',
          }}
        >
          <CancelOutlinedIcon
            variant='contained'
            align='right'
            onClick={handleClose}
          />
        </IconButton>
      </div>
    );
  }
  function NotifBlock() {
    return (
      <Modal
        id='simple-menu'
        anchorEl={anchorEl}
        anchorReference='anchorEl'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ disablePadding: true }}
        borderRadius={16}
      >
        <Paper
          style={{
            display: 'flex',
            position: 'absolute',
            top: 20,
            right: 20,
            justifyContent: 'right',
            flexDirection: 'column',
          }}
        >
          <NotifHead />
          <NotifContent />
        </Paper>
      </Modal>
    );
  }
  return (
    <div className={classes.root}>
      <div>
        <Badge badgeContent={6} color='secondary'>
          <NotificationsIcon
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            variant='contained'
          />
          <NotifBlock />
        </Badge>
      </div>
    </div>
  );
}
