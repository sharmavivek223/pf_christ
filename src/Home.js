import React, { useCallback, useEffect, useState, Fragment } from "react";

import axios from "axios";


import NavBar from "./Shared/NavBar";
import UserDataContext from "./Shared/UserDataContext";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { Fab, Grid, makeStyles, Toolbar, Typography, useScrollTrigger, Zoom } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}



const Home = (props) => {
  // let [responseData, setResponseData] = useState("");
  // const fetchData = useCallback(() => {
  //   axios(process.env.PUBLIC_URL + "/data/userData.json")
  //     .then((response) => {
  //       setResponseData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  

  return (
    <Fragment>
      
        
         
            <NavBar/>
            <Toolbar id="back-to-top-anchor" />
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Typography style={{textAlign:"center"}}>© {new Date().getFullYear()} Copyrights: Christopher</Typography>
            <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
          
        
    
      
    </Fragment>
  );
};

export default Home;
