import React from 'react'
import Navber from '../components/Navber/Navber'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Skill from '../components/Skill/Skill'
import Contact from '../components/Contact/Contact'
import Project from '../components/Project/Project'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      
      
    </div>
  )
}

export default Layout