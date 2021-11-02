import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '125px',
    },
    carouselContainer: {
        paddingLeft: "60px",
        paddingRight:"60px",
        marginTop:"5em"
    },
});

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
];

const Clients = ({clients,index}) => {
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
        autoPlaySpeed={500} 
        >
        {clients.map((client) => {
            const {id,image,idname} = client;

            return (
                <>
                    <img key={id} id={idname} src={image} />
                </>
            );
        })} 
        </Carousel>
        </>
    );  
};

export default Clients;
