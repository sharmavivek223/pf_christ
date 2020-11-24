import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Bounce, Slide} from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'2rem 1rem',
    marginTop:'90px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: "center",
  },
  resImg:{
    width:'100%',
    height:'auto',
    // padding:'2rem'
  }
}));

export default function Hero() {
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
        <Grid item xs={12} md={6} className={classes.center}>
          <Slide right>
          <img className={classes.resImg} src="https://dummyimage.com/600x400/000/fff" alt=""/>
          </Slide>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <Bounce>
          <Typography variant="h3">
            Christopher, front-end developpeur
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Eiusmod aliquip officia consequat et nisi cillum.
          </Typography>
          </Bounce>
        </Grid>
      </Grid>
    </div>
  );
}
