import React from 'react'
import s from '../../scss/components/Portfolio/_portfolio.module.scss'

import { images } from '../../constants'


export default function Portfolio() {
  return (
    <div className={s.portfolioContainer} id='Portafolio'>
      <div className={s.portfolioTitle}>
        <h2>Nuestros trabajos</h2> 
      </div>
      <div className={s.gallery} >
        <img src={images.img12} alt="" className={s.img_1x1} />
        <img src={images.img32} alt="" className={s.img_1x1} />
        <img src={images.img31} alt="" className={s.img_1x2} />
        <img src={images.img27} alt="" className={s.img_1x1} />
        <img src={images.img9} alt="" className={s.img_1x2} />
        <img src={images.img18} alt="" className={s.img_1x1} />
      </div>
    </div>
  )
}
