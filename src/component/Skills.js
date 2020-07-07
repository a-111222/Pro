import React, { Component } from 'react'
import CountUp from 'react-countup'
import {Grid,Cell} from 'react-mdl'

 class Skills extends Component {
    render() {
        return ( 



<div className="skills" >
 <div style={{width: '80%', margin: 'auto'}}>
        <div className="title"
        id="skills"
        data-aos="zoom-in"
        data-aos-offset="200">
                <h3 > SKILLS</h3>
                <p>I love to share my<br/> achievements</p>
        </div>
<Grid className="demo-grid-ruler">
        <Cell col={3} phone={12} tablet={4}>
                <h2>HTML</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={95}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>


        <Cell col={3} phone={12} tablet={4}>
                <h2>SCSS</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={90}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>

        <Cell col={3} phone={12} tablet={4}>
                <h2>JQUERY</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={80}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>


        <Cell col={3} phone={12} tablet={4}>
                <h2>css</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={90}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>
</Grid>

<Grid className="demo-grid-ruler">
        <Cell col={3} phone={12} tablet={4}>
                <h2>JAVASCRIPT</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={82}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>


        <Cell col={3} phone={12} tablet={4}>
                <h2>REACT</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={78}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>

        <Cell col={3} phone={12} tablet={4}>
                <h2>BOOTSTRAP</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={98}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>


        <Cell col={3} phone={12} tablet={4} >
                <h2>HTML5</h2>
                <CountUp
                        data-aos="fade-right"
                        className="CountUp"
                        end={90}
                        duration={30}
                        delay={2}/>        
                <span>%</span>

        </Cell>
</Grid>






</div>
</div>

           
        )
    }
}
export default Skills;