import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';
import '../../css/retail.css';

import MediaHeaderImage from '../../images/media/MediaHeader.png';

const useStyles = makeStyles({
    gridItemRight: {
      paddingLeft:"100px",
      paddingBottom: "80px"
    },
});

const MediaHeader = () => {
    const classes = useStyles();

    return (
        <div className="mont-font header-style">
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={6}>
                            <h1 className="font-700">
                                Harness The <br/>
                                True Power Of 
                                <span className="text-color"> AdPrice <br/>
                                And Offer Unrivaled Entertainment Experiences </span> <br/>
                                To All Audiences.
                            </h1>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItemRight}>
                        <img src={MediaHeaderImage} id="mediaHeaderImage" alt="Media" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MediaHeader;
