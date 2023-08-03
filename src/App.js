import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import { DarkTheme } from './components/Themes';
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,useLocation
} from "react-router-dom";
import Main from './components/Main';
import MySkills from './components/MySkills';
import About from './components/About';
import Projects from './components/Projects';
import SoundBar from './components/SoundBar';
import Animatedroutes from './components/Animatedroutes';




function App() {
  // const location = useLocation();
  return <div>
   < Router>

      
   <SoundBar data-aos="fade-right"></SoundBar>
   <Animatedroutes></Animatedroutes>
   
   
    
    </Router>
    </div>

    
}

export default App

