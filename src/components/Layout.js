import React from 'react';
import { Container } from 'react-bootstrap';
import { MDBCol, MDBRow} from "mdbreact";

export const Layout = (props) => (

 <Container className="cc"> 
 <MDBRow>
 <MDBCol md="12 layout">
 {props.children}
</MDBCol>
 

</MDBRow>

</Container> 
 
)
