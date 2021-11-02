import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';
import '../../css/retail.css';

import RetailHeader from '../../images/retail/RetailHeader.png';

const useStyles = makeStyles({
    gridItemRight: {
      paddingLeft:"30px"
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className="mont-font header-style">
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <h5 className="font-300">A Holistic Pricing Solution for retailers and brands. </h5>
                            <h1 className="text-color font-700">Brio empowers you to <br/> make smarter pricing decisions.</h1>
                            <h5 className="font-300">Add to your business a powerful 360° pricing <br/>
                                management platform and receive data-driven insights <br/>
                                from every stage of your supply chain while pricing <br/>
                                optimally.</h5>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} className={classes.gridItemRight}>
                        <img src={RetailHeader} id="retailHeaderImage" alt="Retail" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header;
