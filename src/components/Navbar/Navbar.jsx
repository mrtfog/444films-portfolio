import React, {useContext, useState} from 'react'
import { MenuItems } from './Menuitems'
import { Moon, Sun, Linkedin, Youtube, Instagram } from '../../constants/icons';
import { Link } from 'react-scroll'
import s from '../../scss/components/Navbar/_navbar.module.scss'
import { ThemeContext } from '../../contexts/theme';

export default function Navbar() {

  const [ colorMode, setColorMode ] = useState('dark');
  const [color, setColor] = useState(false);

  const [{ theme, isDark },toggleTheme] = useContext(ThemeContext);

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    }
    if (window.scrollY === 0) {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const changeThemeColor = (value) => {
    setColorMode(value);
    toggleTheme();
  };

  return (
    <div className={`${s.navbarContainer}`} style={
      color
        ? {
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          transition: ".4s linear",
          boxShadow: "0px -4px 10px #000"
        }
        : { backgroundColor: "transparent", transition: ".4s linear", color : '#f5f5f5' }
    }>

      <div className={s.navbarContent}>
      <div className={s.imgBox}>
        <Link activeClass="active" to='Header' spy={true} smooth={true} offset={0} duration={1000} className={s.menuOptions}>
          <div style={{backgroundColor: "#5B42F3", borderRadius: "100%", height: "40px", width: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
            <h3>LR</h3>
          </div>
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
              <span className={`${s.sun}`}  onClick={() => changeThemeColor('light')} > <Sun /> </span> 
            :
              <span className={`${s.moon}`} onClick={() =>  changeThemeColor('dark')} > <Moon /> </span>
          }
        </div>
      </div>

      </div>
    </div>
  )
}
