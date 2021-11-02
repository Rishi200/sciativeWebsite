import React from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import RetailProj from '../../images/RetailProj.png';
import TravelProj from '../../images/TravelProj.png';
import MediaProj from '../../images/MediaProj.png';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "60px",
        paddingRight: "60px"
    },
    stackContainer: {
        paddingLeft: "60px",
        paddingRight: "60px"
    },
    gridItemLeft: {
        color: "white",
        paddingLeft: "250px"
    },
    gridItemRight: {
        color: "white",
        paddingLeft: "90px"
    }
});


const ProjectComponent = () => {
    const classes = useStyles();

    return (
    <Stack sx={{backgroundColor:'black',height:'100em',color:'white',paddingTop:'6em'}} spacing={10}>
        <Container>
            <Stack className={classes.stackContainer} direction="row" justifyContent="flex-end" alignItems="flex-start">
                <h1 className="project-title">Sciative <br /> Solutions</h1>
                <div className="projects vertical-text-left-careers">
                    <h5 style={{fontSize:'16px'}}>SOLUTIONS</h5>
                </div>
            </Stack>
        </Container>

        <Grid container className={classes.gridContainer}>
            <Grid item xs={6} className={classes.gridItemLeft}>
                <h1 id="project-title-retail">Retail</h1>
                <h3 className="project-title-desc">BRIO:</h3>
                <p className="project-brief-desc">
                    Sciative provides a suite of dynamic solutions <br />
                    that guide retailers to optimized pricing while <br />
                    also assisting them in cutting costs and <br />
                    maximizing profitability.
                </p>
                <a style={{color:"#f8a103",textDecoration:'None'}} href="#">Read More</a>
            </Grid>

            <Grid item xs={6} className={classes.gridItemRight}>
                <img id="retailImg" src={RetailProj} alt="retail"/>
            </Grid>
        
        </Grid>

        <Grid container className={classes.gridContainer}>
            <Grid item xs={6} className={classes.gridItemLeft}>
                <img id="mediaImg" src={MediaProj} alt="media"/>
            </Grid>

            <Grid item xs={6} className={classes.gridItemRight}>
                <h1 id="project-title-media">Media</h1>
                <h3 className="project-title-desc">AdPrice:</h3>
                <p className="project-brief-desc">
                Our intelligent solutions give continuous <br />
                strategic enhancements and assistance at <br />
                every stage of the process, from initial pricing <br />
                and automatic data feeds to monitoring <br />
                budgets and producing weekly <br />
                performance reports configurations to <br />
                determine the optimal price, maximizing <br />
                your overall profits. <br />
                </p>
                <a style={{color:"#f8a103",textDecoration:'None'}} href="#">Read More</a>
            </Grid>
        </Grid>

        <Grid container className={classes.gridContainer}>
            <Grid item xs={6} className={classes.gridItemLeft}>
                <h1 id="project-title-retail">Travel</h1>
                <h3 className="project-title-desc">Viaje.ai:</h3>
                <p className="project-brief-desc">
                Our machine-learning algorithms analyze real-time <br />
                travel routes, market behavior, and seating <br />
                configurations to determine the optimal price, <br />
                maximizing your overall profits. <br />
                </p>
                <a style={{color:"#f8a103",textDecoration:'None'}} href="#">Read More</a>
            </Grid>

            <Grid item xs={6}>
                <img id="travelImg" className={classes.gridItemRight} src={TravelProj} alt="travel"/>
            </Grid>
        </Grid>

    </Stack>
    )
}

export default ProjectComponent
