import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AddIcon from '@material-ui/icons/Add';
import {
  Paper,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  IconButton,
  Collapse,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 300,
    },
    drawer: {
      display: 'flex',
      justifyContent: 'center',
      color: '#BBE1FA',
      backgroundColor: '#0F4C75',
      height: '100%',
      borderRadius: '0px',
      boxShadow: 'inset 4px 0px 4px rgba(255, 255, 255, 0.25)',
    },
    heading: {
      padding: '1rem',
      textAlign: 'center',
      fontSize: '32px',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    nested: {
      paddingLeft: theme.spacing(4),
      display: 'flex',
      justifyContent: 'space-between',
    },
    projectList: {
      backgroundColor: '#BBE1FA',
      color: '#1b262c',
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: 'inset 4px 0px 4px rgba(255, 255, 255, 0.25)',
      '&:hover': {
        backgroundColor: '#BBE1FA',
        color: '#1b262c',
      },
    },
    channelList: {
      background: '#1b262c',
    },
    addButton: {
      backgroundColor: '#BBE1FA',
      color: '#1b262c',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'inset 4px 0px 4px rgba(255, 255, 255, 0.25)',
    },
  })
);

type Anchor = 'right';

interface Channel {
  id: number;
  name: string;
  members: number;
}

interface Project {
  id: number;
  name: string;
  isActive: boolean;
  channels: Array<Channel>;
}

const channels_data = [
  {
    id: 0,
    name: 'CSA App',
    isActive: false,
    channels: [
      {
        id: 0,
        name: '#UI/UX Design',
        members: 35,
      },
      {
        id: 1,
        name: '#Frontend',
        members: 23,
      },
      {
        id: 2,
        name: '#Backend',
        members: 13,
      },
      {
        id: 3,
        name: '#Marketplace',
        members: 5,
      },
    ],
  },
  {
    id: 1,
    name: 'Mello',
    isActive: false,
    channels: [
      {
        id: 0,
        name: '#UI/UX Design',
        members: 19,
      },
      {
        id: 1,
        name: '#Frontend',
        members: 12,
      },
      {
        id: 2,
        name: '#Chat Module',
        members: 13,
      },
      {
        id: 3,
        name: '#Authentication',
        members: 5,
      },
      {
        id: 4,
        name: '#GitHub',
        members: 18,
      },
    ],
  },
  {
    id: 2,
    name: 'Waves',
    isActive: false,
    channels: [
      {
        id: 0,
        name: '#UI/UX Design',
        members: 24,
      },
      {
        id: 1,
        name: '#Frontend',
        members: 17,
      },
      {
        id: 2,
        name: '#Backend',
        members: 5,
      },
    ],
  },
];

export default function ChannelSideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [open, setOpen] = React.useState([]);

  React.useEffect(() => {
    channels_data.forEach((project: Project) => {
      setOpen((oldOpen: Array<Boolean>) => [...oldOpen, project.isActive]);
    });
  }, []);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      ((event as any).key === 'Tab' || (event as any).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Paper className={classes.drawer}>
      <div
        className={clsx(classes.list)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div>
          <Typography variant={'h2'} className={classes.heading}>
            <div>
              <ChatBubbleIcon variant={'h3'} /> Channels
            </div>
            <IconButton color='inherit'>
              <CancelOutlinedIcon
                variant='contained'
                align='right'
                onClick={toggleDrawer(anchor, false)}
              />
            </IconButton>
          </Typography>
        </div>

        <List>
          {channels_data.map((project: Project) => {
            return (
              <React.Fragment>
                <ListItem
                  button
                  onClick={() => {
                    let newOpen = open;
                    project.isActive = !project.isActive;
                    newOpen[project.id] = project.isActive;
                    setOpen((oldOpen: Array<Boolean>) => [
                      ...oldOpen,
                      project.isActive,
                    ]);
                  }}
                  className={classes.projectList}
                  key={project.id}
                >
                  <Typography>{project.name}</Typography>
                  {open[project.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  in={open[project.id]}
                  timeout='auto'
                  unmountOnExit
                  className={classes.channelList}
                >
                  <List component='div' disablePadding>
                    {project.channels.map((channel: Channel) => {
                      return (
                        <React.Fragment>
                          <ListItem
                            button
                            className={classes.nested}
                            key={channel.id}
                          >
                            <Typography>{channel.name}</Typography>
                            <small style={{ right: 0 }}>
                              {channel.members} members
                            </small>
                          </ListItem>
                        </React.Fragment>
                      );
                    })}
                  </List>
                </Collapse>
                <Divider />
              </React.Fragment>
            );
          })}
          <ListItem
            button
            onClick={() => {
              //add code for channel popup/modal
            }}
            className={classes.addButton}
          >
            <AddIcon />
          </ListItem>
        </List>
      </div>
    </Paper>
  );

  return (
    <div>
      {(['right'] as Anchor[]).map(anchor => (
        <React.Fragment key={anchor}>
          <ChatBubbleIcon onClick={toggleDrawer(anchor, true)} />
          <Paper className={classes.drawer}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Paper>
        </React.Fragment>
      ))}
    </div>
  );
}
