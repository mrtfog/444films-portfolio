import React from 'react'
import headerVideo from '../../assets/444F/Video/HeaderVideo.mp4'
import s from '../../scss/components/Header/_header.module.scss'

export default function Header() {
  return (
    <div className={s.headerContainer}>
      <div className={s.videoContainer}>
        <div className={s.darkFilter}>
          <video className={`${s.video}`} loop autoPlay muted>
            <source src={headerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
