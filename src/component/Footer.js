import React, { Component } from 'react'
import { BsFillHeartFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Grid, Cell } from 'react-mdl'
export default class Footer extends Component {
    render() {
        return (
   <div className="Footer">
                <div id="Footer" 
                className="main-div" style={{width: '100%', margin: 'auto'}}>
               
                <Grid className="demo-grid-ruler two">
                   <div className="icons">
                   <Cell   col={1}><a href="https://www.upwork.com/freelancers/~0151e531eb4c0b3995" target="blank"><FaCartPlus /> </a></Cell>
                    <Cell  col={1}><a href="https://www.linkedin.com/in/abdelrhman-a-514081198/" target="_blank"><FaLinkedinIn/></a></Cell>
                    <Cell  col={1} ><a href="https://www.freelancer.com/u/Abdelrhman75"target="blank"><FaCartPlus/></a></Cell>
                   </div>
                   
                    <Cell col={12} className="Contact">Contact me</Cell>
                    <Cell col={12} className="Email">aelrhman75@yahoo.com</Cell>
                    <Cell col={12} className="last">
                        Made by <span><BsFillHeartFill/></span>
                        Abdelrhman Erakii.
                    </Cell>
                </Grid>
                    </div>
    </div>
        )
    }
}
