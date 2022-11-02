import React from 'react'
import CardsContainer from './CardsContainer'
import s from '../../scss/components/Portfolio/_portfolio.module.scss'

export default function Portfolio() {
  return (
    <div className={s.portfolioContainer} id='Portafolio'>
      <div className={s.portfolioTitle}>
        <h2>Nuestros trabajos</h2> 
      </div>
      <div className={s.mainContainer} >
        <CardsContainer />
      </div>
    </div>
  )
}
