import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";

import Abhibus from '../../images/aboutus/Abhibus.png'
import Amazon from '../../images/aboutus/amazon.png'
import Flipkart from '../../images/aboutus/Flipkart.png'
import Shopify from '../../images/aboutus/Shopify.png'

import Ellipse from '../../images/aboutus/Ellipse.png'

import '../../css/home.css';

const useStyles = makeStyles({
    gridContainerTeam:{
        paddingLeft: 10,
        paddingRight:10,
        paddingTop:'60px'
    }
});

const Team = () => {
    const classes = useStyles();
    return (
        <div className="mont-font" style={{height:'70em',marginTop:'4em',paddingTop:'1em'}}>
            <Container>
                <h2 className="font-700">Team </h2>
                <Grid container alignItems="center" justifyContent="center" className={classes.gridContainerTeam} spacing={6}>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <img src={Ellipse} alt="Team" className="team-img" />
                        <h6 className="font-700">Lorem Ipsum</h6>
                    </Grid>
                </Grid>
                <div style={{marginTop:'180px'}}>
                    <h2 className="font-700">Our Certified <br/> Partners </h2>
                    <Stack sx={{marginTop:'60px'}} spacing={14} direction="row" justifyContent="center" alignItems="center">
                        <img style={{height:'35px',width:'120px'}} src={Amazon} alt="Amazon"/>
                        <img style={{height:'40px',width:'130px'}} src={Shopify} alt="Shopify"/>
                        <img style={{height:'45px',width:'160px'}} src={Flipkart} alt="Flipkart"/>
                        <img style={{height:'50px',width:'150px'}} src={Abhibus} alt="Abhibus"/>
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default Team;
