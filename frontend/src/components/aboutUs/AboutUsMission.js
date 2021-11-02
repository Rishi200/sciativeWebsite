import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";

import AboutUsCultureImage from '../../images/aboutus/AboutUsCultureImage.png'
import AboutUsMissionImage from '../../images/aboutus/AboutUsMissionImage.png'


import '../../css/home.css';

const useStyles = makeStyles({
    gridContainerAbout:{
        paddingLeft: 0,
        paddingRight:0
    }
});

const AboutUsMission = () => {
    const classes = useStyles();

    return (
        <div className="mont-font" style={{height:'70em',marginTop:'4em',paddingTop:'4em'}}>
            <Container className={classes.gridContainerAbout}>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                        <h2 className="font-700">Our <br/> Mission</h2>
                        <p className="mont-font font-300 missiondesc">
                            We deliver unmatched results for top companies across <br/>
                            various industries through our best-in-class machine <br/>
                            learning technology, predictive pricing intelligence, and <br/>
                            business expertise. With our leading “AI-first” platform <br/>
                            and in-house pricing experts, we offer tailored solutions <br/>
                            that empower companies to navigate complex market <br/>
                            dynamics and make business-critical decisions in order <br/>
                            to achieve maximum customer satisfaction.
                        </p>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <img id="missionimg" src={AboutUsMissionImage} alt="Mission"/>
                    </Grid>
                    <Grid item xs={6}>
                        <img id="cultureimg" src={AboutUsCultureImage} alt="Culture"/>
                    </Grid>
                    <Grid item xs={6}>
                    <Stack spacing={2}>
                        <h2 className="font-700">The Sciative <br/> Culture</h2>
                        <p className="mont-font font-300 missiondesc">
                            As an industry leader, we encourage and reward <br/>
                            innovation. We challenge our people to create <br/>
                            phenomenal solutions, and we celebrate it across the <br/>
                            board, from strong, AI-driven products to innovative <br/>
                            marketing tactics to excellent customer success <br/>
                            initiatives. Our team consists of some of the best data <br/>
                            scientists, engineers, pricing specialists, business <br/>
                            executives, and marketers in the industry, all working <br/>
                            together to provide our customers with the most <br/>
                            innovative solutions and experiences possible. 
                        </p>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AboutUsMission
