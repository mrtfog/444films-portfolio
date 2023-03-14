import React,{ useContext } from 'react';
import s from '../../scss/components/AboutUs/_aboutUs.module.scss';
import { images } from '../../constants/index';
import { Address, Send } from '../../constants/icons';
import { Link } from 'react-scroll'
import { ThemeContext } from '../../contexts/theme';
import { motion } from 'framer-motion';


export default function AboutUs() {

  const [{ theme, isDark },toggleTheme] = useContext(ThemeContext);
 

  return (
    <div className={s.AboutUsContainer} id='Sobre-nosotros' >
      <div className={s.mainContainer} >
        
        <motion.div whileInView={{ y: [-25, 0], opacity: [0, 1]}} transition={{ duration: 1 }} className={s.title}>
          <h4> ¿Quién soy?</h4>
          <h2> Acerca de mi</h2>
        </motion.div>

        <motion.div whileInView={{ y: [-25, 0], opacity: [0, 1]}} transition={{ duration: 1.8 }} className={s.infoContainer} >
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
                    <button className={s.primaryCTAButton}>Comunicate conmigo </button>
                  </Link>
                  <Link activeClass="active" to='Portafolio' spy={true} smooth={true} offset={0} duration={1000}> 
                    <button className={s.secondaryCTAButton} style={isDark ? {color: theme.color, transition: '.4s linear'} : {}}>Ver mis trabajos</button>
                  </Link>
                </div>
              </div>
            </div>

        </motion.div>
      </div>
    </div>
  )
}
