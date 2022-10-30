import React, {useState} from 'react'
import { MenuItems } from './Menuitems'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import logo from '../../assets/444F/Logo/Render/Transparent-background-logo.png'
import s from '../../scss/components/Navbar/_navbar.module.scss'

export default function Navbar() {

  const [ colorMode, setColorMode ] = useState('dark')
  const [color, setColor] = useState(false);
  

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

      <div className={s.imgBox}>
        <img src={logo} alt="4.4.4 Films" />
      </div>

      <div className={s.listContainer}>
        <ul className={s.navbarListUl}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={s.navbarListLi}>
                <a className={s.menuOptions} href={item.url}>
                  <span>
                    {item.Title}
                  </span>
                </a>
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
  )
}
