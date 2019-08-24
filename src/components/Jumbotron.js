import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';
import {Partners} from '../Partners';
const Styles = styled.div`

@media (max-width: 600px) {
  .jumbo{
    display:none;
  }
}

.karta{
  
  margin: 0 auto;
}

  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    margin-bottom:0px;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .clients{
    
    color:white;
  
  margin-top:-40px;

    
    
  }
`;




export const Jumbotron = () => (
 
  <Styles> 
    <Jumbo fluid className="jumbo"><Container>
      <div className="overlay"></div>
     
     
     <div className="row">
     <div className="col-sm-12 col-md-6">


        <h2 className="name">Современные решения для строительства</h2>
    
        </div>
        <div className="col-sm-12 col-md-6">
    
</div>
</div>
   </Container>  </Jumbo>
 </Styles>
)
