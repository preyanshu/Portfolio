import React, { useEffect } from 'react'
import { useState } from 'react';

import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom";
import Intro from './Intro';
import {motion} from "framer-motion";

const Main = () => {
    const [click,setClick]=useState(false);
    const [loading,setloading]=useState(false);

    useEffect(() => {
        
      
        setTimeout(() => {
            setloading(true);
            
        },500);
       
      },[]);
    
  return (<>

  {loading&&<motion.div
    initial={{width:0}}
    animate={{width:100+"vw"}}
    exit={{x:window.innerWidth,transition:{duration:0.4}}}
     className='container mainjs' style={{width:100+"vw",height:100+"vh"}}>
       <div className="main">
        <div className="container"></div>
       <Link data-aos="fade-down" id="powerbtn" to="/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class=" svg-inline--fa fa-power-off fa-w-16 svg-power" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg> </Link>
       {/* <h4 className=' quit text-center' style={{margin:0+"px"}}>QUIT TO MAIN MENU</h4> */}
      
<div className={`${click?"":"charincen"}`}>

<motion.div  whileHover={{scale:1.1}}
                whileTap={{scale:0.9}} animate={{duration:1,delay:0}} className="character" style={{top:`${click?"78vh":""}`,right:`${click?"20px":""}`,transition:0.6+"s"}} >
<lottie-player  data-aos="zoom-in"src="https://lottie.host/ec70967a-e7e1-450a-8264-494951d72807/UHXMKw0wDx.json" background="Transparent" speed="1" direction="1" mode="normal" style={{height:`${click?"100px":"150px"}`,transition:0.2+"s"}} loop autoplay onClick={()=>{
    if(!click){
        setClick(true)

    }
    else{
        setClick(false)
    }
    
}}  ></lottie-player>
<h5  data-aos="zoom-in-up"className='container text-center' style={{margin:0+"px"}}>click me</h5>
</motion.div>
{(window.screen.width>800)&&<div className="black" style={{
    backgroundColor:"black",
    height:`${click?"100vh":"0vh"}`,
    width:`${click?"50vw":"0vw"}`,
    position:"absolute",
    top:0+"px",
    right:50+"vw",
    zIndex:"4",
    transition: "height 0.3s ease,width 0.5s ease 0.3s"




}}></div>}
{(window.screen.width<800)&&<div className="black" style={{
    backgroundColor:"black",
    height:`${click?"50vh":"0vh"}`,
    width:`${click?"100vw":"0vw"}`,
    position:"absolute",
    top:0+"px",
    // right:50+"vw",
    right:0+"px",

    zIndex:"4",
    transition: "width 0.3s ease,height 0.5s ease 0.3s"




}}></div>}

</div>

{!click&&<div className="menu" data-aos="fade-up">
    <h1 className="text-center"><b>Menu</b></h1>
<ul class="list-group  my-3 mt-3">
<Link to="https://drive.google.com/file/d/1JXkIBXnnRnUPhJYehBvMiGfTnfEVz2F4/view?usp=sharing" target='blank'><motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} animate={{duration:1,delay:0}}class="list-group-item mt-3"> <i class="fa-solid fa-link fa-lg"></i>   Resume</motion.li></Link>
    <Link to="/projects"><motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} animate={{duration:1,delay:0}} class="list-group-item mt-3" > <i class="fa-solid fa-play fa-lg"></i>     Projects.</motion.li></Link>
    <Link to="/skills"><motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} animate={{duration:1,delay:0}}class="list-group-item mt-3"> <i class="fa-solid fa-play fa-lg"></i>     Skills.</motion.li></Link>
    <Link to="/about"><motion.li whileHover={{scale:1.1}} whileTap={{scale:0.9}} animate={{duration:1,delay:0}}class="list-group-item mt-3"> <i class="fa-solid fa-play fa-lg"></i>     About.</motion.li></Link>
   
  
  
  
  

</ul>
                
            </div>}
       </div>
          
            
            

           
       <div className="icons " id='iconmain' data-aos="fade-up">
                <div className="icon1">
                <Link id="icon1main" style={{
                    color:`${(click&&window.screen.width>800)?"white":"black"}`
                }} to="https://github.com/preyanshu" target='true'>   <motion.i initial={{height:0}}
                animate={{height:"20px"}} 
                transition={{type:"spring",duration:1.5,delay:0}}   class="fa-brands fa-github fa-2xl"></motion.i> </Link>

                </div>
                <div className="icon2">
                <Link id="icon2main"style={{
                    color:`${(click&&window.screen.width>800)?"white":"black"}`
                }} to="https://www.instagram.com/_preyanshu/" target='true'>
                <motion.i  initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}} class="fa-brands fa-instagram fa-2xl"></motion.i> </Link>

                </div>
                <div className="icon3">
                <Link id="icon3main"style={{
                    color:`${(click&&window.screen.width>800)?"white":"black"}`
                }} to="https://www.linkedin.com/in/preyanshu-mishra-909772212/" target='true'>
                <motion.i initial={{height:0}}
    animate={{height:"20px"}} 
    transition={{type:"spring",duration:1.5,delay:0}} class="fa-brands fa-linkedin-in fa-2xl"></motion.i></Link>


                </div>
            </div>

            <div className="contact">
                <motion.h4 data-aos="fade-left"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                
                ><Link to="mailto:mishrapreyanshu@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:"black"}}>Say hi..</Link></motion.h4>
            </div>

            {click&&<Intro click={click}/>}

            {/* <div className="black23 container">Loading..</div> */}

           
           
        
      
    </motion.div>}

    {!loading&&<div className='black23'>loading..</div>}
    
    </>)
}

export default Main
