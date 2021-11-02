import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Qualities from './Qualities';
import highlightsdata from '../../data/highlights';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import '../../css/home.css';

 
const useStyles = makeStyles({
    gridContainer: {
		paddingLeft: '125px',
    },
    pagination: {
        marginTop:'90px',
        alignItems: 'center',
        justify: 'center',
    }
});

const BootstrapButton = styled(Button)({
	textTransform: 'none',
	fontSize: '16px',
	lineHeight: 1.5,
	color: 'black',
	'&:hover': {
		backgroundColor: '#FCA702',
		color: 'black',
	},
	'&:active': {
		backgroundColor: '#FCA702',
		color: 'black',
	}
  });

const HighlightsComponent = () => {
	const classes = useStyles();

    const [qualities] = useState(highlightsdata);
    const [index,setIndex] = useState(0);
	const singledata = highlightsdata[index];

	const checkIndex = (number) => {
		if (number > qualities.length-1){
		  return 0;
		}
		if (number < 0){
		  return qualities.length-1;
		}
		return number;
	};
	
	const nextPerson = () => {
		setIndex( (index) => {
		  let newIndex = index + 1;
		  return checkIndex(newIndex);
		})
	};
	
	const prevPerson = () => {
		setIndex( (index) => {
		  let newIndex = index - 1;
		  return checkIndex(newIndex);
		})
	};

    return (
		<div style={{height:'50em',marginTop:'8em',paddingLeft:'10em'}}>
            <Grid container>
				<div className="case vertical-text-left-careers" style={{marginTop:'60px'}}>
					<h5 style={{fontSize:'16px'}}>WHAT WE DO</h5>
				</div>
                <Grid item xs={4.5} sx={{marginTop:'20px'}}>
                    <h2 className="mont-title text-color">What sets <br/> Sciative apart?</h2>
                </Grid>
                <Grid item sx={{marginTop:'70px'}}>
					<Stack direction="row" spacing={8}>
						<BootstrapButton onClick={prevPerson} variant="text" startIcon={<NavigateBeforeIcon />}>Previous</BootstrapButton>
						<BootstrapButton onClick={nextPerson} sx={{color:'black',fontSize:'16px',textTransform:'none'}} endIcon={<NavigateNextIcon />}>
							Next
						</BootstrapButton>
					</Stack>
                </Grid>
				<Qualities quality={singledata}/>
            </Grid>
		</div>
    )
}

export default HighlightsComponent
