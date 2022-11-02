import React from 'react'
import CardsContainer from './CardsContainer'
import s from '../../scss/components/Portfolio/_portfolio.module.scss'

export default function Portfolio() {
  return (
    <div className={s.portfolioContainer} id='Portafolio'>
      <div className={s.mainContainer} >
        <h1>Nuestro Portafolio</h1>
        <CardsContainer />
      </div>
    </div>
  )
}
