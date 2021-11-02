import React from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Career from '../../images/Career.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import '../../css/home.css';

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
    gridContainer: {
        paddingLeft: "150px",
        paddingRight: "150px",
    },
});

const AboutComponent = () => {
    const classes = useStyles();
    return (
        <Stack sx={{backgroundColor:'black',height:'70em',paddingTop:'2em',color:'white'}}>
        <div className="mont-font" style={{textAlign:'center',marginTop:'3em'}}>
            <Stack spacing={3}>
                <h3 className="font-300">Scale your business with Sciative!</h3>
                <h1 id="in_touch">Get in touch
                <span className="text-color">!</span>
                </h1>
                <h4 className="career-desc" style={{fontSize:'28px'}}>reachus@sciative.com</h4>
            </Stack>
        </div>
        <Container>
        <Grid container style={{marginTop:'30px'}} className={classes.gridContainer} spacing={1}>
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

            <Grid container justifyContent="center" style={{paddingTop:'6em',paddingLeft:'12em'}}>
                <Grid item xs={4}>
                    <h4 className="text-color">Sciative HQ</h4>
                    <h6 className="mont-font font-500" style={{lineHeight:'1.5em'}}>
                        1103, 1104, 1105 The Corporate Park, <br/>
                        Plot No. 14 – 15, Sector 18, Vashi, <br/>
                        Navi Mumbai - 400703 <br/>
                        Maharashtra, India.
                    </h6>
                </Grid>
                <Grid item xs={4}>
                    <h4 className="text-color">Interested in our products?</h4>
                    <h6 className="mont-font font-500" style={{lineHeight:'1.5em'}}>
                        Fill out the contact form or <br/>
                        call us at - (+91) 22 2765 4988 <br/>
                    </h6>
                    <Grid container sx={{marginTop:'2em'}}>
                        <Grid item xs={1}>
                            <TwitterIcon className="text-color"/>
                        </Grid>
                        <Grid item xs={1}>
                            <FacebookIcon className="text-color"/>
                        </Grid>
                        <Grid item xs={1}>
                            <InstagramIcon className="text-color"/>
                        </Grid>
                        <Grid item xs={1}>
                            <LinkedInIcon className="text-color"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
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
        </Stack>
    );
}

export default AboutComponent
