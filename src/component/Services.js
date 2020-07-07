import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import { BsImage } from "react-icons/bs";
import { GoDeviceMobile } from "react-icons/go";
import { GoDeviceDesktop } from "react-icons/go";

export default class Services extends Component {
    

    render() {
    
        return (
    <div className="Services" style={{width: '100%', margin: 'auto',textAlign:'center'}} >
    <Grid className="demo-grid-ruler">

        <Cell className="main" col={12} id="Services" 
         data-aos="zoom-in-up"
         data-aos-offset="200">
            <p className="one" >WHAT I DO</p>
             <br/>
            <p className="two">My services</p>
           </Cell>

            <section>

         <Cell className="Services-item" phone={12} tablet={12}  col={4} 
        data-aos="fade-right"
        data-aos-offset="200" >
        <BsImage className="Icon"/>
        <p>Convert Psd to responsive website</p>
        </Cell>
        <Cell className="Services-item" phone={12}  tablet={12}  col={4}
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-offset="200">
        <GoDeviceMobile className="Icon"/>
       <p> build responsive react web app</p>
        </Cell>
        <Cell className="Services-item" phone={12}  tablet={12}  col={4}
        data-aos="fade-left"
        data-aos-offset="200">
        <GoDeviceDesktop className="Icon"/>
       <p> build responsive web site </p>
        </Cell>
            </section>
      
    </Grid>
          </div>
        )
    }
}
