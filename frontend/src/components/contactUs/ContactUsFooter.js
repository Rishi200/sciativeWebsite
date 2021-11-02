import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";

import FB from '../../images/contactus/FB.png';
import Insta from '../../images/contactus/Insta.png';
import linkedin from '../../images/contactus/linkedin.png';
import twitter from '../../images/contactus/twitter.png';


import '../../css/home.css';
import '../../css/retail.css';

const useStyles = makeStyles({
    gridContainerFooter: {
        paddingTop:120,
    },
});

const ContactUsFooter = () => {
    const classes = useStyles();

    return (
        <div style={{backgroundColor:'black',height:'30em',color:'white'}}>
                <Grid container className={classes.gridContainerFooter} alignItems="flex-start" justifyContent="center">
                    <Grid item xs={5}>
                        <h4 className="text-color">Sciative HQ</h4>
                        <h6 className="mont-font font-500" style={{lineHeight:'25px'}}>
                            1103, 1104, 1105 The Corporate Park, 
                            Plot No. 14 – 15, Sector 18, Vashi, <br/>
                            Navi Mumbai - 400703
                            Maharashtra, India.
                        </h6>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack direction="row" spacing={3} alignItems="center" style={{marginTop:'2em'}}>
                            <img className="image-contactus" src={twitter} alt="twitter" />
                            <img className="image-contactus" src={FB} alt="facebook" />
                            <img className="image-contactus" src={Insta} alt="instagram" />
                            <img className="image-contactus" src={linkedin} alt="linkedin" />
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <h6 className="mont-font font-500" style={{lineHeight:'25px'}}>     
                            <span className="text-color">Phone:</span> (+91) 22 2765 4988 <br/>
                            <span className="text-color">Email:</span> info@sciative.com <br/>
                            <span className="text-color">Careers:</span> careers@sciative.com <br/>
                        </h6>    
                    </Grid>
                </Grid>
        </div>
    )
}

export default ContactUsFooter;
