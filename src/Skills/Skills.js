import {  Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomChip from "./CustomChip";

const useStyles = makeStyles((theme) => ({
  root: {
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
  resImg:{
    width:'100%',
    height:'auto',
  }
}));

const skillArr=[{label:'Skill1',color:'lightblue',textColor:'white',imgLink:'https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg'},
{label:'Skill1',color:'lightblue',textColor:'white',imgLink:'https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg'},
{label:'Skill1',color:'lightblue',textColor:'white',imgLink:'https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg'},]
export default function Skills() {
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
          <Typography variant="h3" component="span">Skills</Typography>
        </Grid>
        <Grid item container xs={12} justify="space-around"
  alignItems="center" spacing={3}>
          
             {skillArr.map(({label,color,textColor,imgLink},i)=>(
                 <CustomChip label={label} color="lightblue" textColor="white" imgLink="https://static.hollywoodreporter.com/sites/default/files/2019/03/avatar-publicity_still-h_2019-compressed.jpg"/>
  ))}
             
        </Grid>
      </Grid>
    </div>
  );
}
