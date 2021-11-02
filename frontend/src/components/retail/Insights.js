import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import BrioData from './BrioData';
import briodata from '../../data/retail/briodata';

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

const Insights = () => {
    const classes = useStyles();

    const [insights] = useState(briodata);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = insights.length - 1;
        if (index < 0){
            setIndex(lastIndex);
        }
        if (index > lastIndex){
            setIndex(0);
        }
    },[index,insights]);
    
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index+1);
        },5000);
        return () => clearInterval(slider);
    },[index]);

    return (
        <div className="mont-font" style={{height:'135em',paddingTop:'10em'}}>
            <Container>
                <Grid container className={classes.gridContainer} alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={5} alignItems="flex-end" justifyContent="flex-start">
                            <div class="underline"></div>
                            <h1 className="yellow-font font-700" id="insightsHeader">BRIO </h1>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <h5 className="font-300" id="mediaheader-desc-font">Sciative is a full-fledged pricing <br/>
                            partner. For each of our clients, we <br/>
                            identify price pain points, <br/> 
                            opportunities, and provide tailored <br/>
                            solutions that bring the highest value.
                        </h5>
                    </Grid>
                    <Grid item xs={6}>
                        <h5 className="font-300" id="mediaheader-desc-font">Sciative is a full-fledged pricing <br/>
                            partner. For each of our clients, we <br/>
                            identify price pain points, <br/> 
                            opportunities, and provide tailored <br/>
                            solutions that bring the highest value.
                        </h5>
                    </Grid>
                </Grid>
                <BrioData insights={insights} index={index}/>
            </Container>
        </div>
  )
}

export default Insights;
