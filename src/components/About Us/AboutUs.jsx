import React from 'react';
import s from '../../scss/components/AboutUs/_aboutUs.module.scss';
import {images} from '../../constants/index';
import { Address, Send } from '../../constants/icons';

export default function AboutUs() {

  return (
    <div className={s.AboutUsContainer} id='Sobre-nosotros' >
      <div className={s.mainContainer} >
        
        <div className={s.title}>
          <h4> ¿Quién soy?</h4>
          <h2> Acerca de mi</h2>
        </div>

        <div className={s.infoContainer} >
          <div className={s.imgBox}>
            <img src={images.profile} alt="Profile Photo"/>
          </div>

          <div className={s.description}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat amet temporibus voluptate, nulla ut magnam deleniti fugit sunt sint corporis veniam autem, aperiam facilis. Provident, natus minima? Repudiandae, iste.</p>

            <div className={s.personData}>
              <div className={s.personInformation}>
                <span className={s.icon}> <Address /> </span>
                <p> Buenos Aires, Argentina.</p>
              </div>
              <div className={s.personInformation}>
                <span className={s.icon}> <Send /> </span>
                <p>email@gmail.com</p>
              </div>
            </div>

            <div className={s.buttons}>
              <button role="button" className={s.primaryButton}> <span className={s.text}>Comunícate conmigo</span> </button>
              <button role="button" className={s.secondaryButton}> <span className={s.text}>Ver mis trabajos</span> </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
