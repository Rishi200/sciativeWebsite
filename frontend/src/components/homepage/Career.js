import React from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Career from '../../images/Career.png';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import '../../css/home.css';

import FB from '../../images/contactus/FB.png';
import Insta from '../../images/contactus/Insta.png';
import linkedin from '../../images/contactus/linkedin.png';
import twitter from '../../images/contactus/twitter.png';

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
    //   "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //     borderColor: "white"
    //   },
    //   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //     borderColor: "white"
    //   },
      "& .MuiOutlinedInput-input": {
        color: "white",
      },
    //   "&:hover .MuiOutlinedInput-input": {
    //     color: "white"
    //   },
    //   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    //     color: "white"
    //   },
      "& .MuiInputLabel-outlined": {
        color: "white",
      },
    //   "&:hover .MuiInputLabel-outlined": {
    //     color: "white"
    //   },
    //   "& .MuiInputLabel-outlined.Mui-focused": {
    //     color: "white"
    //   }
    },
    careergrid: {
        paddingLeft: "60px",
        paddingTop: "60px"
    },
    gridContainercareer: {
        paddingLeft: "150px",
        paddingRight: "150px",
    },
});

const CareerComponent = () => {
    const classes = useStyles();
    return (
        <div style={{backgroundColor:'black',height:'100em',color:'white'}}>
            <Grid container className={classes.careergrid} spacing={12} alignItems="flex-end">
                <Grid item xs={6}>
                    <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
                        <div className="careers vertical-text-left-careers">
                            <h5 style={{fontSize:'16px'}}>CAREERS</h5>
                        </div>
                        <div style={{marginTop: '40px'}}>
                            <h1 className="career-title text-color">Careers</h1>
                            <h3 className="career-desc" style={{marginTop:'1em',fontSize:'25px'}}>
                                Apply scientific <br/>
                                processes to change <br/>
                                the way organizations <br/>
                                run their businesses <br/>
                            </h3>

                            <h4 className="email-us text-color font-600" style={{marginTop:'3em',fontSize:'22px'}}>
                                We’d love to hear from you. <br />
                                Email us at <br />
                                <span className="font-500" style={{fontSize:'18px',color:'white'}}>careers@sciative.com</span>
                            </h4>
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <img id="careerimg" src={Career} alt="CareerImg" />
                    <h5 className="mont-font font-600" style={{lineHeight:1.7,paddingTop:'1em',fontSize:'22px'}}>
                        <Link href="#" className="text-color" underline='none' color="white">View current openings <span className="text-color">here </span> </Link> <br/>
                        Freshers & College Students <br/>
                        <Link href="#" className="text-color" underline='none' color="#f8a103"> click here </Link>
                    </h5>
                </Grid>
            </Grid>
            <div className="mont-font" style={{textAlign:'center',marginTop:'8em'}}>
                <h1 id="in_touch">Get in touch
                <span className="text-color">!</span>
                </h1>
                <h4 className="career-desc" style={{fontSize:'28px'}}>reachus@sciative.com</h4>
            </div>
            <Container>
                <Grid container alignItems="center" justifyContent="center" style={{marginTop:'30px'}} className={classes.gridContainercareer} spacing={1}>
                    <Grid item xs={6}>
                        <TextField 
                            sx = {{width:'90%',margin:'15px'}}
                            id="outlined-basic" 
                            className={classes.root}
                            label="Name"
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            sx = {{width:'90%',margin:'15px'}}
                            id="outlined-basic" 
                            className={classes.root}
                            label="Organization"
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            sx = {{width:'90%',margin:'15px'}}
                            id="outlined-basic" 
                            className={classes.root}
                            label="Email"
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                            sx = {{width:'90%',margin:'15px'}}
                            id="outlined-basic" 
                            className={classes.root}
                            label="Phone Number"
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            sx = {{width:'95%',margin:'15px'}}
                            id="outlined-multiline-static" 
                            className={classes.root}
                            label="Message"
                            variant="outlined" 
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
            </Container>
            <div style={{textAlign:'center'}}>
                <Button variant="contained" style={{backgroundColor:"#F9B000",color:'black',marginTop:'3em'}} disableElevation>Submit</Button>
            </div>
            <Grid container alignItems="flex-start" justifyContent="center" style={{paddingTop:'70px'}} spacing={16}>
                <Grid item>
                    <h4 className="text-color">Sciative HQ</h4>
                    <h6 className="mont-font font-500" style={{lineHeight:'1.5em'}}>
                        1103, 1104, 1105 The Corporate Park, <br/>
                        Plot No. 14 – 15, Sector 18, Vashi, <br/>
                        Navi Mumbai - 400703 <br/>
                        Maharashtra, India.
                    </h6>
                </Grid>
                <Grid item>
                    <h4 className="text-color">Interested in our products?</h4>
                    <h6 className="mont-font font-500" style={{lineHeight:'1.5em'}}>
                        Fill out the contact form or <br/>
                        call us at - (+91) 22 2765 4988 <br/>
                    </h6>
                    <Stack direction="row" spacing={3} alignItems="center" style={{marginTop:'2em'}}>
                        <img className="image-career" src={twitter} alt="twitter" />
                        <img className="image-career" src={FB} alt="facebook" />
                        <img className="image-career" src={Insta} alt="instagram" />
                        <img className="image-career" src={linkedin} alt="linkedin" />
                    </Stack>
                </Grid>
                <Grid item>
                    <h4 className="text-color">
                        Reach out to us by email <br/>
                        for any additional queries.
                    </h4>
                    <h6 className="mont-font font-500" style={{lineHeight:'1.5em'}}>     
                        General: info@sciative.com <br/>
                        Careers: careers@sciative.com
                    </h6>
                </Grid>
            </Grid>
        </div>
    )
}

export default CareerComponent
