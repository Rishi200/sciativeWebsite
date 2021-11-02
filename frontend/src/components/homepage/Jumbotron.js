import React from 'react'
import Container from 'react-bootstrap/Container';

import '../../css/home.css';

const Jumbotron = () => {
  return (
    <div style={{backgroundColor:'black',height:'20em',paddingTop:'14em',color:'white'}}>
      <Container className="jumbotron-text text-white mont-font font-700">
          <div id="j-text">
              <h1>We 
              <span className="text-color"> Price </span>
              Right</h1>
          </div>
          <h5 style={{fontSize:'18px'}}>
              Take charge of your pricing and stay ahead with advanced <br />
              data analytics, pricing optimization, and real-time market insights.
          </h5>

      </Container>
    </div>
  )
}

export default Jumbotron
