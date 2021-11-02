import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';
import '../../css/retail.css';

import Icon1 from '../../images/retail/icon1.png';
import Icon2 from '../../images/retail/icon2.png';
import Icon3 from '../../images/retail/icon3.png';
import Icon4 from '../../images/retail/icon4.png';
import Icon5 from '../../images/retail/icon5.png';

const useStyles = makeStyles({
    gridContainer: {
      fontFamily:'Montserrat',
      paddingTop:'5em',
      paddingLeft:'50px',
      paddingRight:'50px',
      textAlign: 'center'
    },
});

const Benefits = () => {
    const classes = useStyles();

    return (
        <div className="mont-font benefits-style">
            <div style={{textAlign: 'center'}}>
                <h2 className="yellow-font font-700">BRIO Benefits:</h2>
            </div>
        
            <Grid container alignItems="flex-start" justifyContent="center" className={classes.gridContainer} spacing={16}>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon1} alt="icon1"/>
                    <h6 className="benefits-text">Increased Customer Satisfaction</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon2} alt="icon2"/>
                    <h6 className="benefits-text"> Immersive Buying Experience</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon3} alt="icon3"/>
                    <h6 className="benefits-text">Deeper Insights into Customer Behaviour</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon4} alt="icon4"/>
                    <h6 className="benefits-text">Maximized Profits</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon5} alt="icon5"/>
                    <h6 className="benefits-text">Improved Operational Efficiency</h6>
                </Grid>
            </Grid>
        </div>
    )
}

export default Benefits;
