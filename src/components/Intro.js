import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"



const Intro = () => {
  return (
    <motion.div className={`${window.screen.width<800?"boxm":"box"}`}
    initial={{height:0}}
    animate={{height:"50vh"}} 
    transition={{type:"spring",duration:1.5}}>
      <div className="subbox">
        <div className="text">
          <h1>Hi,</h1>
          <h3>I,m Preyanshu</h3>
          <h6>I am a FullStack MERN/Next.js developer, additionally adept in DevOps.</h6>
          
        </div>
      </div>
      <div className="subbox">
        < motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}} 
        transition={{delay:1,duration:0.5}}
        >
      <img src="Untitled_design__17_-removebg-preview.png" alt="" className="pic" />
      {/* <lottie-player src="https://lottie.host/be58d827-d219-4da8-94a6-4eaf4073dc1b/6bUHeLtkCA.json"speed="1" loop autoplay direction="1" mode="normal" className="pic"></lottie-player> */}
        </motion.div>
      </div>
        
       
      
    </motion.div>
  )
}

export default Intro
