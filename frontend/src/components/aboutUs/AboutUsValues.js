import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";
import ValuesData from './ValuesData';

import Customer from '../../images/aboutus/customer.png';
import corevalues from '../../data/aboutus/corevaluesdata';

import '../../css/home.css';

const useStyles = makeStyles({
    gridContainerAbout:{
        paddingLeft: 0,
        paddingRight:0
    }
});

const AboutUsValues = () => {
    const classes = useStyles();

    const [values] = useState(corevalues);

    return (
        <div className="mont-font" style={{backgroundColor:'black',height:'85em',marginTop:'4em',color:'white',paddingTop:'8em'}}>
            <Container className={classes.gridContainerAbout}>
                <h2 className="font-700">Our Core <br/> Values</h2>
                <ValuesData insights={values}/>
            </Container>
        </div>
    )
}

export default AboutUsValues;
