import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';

import '../../css/home.css';
import '../../css/retail.css';

import AboutHeaderImage from '../../images/aboutus/AboutUsHeaderImage.png';

const useStyles = makeStyles({
    paperContainerAboutUs: {
        height: '800px',
        backgroundImage: `url(${AboutHeaderImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    gridContainerAboutUs: {
        height: '800px',
    }
});

const AboutUsHeader = () => {
    const classes = useStyles();

    return (
        <Paper square={true} className={classes.paperContainerAboutUs}>
            <Container>
                <Grid container alignItems="center" className={classes.gridContainerAboutUs}>
                    <Grid item xs={8}>
                        <Stack spacing={4}>
                            <h1 className="mont-font font-700" id="aboutustitle">
                                Pricing is complex. <br/>
                                We make it simple, <br/>
                                <span className="text-color">
                                scientific, scalable and successful!
                                </span>
                            </h1>
                            <h6 className="mont-font font-300" id="aboutusdesc">
                                When the Sciative founders got together to re-imagine <br/>
                                pricing technology, they committed to two things: <br/>
                                becoming a people-centric business and utilising <br/>
                                science to build the finest pricing software in the world
                            </h6>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default AboutUsHeader;
