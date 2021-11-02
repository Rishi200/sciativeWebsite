import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
	card: {
		borderRadius: 50,
		boxShadow: "none"
	},
    gridContainer: {
        paddingLeft: "60px",
        paddingRight:"60px"
    }
});

 const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];

const CaseStudySingle = ({casestudies,index}) => {
    const classes = useStyles();

    return (
        <>
            <Carousel 
                className={classes.gridContainer} 
                showArrows={true}
                enableAutoPlay={false} 
                pagination={false}
                autoPlaySpeed={1000} 
                breakPoints={breakPoints}
            >
            {casestudies.map((study) => {
                const {id,image,title} = study;

                return (
                    <Card key={id} variant="outlined" classes={{ root: classes.card }} sx={{ minWidth: 100, width:'280px' }}>
                        <CardMedia
                            component="img"
                            image={image}
                            height='200'
                            alt="card_image"
                        />
                        <CardContent sx={{backgroundColor:'black',color:'#7E7E7E'}}>
                            <h5 className="mont-font font-600 line-height">
                                {title}
                            </h5>
                        </CardContent>
                        <CardActions sx={{backgroundColor:'black',color:'#797979'}}>
                            <Button size="small" style={{color:"#fca702"}}>Learn More</Button>
                        </CardActions>
                    </Card>
                );
            })} 
            </Carousel>
        </>
    );  
};

export default CaseStudySingle;
