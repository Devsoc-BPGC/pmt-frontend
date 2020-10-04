import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: {
      margin: '0.2em -0.8em',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      boxShadow: '0',
    },
    paper: {
      backgroundColor: '#1B262C',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '10px',
      color: '#fff',
    },
    subtitle2: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: '30px',
      padding: '5px 20px',
    },
  })
);

const TaskinfoModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        Details
      </button>
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
            <Grid container spacing={3} className={classes.gridContainer}>
              <Grid item xs={1}>
                <AssignmentOutlinedIcon fontSize='large' />
              </Grid>
              <Grid item xs={10}>
                <Typography variant='h5'>
                  Make required changes to AndroidManifest.xml
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                  -in list Ongoing
                </Typography>
                <Grid container spacing={3} className={classes.gridContainer}>
                  <Grid item xs={6}>
                    <Typography
                      variant='subtitle2'
                      gutterBottom
                      className={classes.subtitle2}
                    >
                      Task taken by
                    </Typography>
                    <AccountCircleOutlinedIcon />
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: 'right' }}>
                    <Typography
                      variant='subtitle2'
                      gutterBottom
                      className={classes.subtitle2}
                    >
                      Due Date
                    </Typography>
                    <Typography variant='subtitle2' gutterBottom>
                      20 July
                    </Typography>
                  </Grid>
                </Grid>
                <Paper elevation={0}>
                  <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item xs={1}>
                      <MenuIcon style={{ margin: '0.15em 0.25em' }} />
                    </Grid>
                    <Grid item xs={11} style={{ paddingRight: '50px' }}>
                      <Typography
                        variant='subtitle2'
                        gutterBottom
                        className={classes.subtitle2}
                        style={{ marginTop: '6px' }}
                      >
                        Description
                        <Button
                          variant='contained'
                          color='primary'
                          style={{
                            padding: '0 0.3em',
                            marginLeft: '2em',
                            borderRadius: '0',
                          }}
                        >
                          Edit
                        </Button>
                      </Typography>
                      <InputBase
                        className={classes.input}
                        placeholder='Add description'
                        inputProps={{ 'aria-label': 'Add description' }}
                        fullWidth
                        multiline
                        style={{ margin: '1em 0', padding: '0' }}
                        rows={10}
                      />
                    </Grid>
                  </Grid>
                </Paper>
                <Grid container spacing={3} className={classes.gridContainer}>
                  <Grid item xs={1}>
                    <PersonIcon fontSize='large' />
                  </Grid>
                  <Grid item xs={11}>
                    <InputBase
                      className={classes.input}
                      placeholder='Write a comment...'
                      inputProps={{ 'aria-label': 'Write a comment...' }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <CloseIcon fontSize='large' style={{ cursor: 'pointer' }} />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TaskinfoModal;
