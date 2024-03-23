import React from 'react'
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";
import { Link, useLocation } from "react-router-dom";

// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {motion} from "framer-motion"


const MySkills = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
  return (
    <>
    <div className="container picl" style={{width:100+"vw",height:0+"vh"}}><Link data-aos="fade-down" id="powerbtn" to="/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class=" svg-inline--fa fa-power-off fa-w-16 svg-power" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg> </Link></div>
    
    <div className="boxskills">
        
        <div className='mainskills ' data-aos="zoom-in">
            <h4 className="title"><i class="fa-solid fa-code fa-beat-fade fa-sm"></i> Skills</h4>
            <br />
            <br />
            <h5>MERN</h5> 
            <div class="progress" style={{border:3+"px solid black"}}>
  <motion.div initial={{width:0}}
                animate={{width:90+"%"}} 
                transition={{type:"spring",duration:0.5,delay:0}}
             class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:90+"%",borderRight:3+"px solid black",backgroundColor:"grey"}}>
    {/* <span class="sr-only">70% Complete</span> */}
  </motion.div>
</div>
<br/>
            <h5>NextJs</h5> 
            <div class="progress" style={{border:3+"px solid black"}}>
  <motion.div initial={{width:0}}
                animate={{width:90+"%"}} 
                transition={{type:"spring",duration:0.5,delay:0}}
             class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:70+"%",borderRight:3+"px solid black",backgroundColor:"grey"}}>
    {/* <span class="sr-only">70% Complete</span> */}
  </motion.div>
</div>
<br/>
            <h5>Devops</h5> 
            <div class="progress" style={{border:3+"px solid black"}}>
  <motion.div initial={{width:0}}
                animate={{width:70+"%"}} 
                transition={{type:"spring",duration:0.5,delay:0}}
             class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={{width:80+"%",borderRight:3+"px solid black",backgroundColor:"grey"}}>
    {/* <span class="sr-only">70% Complete</span> */}
  </motion.div>
</div>
<br/>
  
            
          

      
      </div> 
        <div className='mainskills p-3 ' data-aos="zoom-in">
            <h4 className="title"><i class="fa-solid fa-laptop-code fa-beat-fade fa-sm"></i> Fullstack developer</h4>
            <div className="descskills">

            I am a skilled and dedicated MERN/NextJs full-stack web developer, i enjoy bringing new ideas to life.

<br/>
<br/>

<strong className='mt-5'>Skills</strong>
<br/>
<p>
MERN,NextJs,Redis,Docker,Kafka,<br></br>CI/CD,Nodejs,Express,Bootstrap,etc.
</p>
</div>

      
      </div> 



<motion.div
 initial={{width:0}}
 animate={{width:100+"vw"}}
 exit={{x:window.innerWidth,transition:{duration:0.4}}}
 className="particles"> 

<Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={ConfigLight}
        init={particlesInit}/>
</motion.div>
    </div>
    <div className="icons " id='iconmain' data-aos="fade-up" >
                <div className="icon1">
                <Link id="icon1main" style={{
                    color:"black"
                }} to="https://github.com/preyanshu" target='true'>   <motion.i  initial={{height:0}}
                animate={{height:"20px"}} 
                transition={{type:"spring",duration:1.5,delay:0}}class="fa-brands fa-github fa-2xl"></motion.i> </Link>

                </div>
                <div className="icon2">
                <Link id="icon2main"style={{
                    color:"black"
                }} to="https://www.instagram.com/_preyanshu/" target='true'>
                <motion.i initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}} class="fa-brands fa-instagram fa-2xl"></motion.i> </Link>

                </div>
                <div className="icon3">
                <Link id="icon3main"style={{
                    color:"black"
                }} to="https://www.linkedin.com/in/preyanshu-mishra-909772212/" target='true'>
                <motion.i initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}} class="fa-brands fa-linkedin-in fa-2xl"></motion.i></Link>


                </div>
            </div>

    </>
    
  )
}

export default MySkills
