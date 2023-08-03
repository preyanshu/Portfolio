
// import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,useLocation
} from "react-router-dom";
import Main from './Main';
import MySkills from './MySkills';
import About from './About';
import Projects from './Projects';
import { AnimatePresence } from 'framer-motion';
// import SoundBar from './components/SoundBar';


const Animatedroutes = () => {
    const location=useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Main/>} />
              <Route exact path="/skills" element={<MySkills/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/projects" element={<Projects/>} />
              
              
            </Routes>
            </AnimatePresence>
  )
}

export default Animatedroutes
