import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Partners} from './Partners';
export const Home = () => {
  return (
    <div className="Container">
    <div className="container-fluid">
    <h2>Three Equal Columns</h2>
    <p>Use the .col className on a specified number of elements and Bootstrap will recognize how many elements there are (and create equal-width columns). In the example below, we use three col elements, which gets a width of 33.33% each.</p>
    <div className="row">
      <div className="col bg-success">.col</div>
      <div className="col bg-warning">.col</div>
      <div className="col bg-success">.col</div>
    </div>
  </div>
  </div>
  )
}
;
