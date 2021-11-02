import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';

import '../../css/home.css';
import '../../css/retail.css';

import ContactHeaderImage from '../../images/contactus/ContactHeaderImage.png';

const useStyles = makeStyles({
    paperContainer: {
        height: '800px',
        backgroundImage: `url(${ContactHeaderImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    gridContainer: {
        height: '800px',
    }
});

const ContactUsHeader = () => {
    const classes = useStyles();

    return (
        <Paper square={true} className={classes.paperContainer}>
            <Container>
                <Grid container alignItems="center" className={classes.gridContainer}>
                    <Grid item xs={6}>
                        <Stack spacing={4}>
                            <h1 className="mont-font font-700" id="contactustitle">
                                Get in touch <br/>
                                with <span className="text-color">Sciative!</span>
                            </h1>
                            <h6 className="mont-font font-300" id="contactusdesc">
                                Want to ask a question, resolve and issue, schedule a call, <br/>
                                or suggest an idea? Just send a message to our team and <br/>
                                we’ll follow up as we can.
                            </h6>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default ContactUsHeader;
