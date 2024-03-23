import React from 'react'
import ConfigDark from "../config/particlesjs-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {motion} from "framer-motion";
import{Link} from "react-router-dom";


const About = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };

  return (
    <div>
      <motion.div
       initial={{width:0}}
       animate={{width:100+"vw"}}
       exit={{x:window.innerWidth,transition:{duration:0.4}}}
       className="particles" id='aboutbg'> 

<Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={ConfigDark}
        init={particlesInit}/>
</motion.div>


<div className='ABOUT' data-aos="zoom-in-down" >
    <h1 className='text-center'>About.</h1>
    
    I'm currently a second-year student at NIT Hamirpur, I'm adept at turning concepts into dynamic web applications using MERN and NextJs. 
<br /> <br/>
I'm interested in the whole fullstack web devlopment, My aim is to continuously enhance my skills and contribute innovative solutions to the ever-evolving tech landscape.

          

      
      </div> 
      <motion.div
      initial={{right:-20+"%",top:120+"%"}}
      animate={{top:10+"%",right:5+"%"}} 
      transition={{delay:0.3,duration:1}}
       className="spaceman">
        <img src="spaceman.png" alt="" />
      </motion.div>
      <div className="container picl" style={{width:100+"vw",height:0+"vh"}}><Link data-aos="fade-down" id="powerbtn" to="/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class=" svg-inline--fa fa-power-off fa-w-16 svg-power" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg> </Link></div>
      <div className="icons" data-aos="fade-up">
                <div className="icon1">
                <Link id="icon1" className='mainicon' to="https://github.com/preyanshu" target='true'><motion.i initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}} style={{color:"white"}}id="mainicon1" class="fa-brands mainicon1 fa-github fa-2xl"></motion.i> </Link>

                </div>
                <div className="icon2">
                <Link id="icon2" to="https://www.instagram.com/_preyanshu/" target='true'>
                <motion.i initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}}class="fa-brands fa-instagram mainicon fa-2xl"></motion.i> </Link>

                </div>
                <div className="icon3">
                <Link id="icon3" to="https://www.linkedin.com/in/preyanshu-mishra-909772212/" target='true'>
                <motion.i initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}}class="fa-brands fa-linkedin-in mainicon fa-2xl"></motion.i></Link>


                </div>
            </div>


    </div>
  )
}

export default About
