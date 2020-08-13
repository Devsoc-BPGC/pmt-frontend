import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

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
      height: '20vh',
      backgroundColor: 'rgb(163, 181, 255)',
    },
    project: {
      width: '10vw',
      height: ' 15vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
    },
    projectbtn: {
      width: '10vw',
      height: '15vh',
    },
    taskboards: {
      display: 'grid',
      gridTemplateColumns: '20% 20% 20% 20%',
      gridGap: '1em',
      backgroundColor: '#3F51B5',
    },
    taskboard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
    },
    taskboardbtn: {
      width: '15vw',
      height: '15vh',
    },
    active: {
      backgroundColor: '#3F51B5',
      paddingBottom: '1.1em',
      paddingTop: '0.3em',
    },
  })
);

type ID = {
  id: number;
};

const DashboardTaskboard = ({ id }: ID) => {
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
        <Card className={classes.project}>
          <CardContent>
            <Button className={classes.projectbtn} style={{ fontSize: '75px' }}>
              +
            </Button>
          </CardContent>
        </Card>
        {projects.map((project: Project) => {
          return (
            <div className={project.isActive ? classes.active : ''}>
              <Card key={project.id} className={classes.project}>
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
            <Button
              className={classes.taskboardbtn}
              style={{ fontSize: '75px' }}
            >
              +
            </Button>
          </CardContent>
        </Card>
        {projects[active].taskboards.map((taskboard: Taskboard) => {
          return (
            <Card className={classes.taskboard}>
              <CardContent>
                <Button className={classes.taskboardbtn}>
                  {taskboard.name}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardTaskboard;
