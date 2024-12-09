import { useState } from "react"
import './App.css'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className="navbar">
        <div className="navbar-title">P M V S Rajesh</div>
        <ul className={`nav-links`}>
            <li>
            <a href="#about" className='nav-element' onClick={() => setIsMobile(false)}>About</a>
            </li>
            <li>
            <a href="#about" className='nav-element' onClick={() => setIsMobile(false)}>Experience</a>
            </li>
            <li>
            <a href="#about" className='nav-element' onClick={() => setIsMobile(false)}>Projects</a>
            </li>
            <li>
            <a href="#contact" className='nav-element' onClick={() => setIsMobile(false)}>Contact</a>
            </li>
            <li>
            <a href="#contact" className='nav-element' onClick={() => setIsMobile(false)}>Sign in</a>
            </li>
      </ul>
      <button 
        className="mobile-menu-icon" 
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? "✖" : "☰"}
      </button>
      
    </nav>
  )
}

export default Navbar