import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../../css/home.css';
import '../../css/retail.css';

import ContactBodyImage from '../../images/contactus/ContactBodyImage.png';

const useStyles = makeStyles({
    gridContainer: {
        paddingTop:60,
        paddingBottom:30
    },
    gridContainerData: {
        paddingRight:"10px",
        paddingLeft:"60px"
    },
    paperContainerBody: {
        height: '550px',
        width: '750px',
        marginTop:'110px',
        float:'right',
        borderRadius: 30,
        padding:50
    },
    paperContainerImage: {
        height: '450px',
        width: '450px',
        backgroundImage: `url(${ContactBodyImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    contactusroot: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "black",
        },
        "& .MuiOutlinedInput-input": {
          color: "black",
        },
        "& .MuiInputLabel-outlined": {
          color: "black",
        },
        width:'100%'
}});

const ContactUsBody = () => {
    const classes = useStyles();

    return (
        <div className="mont-font" style={{height:'67em',paddingTop:'6em'}}>
            <Container>
                <Grid container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item xs={6}>
                        <Paper className={classes.paperContainerImage} />
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={4}>
                            <h2 className="font-700">Interested in <br/> becoming a partner?</h2>
                            <p>
                                At Sciative, we value meaningful partnerships with many players <br/>
                                in the pricing ecosystem and beyond. Gain access to our solutions <br/>
                                and technologies to help you expand your portfolio, reach new <br/>
                                consumers and increase your profits.
                            </p>
                            <p>
                                Join the Sciative Partner Network now to become part of a <br/>
                                movement that's revolutionizing pricing across major industries.
                            </p>
                            <p>
                                Complete the form and one of our representatives will get in <br/>
                                touch with you soon! 
                            </p>
                        </Stack>
                    </Grid>
                </Grid>
                <Paper className={classes.paperContainerBody} square={true} sx={{backgroundColor: '#F9B000'}}>
                    <Grid container className={classes.gridContainer} alignItems="center" justifyContent="center" spacing={3}>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.contactusroot}
                                label="Name"
                                variant="outlined" 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.contactusroot}
                                label="Organization"
                                variant="outlined" 
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.contactusroot}
                                label="Email"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                className={classes.contactusroot}
                                label="Phone Number"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                className={classes.contactusroot}
                                multiline
                                label="Message"
                                variant="outlined" 
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                    <div style={{textAlign:'center'}}>
                        <Button size="large" variant="contained" style={{color:'#F9B000',backgroundColor:'#000000',borderRadius:0}}>Submit</Button>
                    </div>
                </Paper>
            </Container>
        </div>
  )
}

export default ContactUsBody;
