import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import NewProjectPopup from './newProjectPopup';
import NewTaskBoardPopup from './NewTaskBoardPopup';
import './DashboardCard.css';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    projects: {
      display: 'flex',
      alignItems: 'center',
      padding: '1em',
      height: '12vh',
      backgroundColor: '#1B262C',
    },
    addproject: {
      width: '10vw',
      height: ' 10vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
      backgroundColor: '#0F4C75',
      borderRadius: '10px',
    },
    project: {
      width: '10vw',
      height: ' 20vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
      backgroundColor: '#111',
      borderRadius: '10px',
    },

    projectbtn: {
      width: '10vw',
      height: '20vh',
      color: '#0F4C75',
      // backgroundColor: '#BBE1FA',
      borderRadius: '10px',
    },
    projectSm: {
      width: '10vw',
      height: ' 10vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
      backgroundColor: '#111',
      borderRadius: '10px',
    },

    projectbtnSm: {
      width: '10vw',
      height: '10vh',
      color: '#0F4C75',
      borderRadius: '10px',
    },
    projectText: {
      position: 'absolute',
      color: 'white',
      bottom: '0',
      fontSize: '20px',
      background: '#1115',
      width: '100%',
      '&:hover': {
        height: '100%',
      },
    },
    taskboards: {
      display: 'grid',
      gridTemplateColumns: '20% 20% 20% 20%',
      gridGap: '1em',
      backgroundColor: '#0F4C75',
      borderRadius: '5px',
    },
    taskboard: {
      height: '13vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
      borderRadius: '10px',
    },
    taskboardbtn: {
      width: '15vw',
      height: '15vh',
      color: 'white',
      backgroundColor: '#1B262C',
    },
    active: {
      backgroundColor: '#0F4C75',
      borderRadius: '5px',
    },
  })
);

type ID = {
  id: number;
};

const DashboardProjectCard = ({ id }: ID) => {
  interface Taskboard {
    id: number;
    name: string;
  }

  interface Project {
    id: number;
    name: string;
    isActive: boolean;
    taskboards: Array<Taskboard>;
    isShown: boolean;
  }

  const projects_data = [
    {
      id: 0,
      name: 'Mello',
      isActive: false,
      isShown: false,
      taskboards: [
        {
          id: 0,
          name: 'Kronos',
        },
        {
          id: 1,
          name: 'Frontend',
        },
        {
          id: 2,
          name: 'Backend',
        },
      ],
    },
    {
      id: 1,
      name: 'Waves',
      isActive: false,
      isShown: false,
      taskboards: [
        {
          id: 0,
          name: 'App',
        },
        {
          id: 1,
          name: 'Website',
        },
        {
          id: 2,
          name: 'Backend',
        },
      ],
    },
    {
      id: 2,
      name: 'Shortme',
      isActive: false,
      isShown: false,
      taskboards: [
        {
          id: 0,
          name: 'Frontend',
        },
        {
          id: 1,
          name: 'Backend',
        },
      ],
    },
  ];
  const classes = useStyles();
  const [projects, setProjects] = useState(projects_data);
  const [active, setActive] = useState('');
  const [taskcards, showTaskcards] = useState(false);
  const [cardClass, setCardClass] = useState(classes.project);
  const [btnClass, setBtnClass] = useState(classes.projectbtn);
  const [isShown, setIsShown] = useState([]);
  //   Some functions for change
  useEffect(() => {
    // projects_data[id].isActive = true;
    setProjects([...projects_data]);
  }, []);
  useEffect(() => {
    projects.forEach((project: Project) => {
      if (project.isActive === true) {
        setActive(project.id);
      }
    });
  }, [projects]);

  return (
    <div
      onBlur={() => {
        // setCardClass(classes.project);
        // setBtnClass(classes.projectbtn);
        // setActive('');
        // showTaskcards(false);
      }}
    >
      <CssBaseline />
      <div className={classes.projects}>
        <Card className={classes.addproject}>
          <CardContent>
            <NewProjectPopup />
          </CardContent>
        </Card>
        {projects.map((project: Project) => {
          return (
            <div
              className={project.isActive ? classes.active : ''}
              key={project.id}
            >
              <Card className={cardClass}>
                <CardContent>
                  <Button
                    className={btnClass}
                    style={{
                      background:
                        'url(' +
                        'https://ik.imagekit.io/enactus/pilani_MACw_sdxb.jpeg' +
                        ')',
                    }}
                    onMouseEnter={() => {
                      let newIsShown = isShown;
                      project.isShown = true;
                      newIsShown[project.id] = project.isShown;
                      setIsShown((oldIsShown: Array<boolean>) => {
                        return [...oldIsShown, project.isShown];
                      });
                    }}
                    onMouseLeave={() => {
                      let newIsShown = isShown;
                      project.isShown = false;
                      newIsShown[project.id] = project.isShown;
                      setIsShown((oldIsShown: Array<boolean>) => {
                        return [...oldIsShown, project.isShown];
                      });
                    }}
                    onClick={() => {
                      console.log('clicked');
                      setCardClass(classes.projectSm);
                      setBtnClass(classes.projectbtnSm);
                      projects_data.forEach((project_data: Project) => {
                        if (project_data.id === project.id) {
                          project_data.isActive = true;
                        } else {
                          project_data.isActive = false;
                        }
                      });
                      setActive(project.id);
                      setProjects([...projects_data]);
                      showTaskcards(true);
                    }}
                  >
                    {!taskcards && (
                      <div className={classes.projectText}>
                        <strong>{project.name}</strong>
                        {isShown[project.id] && (
                          <>
                            <br />
                            {project.taskboards.length} Taskboards
                            <br />
                            23 Memebers
                          </>
                        )}
                      </div>
                    )}
                    {taskcards && (
                      <div>
                        <strong>{project.name}</strong>
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      {taskcards && (
        <div className={classes.taskboards}>
          <Card className={classes.taskboard}>
            <CardContent>
              <NewTaskBoardPopup />
            </CardContent>
          </Card>
          {projects[active].taskboards.map(
            (taskboard: Taskboard, index: number) => {
              return (
                <Card className={classes.taskboard} key={index}>
                  <CardContent>
                    <Button className={classes.taskboardbtn}>
                      {taskboard.name}
                    </Button>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardProjectCard;
