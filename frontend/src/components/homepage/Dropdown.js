import React from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";

import '../../css/home.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const problems = [
	'Defining segment-specific target price settings and optimization',
	'Closing deals and being able to respond quickly to quotes',
	'Increasing profits and boosting sales without overworking the team',
	'Executing price updates across various categories & regions',
	'Understanding the competitive landscape and market in detail',
	'Procuring data and analytics of product test-runs before final implementation',
	'Managing price lists, discounts and promotion campaigns'
]

const useStyles = makeStyles({
    menuroot: {
		'&:hover': {
		   background: "#505050",
		   color: 'white'
      	},
		'&:active': {
			background: '#505050',
			color: 'white'
		}
    },
});

const DropdownComponent = () => {
	const classes = useStyles();
    const [problemname, setProblemname] = React.useState([]);

	const handleChange = (event) => {
		setProblemname(event.target.value);
	};

    return (
        <div style={{textAlign:'center',backgroundColor:'#EEEEEE',height:'40em',padding:'8em 20em 0 20em'}}>
            <Container>
                <Stack spacing={6}>
                    <h1 className="mont-font font-500" style={{fontSize:'48px'}}>
                        What <span className="text-color"> Key Problem </span> is <br/>
                        Your Company Facing?
                    </h1>
                    <FormControl sx={{backgroundColor:'#DFDDDD'}}>
                        <InputLabel id="demo-simple-select-label">Select your problem</InputLabel>
                        <Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							onChange={handleChange}
							label="Problems"
							MenuProps={MenuProps}
                        >
						{problems.map((problem) => (
							<MenuItem
								key={problem}
								value={problem}
								className = {classes.menuroot}
							>
							{problem}
							</MenuItem>
						))}
                        </Select>
                    </FormControl>
                </Stack>
            </Container>
            <div>
            <Button variant="contained" href="#" style={{backgroundColor:"#F9B000",color:'black',marginTop:'5em'}} disableElevation>Submit</Button>
            </div>
        </div>
    )
}

export default DropdownComponent
