import React from 'react';
import s from '../../scss/components/AboutUs/_aboutUs.module.scss';
import { images } from '../../constants/index';
import { Address, Send } from '../../constants/icons';
import { Link } from 'react-scroll'


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

              <div className={s.personData}>
                <div className={s.aboutMe}>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat amet temporibus voluptate, nulla ut magnam deleniti fugit sunt sint corporis veniam autem, aperiam facilis. Provident, natus minima? Repudiandae, iste.</p>
                </div>
                <div className={s.personInformation}>
                  <span className={s.icon}> <Address /> </span>
                  <p> Buenos Aires, Argentina.</p>
                </div>
                <div className={s.personInformation}>
                  <span className={s.icon}> <Send /> </span>
                  <p>email@gmail.com</p>
                </div>
                <div className={s.buttons}>
                  <Link activeClass="active" to='Contacto' spy={true} smooth={true} offset={0} duration={1000}>
                    <button role="button" className={s.primaryButton}> <span>Comunicate conmigo</span> </button>
                  </Link>
                  <Link activeClass="active" to='Portafolio' spy={true} smooth={true} offset={0} duration={1000}> 
                    <button role="button" className={s.secondaryButton}> <span>Ver mis trabajos</span> </button>
                  </Link>
                </div>

              </div>
            </div>

        </div>
      </div>
    </div>
  )
}
