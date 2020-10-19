import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  CssBaseline,
  Modal,
  Backdrop,
  Fade,
  Paper,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';
import Deadlines from '../Common/Deadlines';
import Sidenav from '../Common/Navigation/Sidenav';
import Logo from '../Common/Logo';
import Topnav from '../Common/Navigation/Topnav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#1b262c',
    },
    sidePanels: {
      marginTop: '10%',
      marginBottom: '10%',
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
      backgroundColor: '#1b262c',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    },
    emptySpace: {
      padding: theme.spacing(3),
    },
    overlay: {
      background: '#bbe1fa',
      borderRadius: '36px',
      padding: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      width: 300,
      height: 300,
      fontSize: '128px',
      background: '#0f4c75',
    },
    links: {
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      background: '#0f4c75',
      color: 'white',
      borderRadius: '25px',
      width: '30%',
      '&:hover': {
        background: '#0f4c75',
        color: 'white',
      },
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      borderRadius: '30px',
      backgroundColor: '#1b262c',
      color: '#ffffff',
      boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25)',
      padding: theme.spacing(1, 3, 2),
    },
    heading: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    editBio: {
      borderRadius: '10px',
      padding: '1rem',
    },
    save: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '0.5rem',
    },
  })
);

const profile_data = {
  name: 'Taarushthenoob',
  subName: '@Taarush789',
  image: '/broken-image.jpg',
  githubLink: 'https://github.com/Taarushthenoob',
  emailLink: 'taarush.bhatia@gmail.com',
};

const Profile = () => {
  const classes = useStyles();

  const [profile] = React.useState(profile_data);
  const [open, setOpen] = React.useState(false);
  const [bio, setBio] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBio = () => {
    // send bio to backend from here
    console.log(bio);
    handleClose();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page='Home' index='1' />
      <div className={classes.sidePanels}>
        <Sidenav active='Profile' />
        <Deadlines />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.emptySpace} />
        <Paper elevation={6} className={classes.overlay}>
          <Avatar
            className={classes.avatar}
            alt={profile.name}
            src={profile.image}
          />
          <div className={classes.emptySpace} />
          <Typography variant='h3' component='h3'>
            {profile.name}
          </Typography>
          <Typography variant='h4' component='h4'>
            {profile.subName}
          </Typography>
          <div className={classes.emptySpace} />
          <div className={classes.links}>
            <Typography variant='h6' component='h6'>
              <b>Linked GitHub:</b>{' '}
              <a
                href={profile.githubLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                {profile.githubLink}
              </a>
            </Typography>
            <Typography variant='h6' component='h6'>
              <b>Linked Email:</b>{' '}
              <a
                href={profile.emailLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                {profile.emailLink}
              </a>
            </Typography>
          </div>
          <div className={classes.emptySpace} />
          <Typography variant='h3' component='h3'>
            <b>Account Settings</b>
          </Typography>
          <div className={classes.emptySpace} />
          <Button
            variant='contained'
            className={classes.button}
            size='large'
            onClick={handleOpen}
          >
            Edit Bio
          </Button>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className={classes.heading}>
                  <h3>Edit Bio</h3>
                  <p>
                    <CloseIcon onClick={handleClose} />
                  </p>
                </div>
                <form>
                  <textarea
                    rows={8}
                    cols={50}
                    className={classes.editBio}
                    onChange={e => setBio(e.target.value)}
                  ></textarea>
                  <div className={classes.save}>
                    <Button
                      variant='contained'
                      className={classes.button}
                      onClick={handleBio}
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </Fade>
          </Modal>
          <div className={classes.emptySpace} />
          <Button
            variant='contained'
            className={classes.button}
            size='large'
            startIcon={<GitHubIcon />}
          >
            Link with GitHub
          </Button>
        </Paper>
      </main>
    </div>
  );
};

export default Profile;
