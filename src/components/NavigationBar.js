import React from 'react';

import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import '../App.css';
import {Modal, Button} from 'react-bootstrap';
import Logo from '../assets/logo.png';
import {Contact} from '../Contact';


export default class NavigationBar extends React.Component {
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

  render() {

    const Styles = styled.div`

  


  .div {
    white-space: pre-line;
    
  }
  .navbar {
    background-color: white;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
   color:black
text-align:center
    &:hover {  
color:#0F96FF;
   
    }

    
  }

 

  a { &:hover{
    text-decoration: none;
  
  }}
  .active{
    text-decoration: none;
    padding:10px;
    color: green;
  
  }

  .info {
    
  }
  .contacto{
    display:none;
  }

  @media (max-width: 576px) {
  .contacto{
    display:block;
  }
  }

`;
    return (
      <>

<Styles>
    <Navbar expand="lg" >
      <Navbar.Brand href="/"> <img className="logotip2" src={Logo} alt="Logo"></img>
     
      <br />
      <b className="sublogo">Строительная Компания</b>
      </Navbar.Brand>
        <div className="info">
        070010, Казахстан, Усть-Каменогорск, М.Горького 46 офис 108
<br />

<i className="fa fa-phone-square" aria-hidden="true"></i>
&nbsp;
 +7 (7232) 77-74-71
<br />

<i className="fa fa-mobile" aria-hidden="true"></i>
&nbsp;
+7 (771) 133 28 57
<br />

<i className="fa fa-envelope" aria-hidden="true"></i>
&nbsp;
company@tizim.org.kz
     </div>
      
    </Navbar>
  </Styles >

        <Modal show={this.state.show} onClick={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Обратная Связь</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          <Contact />

</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Отправить сообщение
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

;