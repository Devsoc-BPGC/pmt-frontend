import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import NewProjectPopup from './NewProjectPopup';
import NewTaskBoardPopup from './NewTaskBoardPopup';
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
      height: ' 10vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
      backgroundColor: '#BBE1FA',
      borderRadius: '10px',
    },
    projectbtn: {
      width: '10vw',
      height: '10vh',
      color: '#0F4C75',
      backgroundColor: '#BBE1FA',
      borderRadius: '10px',
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
  }

  const projects_data = [
    {
      id: 0,
      name: 'Mello',
      isActive: false,
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
  const [active, setActive] = useState(1);

  //   Some functions for change
  useEffect(() => {
    projects_data[id].isActive = true;
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
    <div>
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
              <Card className={classes.project}>
                <CardContent>
                  <Button
                    className={classes.projectbtn}
                    onClick={() => {
                      console.log('clicked');
                      projects_data.forEach((project_data: Project) => {
                        if (project_data.id === project.id) {
                          project_data.isActive = true;
                        } else {
                          project_data.isActive = false;
                        }
                      });
                      setProjects([...projects_data]);
                    }}
                  >
                    {project.name}
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
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
    </div>
  );
};

export default DashboardProjectCard;
