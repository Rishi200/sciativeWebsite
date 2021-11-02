import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import MediaData from './MediaData';
import adPricedata from '../../data/media/adpricedata';

import '../../css/home.css';
import '../../css/retail.css';

const useStyles = makeStyles({
    gridContainer: {
        paddingRight:"100px",
        paddingLeft:"60px"
    },
    gridContainerData: {
        paddingRight:"10px",
        paddingLeft:"60px"
    },
});

const MediaInsights = () => {
    const classes = useStyles();

    const [mediainsights] = useState(adPricedata);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = mediainsights.length - 1;
        if (index < 0){
            setIndex(lastIndex);
        }
        if (index > lastIndex){
            setIndex(0);
        }
    },[index,mediainsights]);
    
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index+1);
        },5000);
        return () => clearInterval(slider);
    },[index]);

    return (
        <div className="mont-font" style={{height:'110em',paddingTop:'10em'}}>
            <Container>
                <Grid container className={classes.gridContainer} alignItems="center" spacing={3}>
                    <Grid item xs={12} className={classes.gridItemRight}>
                        <Stack direction="row" spacing={5} alignItems="flex-end" justifyContent="flex-start">
                            <div class="underline"></div>
                            <h1 className="yellow-font font-700" id="insightsHeader">AdPrice </h1>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <h5 className="font-300" id="mediaheader-desc-font">
                            Gain a competitive edge with our advanced data <br/>
                            analytics and pricing software for the media and <br/>
                            entertainment industry. 
                        </h5>
                    </Grid>
                    <Grid item xs={6}>
                        <h5 className="font-300" id="mediaheader-desc-font">
                            Improve visibility in key business <br/>
                            operations and discover new possibilities <br/>
                            to effectively drive growth.
                        </h5>
                    </Grid>
                </Grid>
                <MediaData insights={mediainsights} index={index}/>
            </Container>
        </div>
  )
}

export default MediaInsights;
