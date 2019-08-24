import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Resources } from './Resources';
import { Park } from './Park';
import { License } from './License';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { AnimatedSwitch } from 'react-router-transition';
import  NavigationBar  from './components/NavigationBar';
import  {Jumbotron}from './components/Jumbotron';
import { Contact } from './Contact';
import NavbarPage from './components/NavbarPage';
import {Footer} from './Footer';
class App extends Component {
  state = {
  visible: true,
  modalIsOpen: false

  }
  
  toggleAlert(){
  
    this.setState({
      visible:! this.state.visible
    });
  }
  
    render() {
      return (
      
        <React.Fragment>
          <Router>
            <>sxz<dsd></dsd>
           <NavigationBar />
            

            <NavbarPage />
       
           <Jumbotron />
              
           
           
            
            <Layout>
              <Switch>
              <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
  
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/resources" component={Resources} />
                <Route path="/license" component={License} />
                <Route path="/park" component={Park} />
                <Route component={NoMatch} />
                </AnimatedSwitch>
              </Switch>
         </Layout>

           
         <Footer /> 
            </>
          </Router>
         
        </React.Fragment>
   
      );
    }
  }
  
  export default App;
  