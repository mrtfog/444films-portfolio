import React from 'react'
import headerVideo from '../../assets/Supra/Video/HeaderVideo.mp4'
import { Link } from 'react-scroll'
import { MenuItems } from '../Navbar/Menuitems'
import { ChevronDown } from '../../constants/icons'
import s from '../../scss/components/Header/_header.module.scss'


export default function Header() {
  return (
    <header className={s.headerContainer} id='Header'>
      <div className={s.filter}></div>

      <div className={s.headerContent}>
        <h1>Lautaro Rodriguez</h1>
        <p>Productor Audiovisual</p>
      </div>

      <div className={s.scrollDown}>
        <p>Ver más</p>
        <Link activeClass="active" to={MenuItems[0].url} spy={true} smooth={true} offset={0} duration={1000}>
          <p className={s.scrollDownIcon}> <ChevronDown /> </p>
        </Link>
      </div>

      <div className={s.videoContainer}>
          <video className={`${s.video}`} autoPlay loop muted>
            <source src={headerVideo} type="video/mp4" />
          </video>
      </div>

    </header>
  )
}
