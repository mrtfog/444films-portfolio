import React, {useState} from 'react'
import { MenuItems } from './Menuitems'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import logo from '../../assets/444F/Logo/Render/Transparent-background-logo.png'
import s from '../../scss/components/Navbar/_navbar.module.scss'

export default function Navbar() {

  const [ colorMode, setColorMode ] = useState('dark')
  const [color, setColor] = useState(false);

  const home = 'Header'
  
  window.addEventListener("scroll", () => {
    let height = document.documentElement.scrollHeight - window.innerHeight
    let position = window.scrollY
    let width = document.documentElement.clientWidth

    let bar = position / height * width
    document.getElementById("progress").style.width = bar + "px"
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
          backgroundColor: "rgba(17, 17, 17, .7)",
          transition: ".4s linear",
        }
        : { backgroundColor: "transparent", transition: ".4s linear" }
    }>

      <div className={s.navbarContent}>
      <div className={s.imgBox}>
        <Link activeClass="active" to={home} spy={true} smooth={true} offset={0} duration={1000} className={s.menuOptions}>
          <img src={logo} alt="4.4.4 Films" />
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
        <div className={s.colorModeIcons}>
          {
            colorMode === 'dark' ? 
              <span onClick={() => setColorMode('light')}> <BsFillSunFill /> </span> 
            :
              <span onClick={() => setColorMode('dark')}> <BsFillMoonFill /> </span>
          }
        </div>
      </div>
      </div>
      
      <div className={s.progressBar} id="progress" style={
      color
        ? {
          backgroundColor: "#FF1443",
          transition: ".4s linear",
        }
        : { backgroundColor: "transparent", transition: ".4s linear" }
    }></div>
    </div>
  )
}
