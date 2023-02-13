import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants/index';
import s from '../../scss/components/Portfolio/_sliderCard.module.scss';


const SliderCard = () => {
  return (
    <motion.div className={s.sliderCard}>
        <div className={s.sliderCard_box}>
            <motion.div className={s.sliderCard_box_image}>
                <img src={images.img23} className={s.sliderCard_box_image_img} alt="" />
            </motion.div>
            <div className={s.sliderCard_box_title}>
                <p>Título del proyecto</p>
            </div>
            <div className={s.sliderCard_box_description}>
                <div className={s.sliderCard_box_description_box}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default SliderCard