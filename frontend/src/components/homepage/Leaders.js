import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";
import Clients from './Clients';
import clientsdata from '../../data/client-data';

import Anshu from '../../images/anshu.png'
import Vijeta from '../../images/Vijeta.png'

import Abhibus from '../../images/Abhibus.png'
import Amazon from '../../images/amazon.png'
import Flipkart from '../../images/Flipkart.png'
import Shopify from '../../images/Shopify.png'

import '../../css/home.css';

const useStyles = makeStyles({
    carouselContainer: {
        paddingLeft: "60px",
        paddingRight:"60px",
        marginTop:"5em"
    },
    gridContainer: {
        paddingTop:'5em',
    },
    gridItemLeft: {
        color: "white",
        paddingLeft: "20px"
    },
    gridItemRight: {
        color: "white",
    }
});

const LeadersComponent = () => {
    const classes = useStyles();

    const [clients] = useState(clientsdata);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = clients.length - 1;
        if (index < 0){
          setIndex(lastIndex);
        }
        if (index > lastIndex){
          setIndex(0);
        }
    },[index,clients]);
    
    useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index+1);
        },5000);
        return () => clearInterval(slider);
      },[index]);

    return (
        <>
            <div style={{backgroundColor:'black',height:'95em',marginTop:'4em',color:'white',paddingTop:'8em'}}>
                <Container>
                <Stack direction="row" alignItems="baseline">
                    <div className="case vertical-text-left-careers">
                        <h5 style={{fontSize:'16px'}}>TEAM</h5>
                    </div>
                    <h1 className="case-title">Leadership</h1>
                </Stack>
                <Grid container sx={{marginTop:'1em'}} justifyContent="center" alignItems="center" spacing={12}>
                    <Grid item style={{marginTop:'6.4em'}}>
                        <img id="anshuImg" src={Anshu} alt="Dr.Anshu Jalora"/>
                    </Grid>
                    <Grid item>
                        <h1 className="leader-title">Dr. Anshu <br /> Jalora</h1>
                        <h3 className="leader-title-desc">Founder & Managing Director | <br /> Chief Scientist | FT</h3>
                        <p className="project-brief-desc">
                            Dr. Anshu is a recognised Pricing Strategic Expert <br />
                            with more than 17 years of hands-on experience <br />
                            managing globally recognized consumer and <br />
                            corporate brands. Before starting Sciative, Dr. <br />
                            Anshu was the Global Director of Pricing Strategy <br />
                            at Starbucks. He earned his Ph.D from Texas A&M <br />
                            University, USA and has over 17 International <br />
                            Publications under his name.
                        </p>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" sx={{marginTop:'0.5em'}} spacing={16}>
                    <Grid item style={{marginTop:'1em'}}>
                        <h1 className="leader-title">Vijeta Soni</h1>
                        <h3 className="leader-title-desc">Co-Founder & CEO | Customer <br /> Success | FT</h3>
                        <p className="project-brief-desc">
                            With over 17 years of experience in digital <br />
                            strategy and talent management, working in <br />
                            companies such as Reliance and Overstock, <br />
                            Vijeta possesses the expertise to optimize and <br />
                            manage Sciative’s operations and while <br />
                            simultaneously creating a high-performance <br />
                            culture within the company. She holds an MS <br />
                            degree from the University of Houston, USA.
                        </p>
                    </Grid>
                    <Grid item>
                        <div>
                            <img id="vijetaImg" src={Vijeta} alt="Vijeta Soni"/>
                        </div>
                    </Grid>
                </Grid>
                </Container>
            </div>

            <Stack sx={{backgroundColor:'black',height:'40em',color:'white'}}>
                <div style={{marginTop: '1em'}}>
                    <h1 className="client-text">SOME OF OUR CLIENTS</h1>   
                </div>

                <Clients clients={clients} index={index}/>
       
                <div style={{marginTop: '8em'}}>
                    <h1 className="client-text">INTEGRATION PARTNERS</h1>
                </div>
            
                <Grid container alignItems="center" justifyContent="center" sx={{paddingTop:'5em'}} spacing={10}>
                    <Grid item>
                        <img style={{height:'35px',width:'120px'}} src={Amazon} alt="Amazon"/>
                    </Grid>
                    <Grid item>
                        <img style={{height:'40px',width:'130px'}} src={Shopify} alt="Shopify"/>
                    </Grid>
                    <Grid item>
                        <img style={{height:'45px',width:'160px'}} src={Flipkart} alt="Flipkart"/>
                    </Grid>
                    <Grid item>
                        <img style={{height:'50px',width:'150px'}} src={Abhibus} alt="Abhibus"/>
                    </Grid>
                </Grid>
            </Stack>
        </>
    )
}

export default LeadersComponent
