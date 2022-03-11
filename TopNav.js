import React, {Component,Fragment} from 'react';
import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap";
import whiteLogo from '../../asset/image/WhiteLogo.png';
import blueLogo from '../../asset/image/BlueLogo.png';
class TopNav extends Component{

    // Start Navbar Scroll Effect by JS
        constructor(){
            super();
            this.state={
                navBarTitle:"navTitle",
                navLogo:"[whiteLogo]",
                navbarBack:"navBackground",
                navBarItem:"navItem"
                }
            }
            onScroll=()=>{
                if(window.scrollY>100){
                    this.setState({navBarTitle:'navTitleScroll',navLogo:[blueLogo],navbarBack:'navBackgroundSroll', navBarItem:'navItemScroll'})
                }
                if(window.scrollY<100){
                    this.setState({navBarTitle:'navTitle',navLogo:[whiteLogo],navbarBack:'navBackground',navBarItem:'navItem' })
                }
            }
            componentDidMount(){
                window.addEventListener('scroll',this.onScroll)
            }
    // End Navbar Scroll Effect by JS

    render(){
        return(
            <Fragment>
                <Navbar fixed="top" className={this.state.navbarBack} collapseOnSelect expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home" className={this.state.navBarTitle}><img src={this.state.navLogo}/> Rana-Biswas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                      
                        </Nav>
                        <Nav>
                        <Nav.Link className={this.state.navBarItem} href="#deets">Home</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets">Services</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets">Courses</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets">Portfolio</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets">Contact</Nav.Link>
                        <Nav.Link className={this.state.navBarItem} href="#deets">About</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </Fragment>
        );
    }
}

export default TopNav;
