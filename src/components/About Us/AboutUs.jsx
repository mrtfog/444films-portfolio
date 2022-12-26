import React from 'react'
import s from '../../scss/components/AboutUs/_aboutUs.module.scss'
import Spline from '@splinetool/react-spline'

export default function AboutUs() {

  return (
    <div className={s.AboutUsContainer} id='Sobre-nosotros' >
      <div className={s.mainContainer} >
        <div className={s.model}>
        {/* <Spline scene="https://prod.spline.design/IY-BHn56qkvwTASj/scene.splinecode" /> */}
        </div>
        <div className={s.infoContainer} >
          <h2> ¿Quiénes somos?</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus, reprehenderit eum libero consequuntur, aspernatur, cupiditate nulla laborum earum voluptatum tempore! Consequatur provident vitae cumque. Laboriosam harum accusamus ea ducimus.</p>
        </div>
      </div>
    </div>
  )
}
