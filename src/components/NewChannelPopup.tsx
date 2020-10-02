import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Divider, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckIcon from '@material-ui/icons/Check';
import './NotifPanel.css';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    // borderRadius: `20px`,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    display: `flex`,
    backgroundColor: `#1B262C`,
    color: `#BBE1FA`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
    justifyContent: 'space-around',
    fontStyle: `normal`,
    fontWeight: `bold`,
    lineHeight: `45px`,
    textAlign: `start`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    names: {
      color: '#000000',
      margin: 0,
      textAlign: 'start',
      marginLeft: 20,
      display: 'flex',
      justifyContent: 'space-between',
    },
    paper: {
      borderRadius: '50px',
      position: 'absolute',
      width: '35vw',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      padding: '30px',
      paddingTop: '0',
      paddingRight: '0',
    },
    projectbtn: {
      width: '10vw',
      height: '10vh',
      color: '#0F4C75',
      backgroundColor: '#BBE1FA',
      borderRadius: '10px',
    },
    textField: {
      borderRadius: '10px',
      backgroundColor: '#ffff',
      width: '100%',
      marginRight: '25px',
    },
    icon: {
      fontSize: '3em',
      margin: 'auto',
      marginRight: 10,
      padding: 0,
      verticalAlign: 'middle',
    },
  })
);

export default function NewChannelPopup() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setAge(event.target.value as string);
  // };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function AddMembers() {
    return (
      <div style={{ marginRight: '25px' }}>
        <h2
          style={{
            padding: '0',
            margin: '0',
            alignSelf: 'start',
            verticalAlign: 'bottom',
          }}
        >
          Add Members
        </h2>
        <div className={classes.textField}>
          <div className={classes.names}>
            <Typography
              variant='body1'
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <p
                style={{
                  display: 'inline',
                  margin: '0.5em',
                  fontSize: '1.25em',
                  verticalAlign: 'middle',
                }}
              >
                SELECT MEMBERS
              </p>
              <ExpandMoreIcon className={classes.icon} />
            </Typography>
          </div>
          <div style={{ overflowY: 'auto', maxHeight: '25vh', width: '100%' }}>
            <Divider />
            <Typography className={classes.names} variant='body1'>
              <div>
                <AccountCircleIcon className={classes.icon} />
                Name
              </div>
              <CheckIcon
                style={{ fontSize: '2em', margin: 0, verticalAlign: 'middle' }}
              />
            </Typography>
            <Divider />
            <Typography className={classes.names} variant='body1'>
              <div>
                <AccountCircleIcon className={classes.icon} />
                Name
              </div>
              <CheckIcon
                style={{ fontSize: '2em', margin: 0, verticalAlign: 'middle' }}
              />
            </Typography>
            <Divider />
            <Typography className={classes.names} variant='body1'>
              <div>
                <AccountCircleIcon className={classes.icon} />
                Name
              </div>
            </Typography>
            <Divider />
            <Typography className={classes.names} variant='body1'>
              <div>
                <AccountCircleIcon className={classes.icon} />
                Name
              </div>
            </Typography>
            <Divider />
            <Typography className={classes.names} variant='body1'>
              <div>
                <AccountCircleIcon className={classes.icon} />
                Name
              </div>
            </Typography>
            <Divider />
            <Typography className={classes.names} variant='body1'>
              <div>
                <AccountCircleIcon className={classes.icon} />
                Name
              </div>
            </Typography>
            <Divider />
          </div>
        </div>
      </div>
    );
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <div>
            <h2
              style={{
                position: 'absolute',
                padding: '0',
                margin: '0',
                bottom: '0',
              }}
            >
              Channel name
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: '10px',
              marginRight: '10px',
            }}
          >
            <IconButton
              onClick={handleClose}
              // color='primary'
              component='span'
            >
              <CloseIcon
                className={classes.icon}
                style={{ fontSize: '1.5em', color: '#fff', marginRight: '0' }}
              />
            </IconButton>
          </div>
        </div>
        <div style={{ marginRight: '25px' }}>
          <TextField
            id='outlined-margin-dense'
            className={classes.textField}
            margin='dense'
            variant='outlined'
          />
        </div>
        <AddMembers />
      </div>
    </div>
  );

  return (
    <div>
      <Button
        className={classes.projectbtn}
        style={{
          fontSize: '65px',
          color: 'white',
          backgroundColor: '#0F4C75',
          paddingTop: '0.25em',
        }}
        onClick={handleOpen}
      >
        +
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}
