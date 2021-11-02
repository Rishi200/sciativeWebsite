import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
        paddingRight:"100px",
        paddingLeft:"60px"
    },
      gridContainerData: {
        paddingLeft:"60px",
        paddingRight:"40px",
    },
});

const TravelData = ({insights}) => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.gridContainerData} sx={{marginTop:'20px'}} spacing={12}>
                {insights.map((insight) => {
                    const {id,title,desc} = insight;
                    return (
                        <>
                            <Grid key={id} item xs={6}>
                                <Stack spacing={3} justifyContent="center" alignItems="flex-start">
                                    <h1 className="yellow-font font-700 insightsNumbers">
                                        <span className="spannumber">{id}.</span>
                                    </h1>
                                    <Stack justifyContent="flex-end">
                                    <h2 className="font-600">{title}</h2>
                                    <h5 className="font-300" id="mediaheader-desc-font">
                                        {desc}
                                    </h5>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </>
                    );
                })} 
            </Grid>
        </>
    );  
};

export default TravelData;
