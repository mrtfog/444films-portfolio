import React from 'react'
import headerVideo from '../../assets/444F/Video/HeaderVideo.mp4'
import s from '../../scss/components/Header/_header.module.scss'
import {BsChevronDown} from 'react-icons/bs'


export default function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.filter}></div>

      <div className={s.headerContent}>
        <h1>4.4.4 Films</h1>
        <p>La creación, sin límites.</p>
      </div>

      <div className={s.scrollDown}>
        <p> Ver más</p>
        <p className={s.scrollDownIcon}> <BsChevronDown /> </p>
      </div>

      <div className={s.videoContainer}>
          <video className={`${s.video}`} loop autoPlay muted>
            <source src={headerVideo} type="video/mp4" />
          </video>
      </div>

    </header>
  )
}
