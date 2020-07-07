import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export default class Portofolio extends Component {
    render() {
        return (
            <div>
                <div className="Portofolio" id ="Portofolio" style={{ width: '100%', margin: 'auto' }}>
                    <h2   
                    data-aos="zoom-in-up"
                    data-aos-offset="200" > PORTFOLIO</h2>
                    <p
                    data-aos="zoom-in-up"
                    data-aos-offset="200" >Checkout a few of my works</p>
                    <Grid className="demo-grid-ruler">
                        <Cell col={12} className="one" >
                            <Cell col={6} phone={12} className="first-child" >
                                <div className="imag" 
                                 data-aos="fade-right"
                                 data-aos-offset="200">
                            
                                </div>
                               
                            </Cell>
                            <Cell col={6}  phone={12} className="scound-child"
                             data-aos="fade-left"
                            data-aos-offset="200">
                                <span>Akar</span>
                                <h2 className="title">Creative agency</h2>
                                <h3> React web app </h3>
                                <a href="https://murmuring-coast-69549.herokuapp.com/"  target="_blank">Visit</a>

                            </Cell>
                        </Cell>
                        <Cell col={12} className="two">
                            <Cell col={6} className="first-child" >
                                <div className="imag"  data-aos="fade-right"
                                data-aos-offset="200">
                            
                                </div>
                            </Cell>
                            <Cell col={6} className="scound-child"
                            data-aos="fade-left"
                            data-aos-offset="200">
                                <span>E-book</span>
                                <h2 className="title">Book Store</h2>
                                <h3>web site </h3>
                                <a href="https://a-111222.github.io/Ebook/"  target="_blank">Visit</a>

                            </Cell>
                        </Cell>
                        <Cell col={12} className="three">
                            <Cell col={6} className="first-child" >
                                <div className="imag"  data-aos="fade-right"
                                  data-aos-offset="200">
                                
                                    </div>
                                
                            </Cell>
                            <Cell col={6} className="scound-child"
                            data-aos="fade-left"
                            data-aos-offset="200">
                                <span>Khdmat</span>
                                <h2 className="title">Traffic services</h2>
                                <h3> web site  </h3>
                               <a href="https://a-111222.github.io/Kdmat/"  target="_blank">Visit</a>

                            </Cell>
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}
