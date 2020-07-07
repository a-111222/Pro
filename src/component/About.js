import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const About = ()=> {

    return (
        <div className="About" id="about">
           <div className="countainer" >
            <div className="right-About" data-aos="fade-right">
                <div className="overlay"></div>
            </div>
            <div className="left-About" data-aos="fade-left">
            <h1>ABOUT</h1>
            <p className="Hi">HI! i'm Abdelrhman </p>
            <h2 className="About-info">
               Hey, iam Abdelrhman creative front end web developer,
               Very passionate about developing and programming web front end<br/>
               Study at Faculty of Managment Technology and Information Systems
                 </h2>
                 <h4>Checkout My Resume</h4>
                <h5 id="text"></h5>

                 <div className="Icon">
                
                     <a href="https://www.facebook.com/profile.php?id=100009162824672" target="blank"><FaFacebookF /> </a>
                     <a href="https://www.instagram.com/abdelrhman_erakii/" target="_blank"><FaInstagram/></a>
                     <a href="https://twitter.com/AbdElrh80818661"target="blank"><FaTwitter/></a>
                     
                 </div>
                 <div className="contact">
                     <h2>Contact me here!</h2>
                     <p className="Email"> Email:<span>aelrhman75@yahoo.com</span></p>
                     <p className="Phone"> Phone: <span>+20 1024131582</span></p>
                 </div>
                 
            </div>
           
           </div>

        </div>
    )

}
export default About;