import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, Link, LinkedIn } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3rem 1rem",
    border: "10px solid rgb(239, 214, 4)",
    padding:"6rem 2rem"
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
  prjImg:{
    position: 'relative',
    // overflow: 'hidden',
    boxShadow:"0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)",
    borderRadius:'0.25rem',
    
  },
  insideImg:{
    height:'100%',
    width:'100%'
  },
  link:{
      textDecoration:'none',
      color:[theme.palette.secondary.main]
  },
  mb:{
    marginBottom:'1rem'
  }
}));

const myInfo={
    email:"test@gmail.com",
    github:"",
    lnkdIn:""
}

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={12}
          sm={6}
          justify="space-around"
          alignItems="center"
          spacing={3}
        >
            <div>
          <img src="https://m.gifmania.co.uk/Web-Design-Animated-Gifs/Animated-Signs-Websites/Contact-Signs/Contact-Me-90502.gif" alt=""/>
          </div>
          </Grid>
        <Grid item xs={12} sm={6} className={classes.center}>
          <Typography variant="h3" className={classes.mb}>
            Contact
          </Typography>
          <Typography variant="body1" >
  Feel free to contact me on my e-mail: <a href={`mailto:${myInfo['email']}`} className={classes.link}>{myInfo['email']}</a>
          </Typography>
          <Typography variant="body1" className={classes.mb}>
          Also follow me on all my social media accounts.
                    </Typography>
          
          <Grid container justify="center" spacing={3}>
          <Grid item>
                        <IconButton>
                            <GitHub  fontSize="large"/>
                        </IconButton>
                  </Grid>
                  <Grid item>
                        <IconButton>
                            <LinkedIn color="primary" fontSize="large"/>
                        </IconButton>
                  </Grid>
                  
              </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}
