import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Menu, MenuItem } from "react-mdl"
import { BsList } from "react-icons/bs";
import { Link } from "react-scroll";
export default  class  Nav extends Component {
render(){
  
  return (
    <div className="main-nav">

      <Container className="Container">
        <Row className="row">
          <Col className="col first">
            <a href="index.html" />
            <p>ABDELRHMAN ERAKII</p>
          </Col>

          <Col className="col last">
            <div >
              <BsList name="more_vert" id="demo-menu-lower-right" />
              
              <Menu target="demo-menu-lower-right" align="right">
   


      <MenuItem > 
      <Link className="Link-Item" 
        activeClass="active"
          to="about"
          smooth={true}
          duration= {1000}>ABOUT
      </Link >
      </MenuItem>

      <MenuItem > 
      <Link className="Link-Item"
        activeClass="active"
          to="Services"
          smooth={true}
          duration= {1000}>SERVICES
      </Link >
      </MenuItem>

      <MenuItem > 
      <Link className="Link-Item"
        activeClass="active"
          to="Portofolio"
          smooth={true}
          duration= {1000}>PORTFOLIO
      </Link>
      </MenuItem>

      <MenuItem > 
      <Link className="Link-Item"
        activeClass="active"
          to="skills"
          smooth={true}
          duration= {1000}>SKILLS
      </Link>
      </MenuItem>

      <MenuItem > 
      <Link className="Link-Item"
        activeClass="active"
          to="Footer"
          smooth={true}
          duration= {1000}>CONTACT ME
      </Link>
      </MenuItem>


              </Menu>
            </div>

          </Col>
        </Row>
      </Container>

<div className="type">
<h2>HELLO,</h2>
<h2>I'AM ABDELRHMAN 
<span>|</span></h2>
</div>

      <div className="right"></div>
      <div className="left"></div>
    </div>
  )
}
}
