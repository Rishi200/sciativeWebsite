import React from 'react';
import MenuItem from '@mui/material/MenuItem';

import '../../css/home.css';

const ProblemComponent = ({problems}) => {
    return (
        <>
            {problems.map((problemsingle) => {
                const {id,problem} = problemsingle;
                return (
                    <>
                        <MenuItem className="mont-font" key={id}>{id}. {problem}</MenuItem>
                    </>
                );
            })} 
        </>
    );  
};

export default ProblemComponent;
