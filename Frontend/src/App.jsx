
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Profile from './profile'
import {  useRef } from 'react'

function App() {
  const contactFormRef = useRef()
  const moveToContact = () =>{
    contactFormRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
     <Navbar moveToContact={moveToContact}/>
     <Profile/>
     <Footer ContactFormRef={contactFormRef}/>
    </>
  )
}

export default App
