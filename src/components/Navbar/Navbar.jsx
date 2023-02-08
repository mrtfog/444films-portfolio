import React, {useState} from 'react'
import { MenuItems } from './Menuitems'
import { Moon, Sun, Linkedin, Youtube, Instagram } from '../../constants/icons';
import { Link } from 'react-scroll'
import Icon from '../../assets/Supra/LOGOS/Icon.png'
import s from '../../scss/components/Navbar/_navbar.module.scss'

export default function Navbar() {

  const [ colorMode, setColorMode ] = useState('dark')
  const [color, setColor] = useState(false);

  const home = 'Header'

  window.addEventListener('click', () => {
    const body = document.getElementsByTagName("BODY")[0]
    
    if(colorMode === 'dark'){
      body.style.color = "rgb(250, 250, 250)"
      body.style.backgroundColor = "rgb(29, 29, 27)"
    } else {
      body.style.color = "rgb(0, 0, 0)"
      body.style.backgroundColor = "rgb(250, 250, 250)"
    }
  })
  

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    }
    if (window.scrollY === 0) {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={s.navbarContainer} style={
      color
        ? {
          backgroundColor: "#1D1D1B",
          transition: ".4s linear",
          boxShadow: "0px -4px 10px #000"
        }
        : { backgroundColor: "transparent", transition: ".4s linear" }
    }>

      <div className={s.navbarContent}>
      <div className={s.imgBox}>
        <Link activeClass="active" to={home} spy={true} smooth={true} offset={0} duration={1000} className={s.menuOptions}>
          <img src={Icon} alt="Supra" />
        </Link>
      </div>

      <div className={s.listContainer}>
        <ul className={s.navbarListUl}>
          {MenuItems.map((item) => {
            return (
              <li key={item.url} className={s.navbarListLi}>
                <Link activeClass="active" to={item.url} spy={true} smooth={true} offset={0} duration={1000} className={s.menuOptions}>
                  <span>
                    {item.Title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        
      </div>

      <div className={`${s.iconsContainer}`}>
          <ul className={`${s.socialMedia}`}>
            <li><Linkedin/></li>
            <li><Youtube /></li>
            <li><Instagram /></li>
          </ul>

          <div className={`${s.colorModeIcons}`}>
          {
            colorMode === 'dark' ? 
              <span className={`${s.sun}`}  onClick={() => setColorMode('light')} > <Sun /> </span> 
            :
              <span className={`${s.moon}`} onClick={() =>  setColorMode('dark')} > <Moon /> </span>
          }
        </div>
      </div>

      </div>
    </div>
  )
}
