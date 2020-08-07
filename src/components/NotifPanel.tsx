import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  notifHead: {
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    // color : white,
    padding: theme.spacing(),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function NotifPanel() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen: any) => !prevOpen);
  };

  const handleClose = (event: { target: any }) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: {
    key: string;
    preventDefault: () => void;
  }) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <NotificationsIcon
          variant='contained'
          // color='primary'
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {/* // @ts-ignore */}
          {({
            TransitionProps,
            placement,
          }: {
            TransitionProps: any;
            placement: any;
          }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper style={{ maxHeight: 500, width: 300, overflow: 'auto' }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='menu-list-grow'
                    onKeyDown={handleListKeyDown}
                    style={{ padding: 0 }}
                  >
                    <div>
                      <Typography
                        variant='h5'
                        align='center'
                        className={classes.notifHead}
                      >
                        Notifications
                      </Typography>
                      <div data-align='center' className={classes.root}>
                        <Typography variant='body2' align='center'>
                          XYZ wants to join project 1
                        </Typography>
                        <Button
                          onClick={handleClose}
                          variant='contained'
                          color='primary'
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={handleClose}
                          variant='contained'
                          color='secondary'
                        >
                          Decline
                        </Button>
                      </div>
                      <Divider />
                      <div data-align='center' className={classes.root}>
                        <Typography variant='body2' align='center'>
                          XYZ wants to join taskborad 1 in project 1
                        </Typography>
                        <Button
                          onClick={handleClose}
                          variant='contained'
                          color='primary'
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={handleClose}
                          variant='contained'
                          color='secondary'
                        >
                          Decline
                        </Button>
                      </div>
                      <Divider />
                      <div className={classes.root}>
                        <Typography variant='body2' align='center'>
                          There are 15 new messages in taskboard 5
                        </Typography>
                        <div data-align='center'>
                          <Button
                            variant='contained'
                            color='primary'
                            href='#contained-buttons'
                            onClick={handleClose}
                          >
                            Go to channel
                          </Button>
                        </div>
                      </div>
                      <Divider />
                      <div className={classes.root}>
                        <Typography variant='body2' align='center'>
                          XYZ created a new project pqrs
                        </Typography>
                        <div data-align='center'>
                          <Button
                            variant='contained'
                            color='primary'
                            href='#contained-buttons'
                            onClick={handleClose}
                          >
                            Request to join
                          </Button>
                        </div>
                      </div>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
