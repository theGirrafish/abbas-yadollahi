import React, {PureComponent} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavigationBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect style={{marginBottom: "0px"}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );

    // return (
    //   <nav class="navbar navbar-default">
    //     <div class="container-fluid">
    //       <div class="navbar-header">
    //         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
    //                 data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    //           <span class="sr-only">Toggle navigation</span>
    //           <span class="icon-bar"></span>
    //           <span class="icon-bar"></span>
    //           <span class="icon-bar"></span>
    //         </button>
    //         <a class="navbar-brand" href="#">Brand</a>
    //       </div>

    //       <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    //         <ul class="nav navbar-nav">
    //           <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
    //           <li><a href="#">Link</a></li>
    //         </ul>
    //         <ul class="nav navbar-nav navbar-right">
    //           <li><a href="#">Link</a></li>
    //           <li class="dropdown">
    //             <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
    //             <ul class="dropdown-menu">
    //               <li><a href="#">Action</a></li>
    //               <li><a href="#">Another action</a></li>
    //               <li><a href="#">Something else here</a></li>
    //               <li role="separator" class="divider"></li>
    //               <li><a href="#">Separated link</a></li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // )
  }
}

export default NavigationBar;