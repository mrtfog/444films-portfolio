import React from 'react'
import headerVideo from '../../assets/444F/Video/HeaderVideo.mp4'
import { Link } from 'react-scroll'
import { MenuItems } from '../Navbar/Menuitems'
import {BsChevronDown} from 'react-icons/bs'
import s from '../../scss/components/Header/_header.module.scss'


export default function Header() {
  return (
    <header className={s.headerContainer} id='Header'>
      <div className={s.filter}></div>

      <div className={s.headerContent}>
        <h1>4.4.4 Films</h1>
        <p>La creación, sin límites.</p>
      </div>

      <div className={s.scrollDown}>
        <p> Ver más</p>
        <Link activeClass="active" to={MenuItems[0].url} spy={true} smooth={true} offset={0} duration={1000}>
          <p className={s.scrollDownIcon}> <BsChevronDown /> </p>
        </Link>
      </div>

      <div className={s.videoContainer}>
          <video className={`${s.video}`} loop autoPlay muted>
            <source src={headerVideo} type="video/mp4" />
          </video>
      </div>

    </header>
  )
}
