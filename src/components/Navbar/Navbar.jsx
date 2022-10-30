import React from 'react'
import { MenuItems } from './Menuitems'
import logo from '../../assets/444F/Logo/Render/Transparent-background-logo.png'
import s from '../../scss/components/Navbar/_navbar.module.scss'

export default function Navbar() {
  return (
    <div>
      
      <div className={s.imgBox}>
        <img src={logo} alt="4.4.4 Films" />
      </div>
      <ul className={s.navbarListUl}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={s.navbarListLi}>
              <a className={s.menuOptions} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
