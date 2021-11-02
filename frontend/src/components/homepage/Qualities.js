import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '190px',
        // marginTop:'50px'
    }
});

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];

const Qualities = ({quality}) => {
    const classes = useStyles();

    const {id,name,image,desc} = quality;

    return (
        <div key={id} className={classes.gridContainer}>
            <h1 className="highlight-font">
                <span className="highlight-numbers">{id}</span> 
                {name}:
            </h1> 
            <Stack direction="row" container alignItems="center" justifyContent="center" spacing={8} sx={{marginTop:'50px',marginRight:'300px'}}>
                <img className="highlightImg" src={image} />
                <p className="highlight-brief-desc">
                    {desc}
                </p>
            </Stack>
        </div>
    );
};

export default Qualities;
