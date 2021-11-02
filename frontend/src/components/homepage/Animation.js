import React,{ useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import animation from '../../images/animation.png';
import Video from '../../images/header animation.mp4';
import ReactPlayer from 'react-player';
import CardMedia from '@mui/material/CardMedia';
import '../../css/home.css';

const Animation = () => {

	return (
		<div style={{backgroundColor:'black',height:'20em',textAlign:'center',paddingTop:'8em'}}>
			<CardMedia
				component='video'
				src={Video}
				autoPlay
				muted
				height='400'
			/>
		</div>
		)
	}

export default Animation;
