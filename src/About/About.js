import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "2rem",
    // marginBottom: "2rem",
    margin:'2rem 1rem' 
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
    // padding: "2rem",
  },
}));

export default function About() {
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
          <Typography variant="h3">About</Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.center}>
          <img
            className={classes.resImg}
            src="https://dummyimage.com/600x400/000/fff"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={8} className={classes.center}>
          <Typography variant="h6" color="textSecondary">
            Non deserunt ullamco occaecat et aliquip non ullamco consequat
            voluptate est ullamco. Nulla nostrud cillum ut velit nulla quis sit
            amet elit reprehenderit irure veniam tempor. Incididunt
            reprehenderit id sunt nostrud culpa nostrud dolor anim cupidatat
            culpa. Amet occaecat consectetur velit aute cupidatat elit velit
            anim anim. Id eu aliquip laboris proident id culpa.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
