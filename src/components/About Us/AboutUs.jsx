import React from 'react'
import logo from '../../assets/444F/Logo/Render/Transparent-background-logo.png'
import s from '../../scss/components/AboutUs/_aboutUs.module.scss'

export default function AboutUs() {

  return (
    <div className={s.AboutUsContainer} id='Sobre-nosotros' >
      <div className={s.mainContainer} >
        <div className={s.imgBox} >
            <img src={logo} alt="" />
        </div>

        <div className={s.infoContainer} >
          <h2> ¿Quiénes somos?</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus, reprehenderit eum libero consequuntur, aspernatur, cupiditate nulla laborum earum voluptatum tempore! Consequatur provident vitae cumque. Laboriosam harum accusamus ea ducimus.</p>
        </div>
      </div>
    </div>
  )
}
