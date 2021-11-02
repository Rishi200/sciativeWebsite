import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';
import '../../css/retail.css';

import TravelHeaderImage from '../../images/travel/TravelHeader.png';

const useStyles = makeStyles({
    gridItemRight: {
        paddingLeft:"30px"
    },
});

const TravelHeader = () => {
    const classes = useStyles();

    return (
        <div className="mont-font header-style">
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <h1 className="font-700">
                                Plan For The Future Of 
                                Mobility with 
                                <span className="text-color"> Viaje’s </span>
                                Cutting-Edge Automotive 
                                Data & Analytic Solutions.
                            </h1>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItemRight}>
                        <img src={TravelHeaderImage} id="travelHeaderImage" alt="Travel" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default TravelHeader;
