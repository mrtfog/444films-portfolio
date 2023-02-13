import React from 'react'
import photo1 from '../../assets/444F/Photos/DSC_0045.jpg'
import s from '../../scss/components/Portfolio/_card.module.scss'


export default function Card() {
  return (
    <div className={s.container} data-view="list">
       <div className={s.card}>
            <div className={s.cardHeader}>
                <img src={photo1} alt="rover" />
            </div>
            <div className={s.cardBody}>
                <div className={s.tagsContainer}>
                    <span className={`${s.tag} ${s.tagTeal}`}>Publicidad</span>
                </div>
                <h4> 9Z Academy interview </h4>
                <p> That's only an example of how it will be the card result </p>
                <div className={s.user}>
                    <div className={s.userInfo}>
                        <small>31/12/2022</small>
                        <small>More info</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
