import { useState, useEffect, useRef } from "react"
import './App.css'
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [anchor, setAnchor] = useState(null);
    const closeButtonRef = useRef()

  const handleClick = (event) => {
    setIsMobile(!isMobile)
    setAnchor(anchor ? null : event.currentTarget);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && !event.target.closest('.popup') && event.target !== closeButtonRef.current) {
        setAnchor(false);
        setIsMobile(!isMobile)
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, anchor]);

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;
  return (
    <nav className="navbar">
        <div className="navbar-title">P M V S Rajesh</div>
        <ul className={`nav-links`}>
            <li>
            <a href="#about" className='nav-element' onClick={() => setIsMobile(false)}>About</a>
            </li>
            <li>
            <a href="#experience" className='nav-element' onClick={() => setIsMobile(false)}>Experience</a>
            </li>
            <li>
            <a href="#projects" className='nav-element' onClick={() => setIsMobile(false)}>Projects</a>
            </li>
            <li>
            <a href="#contact" className='nav-element' onClick={() => setIsMobile(false)}>Contact</a>
            </li>
            <li>
            <a href="#signin" className='nav-element' onClick={() => setIsMobile(false)}>Sign in</a>
            </li>
      </ul>
      <div>
      <div className="mobile-menu-icon button" ref={closeButtonRef} onClick={handleClick}>
      {isMobile ? "✖" : "☰"}
      </div>
      <BasePopup id={id} open={open} anchor={anchor}>
        <PopupBody>
            
            <div>
            <a href="#about"  onClick={() => {setIsMobile(false)}} onTouchStart={() => setIsMobile(false)}  >About</a>
            </div>
            <div>
            <a href="#experience"  onClick={() => setIsMobile(false)} onTouchStart={() => setIsMobile(false)}>Experience</a>
            </div>
            <div>
            <a href="#projects"  onClick={() => setIsMobile(false)} onTouchStart={() => setIsMobile(false)}>Projects</a>
            </div>
            <div>
            <a href="#contact"  onClick={() => setIsMobile(false)} onTouchStart={() => setIsMobile(false)}>Contact</a>
            </div>
            <div>
            <a href="#signin"  onClick={() => setIsMobile(false)} onTouchStart={() => setIsMobile(false)}>Sign in</a>
            </div>
        </PopupBody>
      </BasePopup>
    </div>
      
    </nav>
  )
}
const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);


export default Navbar