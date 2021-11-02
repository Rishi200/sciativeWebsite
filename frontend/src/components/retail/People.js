import React from 'react';
import Stack from '@mui/material/Stack';
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];

const useStyles = makeStyles({
    carouselContainer: {
        paddingLeft: "100px",
        paddingRight:"100px",
        marginTop:"3em"
    },
});

const People = ({people}) => {
    const classes = useStyles();
    return (
        <>
        <Carousel 
        breakPoints={breakPoints} 
        showArrows={false}
        className={classes.carouselContainer} 
        showArrows={false} 
        pagination={false}
        enableAutoPlay={true} 
        autoPlaySpeed={2000} 
        >
        {people.map((person) => {
            const {id,image,name,quote} = person;

            return (
                <Stack key={id} spacing={4}>
                    <div style={{textAlign:'center'}}>
                        <img src={image} alt={name} className="person-img center" />
                    </div>
                    <h5 style={{textAlign:'center'}} className="font-300 mont-font testimonial-desc">
                        <FaQuoteLeft className="icon-left"/>
                        {quote}
                        <FaQuoteRight className="icon-right"/>
                    </h5>
                    <h5 className="font-700">{name}</h5>
                </Stack>
            );
        })} 
        </Carousel>
        </>
    );  
};

export default People;
