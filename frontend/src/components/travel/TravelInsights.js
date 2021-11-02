import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import TravelData from './TravelData';
import traveldata from '../../data/travel/traveldata';

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

const TravelInsights = () => {
    const classes = useStyles();

    const [travelinsights] = useState(traveldata);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = travelinsights.length - 1;
        if (index < 0){
            setIndex(lastIndex);
        }
        if (index > lastIndex){
            setIndex(0);
        }
    },[index,travelinsights]);
    
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index+1);
        },5000);
        return () => clearInterval(slider);
    },[index]);

    return (
        <div className="mont-font" style={{height:'120em',paddingTop:'8em'}}>
            <Container>
                <Grid container className={classes.gridContainer} alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} alignItems="flex-end" justifyContent="flex-start">
                            <div class="underline"></div>
                            <h1 className="yellow-font font-700" id="insightsHeader">Viaje </h1>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <h5 className="font-300" id="mediaheader-desc-font">
                            Provide a blissful travel experience to your passengers while simultaneously <br/>
                            finding opportunities to optimize pricing, increase customer acquisition and <br/>
                            cut down on expenses.
                        </h5>
                    </Grid>
                </Grid>
                <TravelData insights={travelinsights} index={index}/>
            </Container>
        </div>
  )
}

export default TravelInsights;
