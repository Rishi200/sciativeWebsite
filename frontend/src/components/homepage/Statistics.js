import React from 'react'
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "60px",
    },
    root: {
        "& > *": {
          justifyContent:"center",
          display:'flex'
        }
    },
    pagination: {
        marginTop:'20px',
        alignItems: 'center',
        justify: 'center',
    }
});

const StatisticsComponent = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer} justifyContent="center" style={{marginTop:'200px',height:'380px'}} spacing={10}>
            <Grid item>
                <h1 className="stats-numbers">
                    <CountUp end={5} duration={2} prefix='+'>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <h4>Billion</h4>
                <h6 className="stats-desc">price optimizations <br /> daily at lightning <br /> speeds</h6>
            </Grid>
            <Grid item>
                <h1 className="stats-numbers">
                    <CountUp end={1.5} duration={2} decimals={1}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <h4>Billion</h4>
                <h6 className="stats-desc">products <br /> priced</h6>
            </Grid>
            <Grid item>
                <h1 className="stats-numbers">
                    <CountUp end={10} duration={2} >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <h4>Second</h4>
                <h6 className="stats-desc">real-time <br /> refresh rate</h6>
            </Grid>
            <Grid item>
                <h1 className="stats-numbers">
                    <CountUp start={1200} end={1800} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <h4>Categories</h4>
                <h6 className="stats-desc">served</h6>
            </Grid>
            <Grid item>
                <h1 className="stats-numbers">
                    <CountUp end={65} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <h4>Million</h4>
                <h6 className="stats-desc">lives touched with <br /> right pricing</h6>
            </Grid>
            <Grid item>
                <h1 className="stats-numbers">
                    <CountUp end={19} duration={2} prefix='$'>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <h4>Billion</h4>
                <h6 className="stats-desc">worth business <br /> priced by Sciative's AI Solution</h6>
            </Grid>
        </Grid>
    )
}

export default StatisticsComponent
