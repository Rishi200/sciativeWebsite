import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';

import '../../css/home.css';

import Airline from '../../images/Airline.png'
import Bus from '../../images/Bus.png'
import Food from '../../images/Food.png'
import Retail from '../../images/Retail.png'
import Television from '../../images/Television.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const useStyles = makeStyles({
    gridContainer: {
        marginTop:'10px',
    }
});

const Sectors = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{backgroundColor:'black',height:'28em',paddingTop:'10em'}}>
            <Container>
                <div className="oswald-font text-white font-400">
                    <h4>SECTORS</h4>
                </div>
                <Grid 
                    container 
                    className={classes.gridContainer}
                    spacing={8} 
                    justifyContent="center">

                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx = {{backgroundColor:'#131313', height: '340px', width:'210px'}}>
                            <CardMedia sx = {{width:'40%', objectFit:'contain', paddingLeft:'15px'}}
                                component="img"
                                height="130"
                                image={Retail}
                                alt="Retail"
                            />
                            <CardContent sx={{marginTop:'1em'}}>
                                <Typography variant="h5" component="div" style={{color:"white",fontFamily:'Montserrat',fontWeight:300}}>
                                <span style={{color:"#f8a103"}}> Retail, </span> <br /> E-commerce & Brands
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginTop:'1em'}}>
                                <Button onClick={handleOpen} size="small" style={{color:"#f8a103"}}>Read More</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                    <Button onClick={handleClose} variant='contained' sx={{ mt: 2}} color="error">Close</Button>
                                    </Box>
                                </Modal>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx = {{backgroundColor:'#131313', height: '340px', width:'210px'}}>
                            <div style={{marginLeft:'10px'}}>
                                <CardMedia sx = {{width:'40%', objectFit:'contain', paddingLeft:'15px'}}
                                    component="img"
                                    height="130"
                                    image={Food}
                                    alt="Food"
                                />
                                <CardContent sx={{marginTop:'1em'}}>
                                    <Typography variant="h5" component="div" style={{color:"white",fontFamily:'Montserrat',fontWeight:300}}>
                                    <span style={{color:"#f8a103"}}> Food & </span> <br /> Consumables
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{marginTop:'1em'}}>
                                    <Button onClick={handleOpen} size="small" style={{color:"#f8a103", marginTop:'2.5em'}}>Read More</Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx = {{backgroundColor:'#131313', height: '340px', width:'210px'}}>
                            <div style={{marginLeft:'10px'}}>
                                <CardMedia sx = {{width:'65%', objectFit:'contain', paddingLeft:'15px'}}
                                    component="img"
                                    height="130"
                                    image={Airline}
                                    alt="Airline"
                                />
                                <CardContent sx={{marginTop:'1em'}}>
                                    <Typography variant="h5" component="div" style={{color:"white",fontFamily:'Montserrat',fontWeight:300}}>
                                    <span style={{color:"#f8a103"}}> Airline </span> <br /> Travel
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{marginTop:'1em'}}>
                                    <Button onClick={handleOpen} size="small" style={{color:"#f8a103", marginTop:'2.5em'}}>Read More</Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx = {{backgroundColor:'#131313', height: '340px', width:'210px'}}>
                            <div style={{marginLeft:'10px'}}>
                                <CardMedia sx = {{width:'65%', objectFit:'contain', paddingLeft:'15px'}}
                                    component="img"
                                    height="130"
                                    image={Bus}
                                    alt="Bus"
                                />
                                <CardContent sx={{marginTop:'1em'}}>
                                    <Typography variant="h5" component="div" style={{color:"white",fontFamily:'Montserrat',fontWeight:300}}>
                                    <span style={{color:"#f8a103"}}> Inter-City </span> <br /> Bus Travel
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{marginTop:'1em'}}>
                                    <Button onClick={handleOpen} size="small" style={{color:"#f8a103", marginTop:'2.5em'}}>Read More</Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Card sx = {{backgroundColor:'#131313', height: '340px', width:'210px'}}>
                            <div style={{marginLeft:'10px'}}>
                                <CardMedia sx = {{width:'55%', objectFit:'contain', paddingLeft:'15px'}}
                                    // className = "image-icon"
                                    component="img"
                                    height="130"
                                    image={Television}
                                    alt="Television"
                                />
                                <CardContent sx={{marginTop:'1em'}}>
                                    <Typography variant="h5" component="div" style={{color:"white",fontFamily:'Montserrat',fontWeight:300}}>
                                    <span style={{color:"#f8a103"}}> Television & </span> <br /> Advertising
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{marginTop:'1em'}}>
                                    <Button  onClick={handleOpen} size="small" style={{color:"#f8a103", marginTop:'2.5em'}}>Read More</Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                </Grid> 
            </Container>
        </div>
    )
}

export default Sectors
