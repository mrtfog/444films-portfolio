import React from 'react'
import Card from './Card'
import s from '../../scss/components/Portfolio/_cardsContainer.module.scss'

export default function CardsContainer() {
  return (
    <div className={s.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}
