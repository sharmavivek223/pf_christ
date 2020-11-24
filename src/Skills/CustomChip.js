import { Avatar, Chip, Grid, makeStyles, } from "@material-ui/core";
import React from "react";

const useStyles = (props) =>
  makeStyles((theme) => ({
    chip: {
      height: "48px",
      borderRadius: "35px",
      color: props.textColor,
      backgroundColor: props.color,
      border: props.color && "1px solid " + props.color,
    },
    label:{
        fontSize:"1.3rem"
    },
    avatar:{
        height:'50px',
        width:'50px'
    }
  }));
const CustomChip = (props) => {
  const classes = useStyles(props)();

  return (
      <Grid item xs={6} sm={4} md={3} lg={2} style={{textAlign:'center'}}>
    <Chip
      variant="default"
      color="primary"
      className={classes.chip}
      classes={{label:classes.label,avatar:classes.avatar}}
      label={props.label}
      avatar={props.imgLink&&<Avatar src={props.imgLink} />}
    />
    </Grid>
  );
};

export default CustomChip;
