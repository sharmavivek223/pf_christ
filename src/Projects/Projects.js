import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, Link } from "@material-ui/icons";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem 1rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: "center",
  },
  resImg: {
    width: "100%",
    height: "auto",
  },
  prjImg: {
    position: "relative",
    // overflow: 'hidden',
    boxShadow: "0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)",
    borderRadius: "0.25rem",
  },
  insideImg: {
    height: "100%",
    width: "100%",
  },
}));

const projects=[{title:"Project Title 1",
description:"Incididunt sit culpa adipisicing velit officia laborum Lorem in nisi est et aliquip non. Exercitation elit magna magna tempor non veniam ex magna mollit aliquip occaecat et. Esse nostrud ut non occaecat reprehenderit commodo qui ipsum eiusmod do.",
imgUrl:"https://dummyimage.com/600x400/fff/000",
gitUrl:"https://github.com",
prjUrl:"https://github.com"},
{title:"Project Title 2",
description:"Incididunt sit culpa adipisicing velit officia laborum Lorem in nisi est et aliquip non. Exercitation elit magna magna tempor non veniam ex magna mollit aliquip occaecat et. Esse nostrud ut non occaecat reprehenderit commodo qui ipsum eiusmod do.",
imgUrl:"https://dummyimage.com/600x400/fff/000",
gitUrl:"https://github.com",
prjUrl:"https://github.com"}]

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row-reverse"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.center}>
          <Typography variant="h3" component="span">
            Projects
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="space-around"
          alignItems="center"
          spacing={3}
        >
          {projects.map(({title,description,imgUrl,gitUrl,prjUrl},i)=>(<ProjectDetail
            ltr={i%2===0}
            title={title}
            description={description}
            imgUrl={imgUrl}
            gitUrl={gitUrl}
            prjUrl={prjUrl}
          />))}
          
        </Grid>
      </Grid>
    </div>
  );
}
