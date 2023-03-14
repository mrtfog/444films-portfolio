import React,{ useContext } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants/index';
import s from '../../scss/components/Portfolio/_sliderCard.module.scss';
import { ThemeContext } from '../../contexts/theme';


const SliderCard = () => {

    const [{ theme, isDark },toggleTheme] = useContext(ThemeContext);

  return (
    <motion.div className={s.sliderCard}>
        <div className={s.sliderCard_box}>
            <div className={s.sliderCard_box_image}>
                <img src={images.img23} className={s.sliderCard_box_image_img} alt="" />
            </div>
            <div className={s.sliderCard_box_title}>
                <p>Título del proyecto</p>
            </div>
            <div className={s.sliderCard_box_description}>
                <div className={s.sliderCard_box_description_box}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className={s.sliderCard_box_description_button}>
                    <button style={isDark ? {color: theme.color, transition: '.4s linear'} : {}}>Más detalles</button>
                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default SliderCard