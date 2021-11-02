import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { makeStyles } from "@material-ui/core/styles";


import Retail1 from '../../images/retail/Retail1.png'
import Retail2 from '../../images/retail/Retail2.png'
import Retail3 from '../../images/retail/Retail3.png'

const useStyles = makeStyles({
    gridContainer: {
      fontFamily:'Montserrat',
      marginTop:'4em',
      marginRight:0,
    },
    cardContainer: {
        minWidth: 100, 
        width:'300px',
        height:'390px', 
    },
    buttonStyle: {
        margin: 0,
        // padding: 0
    }
});

const CaseStudyRetail = () => {

    const classes = useStyles();

    return (
        <div className="mont-font case-study-style">
            <Grid container justifyContent="flex-end" className={classes.gridContainer} spacing={3}>
                <Grid item xs={2.5}>
                    <h2 className="font-700"> Case <br/> Studies </h2>
                    <Stack sx={{marginTop:'2em'}} direction="row" spacing={6}>
                        <IconButton className={classes.buttonStyle} aria-label="back" size="large">
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton aria-label="forward" size="large">
                            <ArrowForwardIcon />
                        </IconButton>
                    </Stack>
                </Grid>
                <Grid item>
                    <Card variant="outlined" className={classes.cardContainer}>
                        <CardMedia
                            component="img"
                            image={Retail1}
                            alt="card_image"
                        >
                        </CardMedia>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" className={classes.cardContainer}>
                        <CardMedia
                            component="img"
                            image={Retail2}
                            alt="card_image"
                        >
                        </CardMedia>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" className={classes.cardContainer}>
                        <CardMedia
                            component="img"
                            image={Retail3}
                            alt="card_image"
                        >
                        </CardMedia>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default CaseStudyRetail;
