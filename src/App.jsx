import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import Myskills from './components/Myskills.jsx'
import Services from './components/Services.jsx'
import Myexperience from './components/Myexperience.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos';

import './App.css'
function App() {
  return(
    <>
    <Header/>
    <div id='profile'>
      <Profile/>
    </div>
    <div id='skills'>
      <Myskills/>
    </div>
    <Services/>
    <div id='exp'>
      <Myexperience/>
    </div>
    <div id='projects'>
      <Portfolio/>
    </div>
    <div id='contact'>
      <Contact/>
    </div>
    <Footer/>
    
    </>
  )
  

}

export default App
