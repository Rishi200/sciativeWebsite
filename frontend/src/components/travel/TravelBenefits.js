import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';
import '../../css/retail.css';

import Icon1 from '../../images/travel/Travel_icon1.png';
import Icon3 from '../../images/travel/Travel_icon3.png';
import Icon2 from '../../images/travel/Travel_icon2.png';
import Icon4 from '../../images/travel/Travel_icon4.png';
import Icon5 from '../../images/travel/Travel_icon5.png';

const useStyles = makeStyles({
    gridContainer: {
      fontFamily:'Montserrat',
      paddingTop:'5em',
      paddingLeft:'50px',
      paddingRight:'50px',
      textAlign: 'center'
    },
});

const TravelBenefits = () => {
    const classes = useStyles();

    return (
        <div className="mont-font benefits-style">
            <div style={{textAlign: 'center'}}>
                <h2 className="yellow-font font-700">Viaje's Benefits:</h2>
            </div>
        
            <Grid container alignItems="flex-start" justifyContent="center" className={classes.gridContainer} spacing={16}>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon1} alt="customer"/>
                    <h6 className="benefits-text">Risk Mitigation</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon2} alt="buy"/>
                    <h6 className="benefits-text">Seat Optimization</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon3} alt="audience"/>
                    <h6 className="benefits-text">Configurable Integrations</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon4} alt="bars"/>
                    <h6 className="benefits-text">Higher Win Rates</h6>
                </Grid>
                <Grid item xs={2}>
                    <img style={{height:'50px'}} src={Icon5} alt="settings"/>
                    <h6 className="benefits-text">Numerous Data Sources</h6>
                </Grid>
            </Grid>
        </div>
    )
}

export default TravelBenefits;
