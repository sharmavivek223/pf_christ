import React from 'react';
import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { GitHub, Link } from '@material-ui/icons';
import {Rotate, Zoom} from 'react-reveal';

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
    prjImg:{
      position: 'relative',
      // overflow: 'hidden',
      boxShadow:"0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)",
      borderRadius:'0.25rem',
      
    },
    insideImg:{
      height:'100%',
      width:'100%'
    }
  }));

 const ProjectDetail=(props)=>{
    const classes = useStyles();
    return (
        <Grid item container justify="space-around" alignItems="center" direction={props.ltr?"row-reverse":"row"} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">{props.title}</Typography>
              <Typography variant="body1">
                {props.description}
              </Typography>
              <Grid container justify="center" spacing={3}>
              {props.prjUrl &&
                  <Grid item>
                  <Rotate>
                        <IconButton onClick={()=>{window.open(props.prjUrl,'_blank')}}>
                            <Link color="secondary" fontSize="large"/>
                        </IconButton>
                        </Rotate>
                  </Grid>}
                  {props.gitUrl &&
                  <Grid item>
                    <Rotate>
                        <IconButton onClick={()=>{window.open(props.gitUrl,'_blank')}}>
                            <GitHub color="secondary" fontSize="large"/>
                        </IconButton>
                        </Rotate>
                  </Grid>}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Zoom>
              <div className={classes.prjImg}>
                    <img src={props.imgUrl} alt="" className={classes.insideImg}/>
              </div>
              </Zoom>
            </Grid>
          </Grid>
        
    );
}

export default ProjectDetail;