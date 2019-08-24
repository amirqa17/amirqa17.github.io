import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
 MDBBtn, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown
} from "mdbreact";



import '../App.css';
import {Modal, Button} from 'react-bootstrap';

import {Contact} from '../Contact';


class NavbarPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  
  return (<>
      <MDBNavbar color="black" dark expand="md" style={{ color: "black"}} >
        <MDBNavbarBrand>
          <strong className="white-text"></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left >
              <MDBNavLink activeClassName="active" to="/" exact={true}>Главная</MDBNavLink>
             
             
             
              <MDBDropdown color="default">
                <MDBDropdownToggle nav caret color="default">
                  <span className="mr-2">Ресурсы</span>
                </MDBDropdownToggle >
                <MDBDropdownMenu color="warning">
                  <MDBDropdownItem color="default"  tag={MDBNavLink} className="active2" to="/resources">Персонал</MDBDropdownItem>
                  <MDBDropdownItem tag={MDBNavLink} className="active2" to="/park">Парк Техники</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              
              





              <MDBNavLink activeStyle="active" to="/about">О Компании</MDBNavLink>
             <MDBNavLink activeStyle="active" to="/license">Лицензии</MDBNavLink>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBBtn color="primary" onClick={this.handleShow}>Связаться с нами</MDBBtn>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>



      <Modal show={this.state.show} onClick={this.handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Контакты</Modal.Title>
</Modal.Header>
<Modal.Body>
  
<Contact />

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={this.handleClose}>
    Закрыть
  </Button>
  <Button variant="primary" href="mailto:company@tizim.org.kz">
    Отправить сообщение
  </Button>
</Modal.Footer>
</Modal>
</>
    );
  }
}

export default NavbarPage;