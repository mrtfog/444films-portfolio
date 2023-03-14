import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import { Link } from 'react-scroll';

import { Linkedin, Youtube, Instagram } from '../../constants/icons';
import { MenuItems } from '../Navbar/Menuitems';
import s from '../../scss/components/Footer/_footer.module.scss';

  export default function Footer() {

    const [{ theme, isDark },toggleTheme] = useContext(ThemeContext);

    return (
      <footer className={isDark ? `${s.footerDark}` : `${s.footerLight}`}>
        <div className={s.mainContainer}>
          <nav className={s.sections} aria-label="Footer">
            { MenuItems.map((item) => (
              <div key={item.Title} className={s.menuItems}>
                <Link activeClass="active" to={item.url} spy={true} smooth={true} offset={0} duration={1000} className={s.menuOptions}> 
                    <a className={isDark ? `${s.menuDarkLabel}` : `${s.menuLightLabel}`}> {item.Title} </a>
                </Link>
              </div>
            ))}
          </nav>
          <div className={s.socialMedia}>

           <a target="_blank" href='https://www.linkedin.com/in/lautaro-rodriguez-838a9023b/' className={isDark ? `${s.iconDark}` : `${s.iconLight}`}>
                <span className={s.iconLabel}>LinkedIn</span>
                <Linkedin className={s.iconSize} aria-hidden="true" />
            </a>
            
           <a target="_blank" href='https://www.youtube.com/channel/UCdeyL9YAJGSHDF0yO_oILjw' className={isDark ? `${s.iconDark}` : `${s.iconLight}`}>
                <span className={s.iconLabel}>YouTube</span>
                <Youtube className={s.iconSize} aria-hidden="true" />
            </a>
           <a target="_blank" href='https://www.instagram.com/lautyrodriguezsoy/' className={isDark ? `${s.iconDark}` : `${s.iconLight}`}>
                <span className={s.iconLabel}>Instagram</span>
                <Instagram className={s.iconSize} aria-hidden="true" />
            </a>

          </div>
          <p className={isDark ? `${s.rightsDark}` : `${s.rightsLight}`}>
            &copy; 2023 Lautaro Rodriguez. Todos los derechos reservados. 
          </p>
          
        </div>
      </footer>
    )
  }