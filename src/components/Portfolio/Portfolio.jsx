import React from 'react'
import s from '../../scss/components/Portfolio/_portfolio.module.scss'
import Card from './Card'

import { images } from '../../constants'


export default function Portfolio() {
  return (
    <div className={s.portfolioContainer} id='Portafolio'>
      <div className={s.portfolioTitle}>
        <h2>Nuestros trabajos</h2> 
      </div>
      <div className={s.gallery}  >
        <Card cardSize='medium'  aspect='1x1' img={images.img12}/>
        <Card cardSize='medium' aspect='1x1' img={images.img32}/>
        <Card cardSize='large' aspect='1x2' img={images.img2}/>
        <Card cardSize='medium' aspect='1x1' img={images.img23}/>
        <Card cardSize='large' aspect='1x2' img={images.img7}/>
        <Card cardSize='medium' aspect='1x1'img={images.img28}/>
      </div>
    </div>
  )
}

