import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import CaseStudySingle from './CaseStudy';
import casestudydata from '../../data/case-study';

import '../../css/home.css';

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "60px",
      paddingRight:"60px"
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

const CaseStudy = () => {
    const classes = useStyles();

    const [casestudies] = useState(casestudydata);

    return (
		<>
			<div style={{height:'55em',marginTop:'1em',paddingTop:'8em',color:'#7E7E7E'}}>
				<Container>
					<Stack spacing={10}>
						<Stack direction="row" alignItems="baseline">
						<div className="careers vertical-text-left-careers">
							<h5 style={{fontSize:'16px'}}>CASE STUDIES</h5>
						</div>
						<h1 className="case-title text-color">Case <br/> Studies</h1>
						</Stack>
						<CaseStudySingle casestudies={casestudies}/>
					</Stack>
				</Container>
			</div>
		</>
    )
}

export default CaseStudy
