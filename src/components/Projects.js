import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

const Projects = () => {
  return (<>

    <div 
     initial={{width:0}}
     animate={{width:100+"vw"}}
     exit={{x:window.innerWidth,transition:{duration:0.4}}}
    className='projectsmain'>
        {/* power button */}
        
        <Link data-aos="fade-down" id="powerbtn" className='propower' to="/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="power-off" class=" svg-inline--fa fa-power-off fa-w-16 svg-power" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></svg> </Link>
         
        {/* <div className="container" style={{width:100+"vw",height:40+"vh"}}> */}
        <div className="projectbody">
          
       
          
          <div class="card topcards" data-aos="zoom-in-down" style={{width:18+"rem"}}>
<img src="notes.png" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">CloudNotes (sem-2)</h5>
  <p class="card-text">A cloud based MERN Note taking web app with Signup + Login feature with the help of jwt tokens and usage of encryptions for storage of passwords in mongoDB</p>
  <a href="https://cloud-notes-3pdx.onrender.com/" target='true' class="btn btn-dark d-inline  ">View Demo</a>
  <a href="https://github.com/preyanshu?tab=repositories&q=notes&type=&language=&sort=" target='true' ><i class="fa-brands fa-github fa-xl mx-5"></i></a>
  
</div>
</div>
       <div class="card topcards card2"data-aos="zoom-in-down" style={{width:18+"rem"}}>
<img src="Screenshot 2023-08-03 130642.png" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">BankingSystem (sem-2)</h5>
  <p class="card-text">A MERN web app simulation of the banking system which uses MongoDB atlas to store transaction between users and their records </p>
  <a href="https://sparks-frontend.onrender.com/" target='true' class="btn btn-dark d-inline  ">View Demo</a>
  <a href="https://github.com/preyanshu?tab=repositories&q=sparks&type=&language=&sort=" target='true'> <i class="fa-brands fa-github fa-xl mx-5"></i></a>
 
</div>
</div>
       <div class="card" style={{width:18+"rem"}} data-aos="zoom-in-down">
<img src="Screenshot 2023-08-03 131225.png" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">NeuralNav (sem-2)</h5>
  <p class="card-text">A self help bot made using simple Html,Css,Js for frontend and nodejs for backend</p>
  <a href="https://selfhelpbot.onrender.com/" target='true' class="btn btn-dark d-inline  ">View Demo</a>
  <a href="https://github.com/preyanshu?tab=repositories&q=neuralN&type=&language=&sort=" target='true'> <i class="fa-brands fa-github fa-xl mx-5"></i></a>
 
</div>
</div>
       <div class="card" style={{width:18+"rem"}} data-aos="zoom-in-down">
<img src="Screenshot 2023-08-03 project 4.png" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">To-do app (sem-2)</h5>
  <p class="card-text">A web app using Angular in which people can store write their to-do tasks</p>
  <a href="https://todolist-angular-55tk.onrender.com/"  target="true" class="btn btn-dark d-inline  ">View Demo</a>
  <a href="https://github.com/preyanshu/todolist_angular" target='true'> <i class="fa-brands fa-github fa-xl mx-5"></i></a>
 
</div>
</div>
       <div class="card" style={{width:18+"rem"}} data-aos="zoom-in-down">
<img src="5.png" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">taxi app (sem-3) </h5>
  <p class="card-text">A taxi web app using MERN stack using which we will be able to book taxi for ourself at the cheapest price available</p>
  <a href="#" class="btn btn-dark d-inline  ">coming soon</a>
  <i class="fa-brands fa-github fa-xl mx-5"></i>
</div>
</div>
       <div class="card" style={{width:18+"rem"}} data-aos="zoom-in-down">
{/* <img src="animation_lkr6ocyv_small.gif" class="card-img-top" alt="..."/> */}
<div className="card-imp-top text-center container d-flex justify-content-center align-items-center" style={{height:17+"rem"}}><h1 >PROJECT 6</h1></div>
<div class="card-body">
  <h5 class="card-title">Project title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-dark d-inline  " >coming soon</a>
  <i class="fa-brands fa-github fa-xl mx-5"></i>
</div>
</div>


      
       

       </div>
        </div>
         
            {/* // </div> */}
         
         
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
            {/* <img src="ac334431-3904-4d75-ac4a-b7c9b955a1f0.gif" alt="" className="rocket" /> */}
            {/* <img src="d4bf7860-d9cb-426f-89c4-09f6052f1028.gif" alt="" className="moon" /> */}
            <img src="859d4940-7be4-4a4f-8a43-984ac5d9b8d0.gif" alt="" className="astronaut" />
            


        

         
         </> )
}

export default Projects
