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

const MediaData = ({insights}) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={10} sx={{marginTop:8}}>
            {insights.map((insight) => {
                const {id,title,image,desc} = insight;
                return (
                    <>
                        <Grid key={id} item xs={6}>
                            <Stack direction="row" spacing={6}>
                                <img className="valuesimg" src={image} alt="Customer"/>
                                <div>
                                    <Stack spacing={2}>
                                        <h2 className="font-700 text-color">{title}</h2>
                                        <p className="mont-font font-300 missiondesc">
                                            {desc}
                                        </p>
                                    </Stack>
                                </div>
                            </Stack>
                        </Grid>
                    </>
                );
            })} 
            </Grid>
        </>
    );  
};

export default MediaData;
