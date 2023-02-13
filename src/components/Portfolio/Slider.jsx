import React,{ useState, useEffect, useRef } from 'react';
import s from '../../scss/components/Portfolio/_slider.module.scss';
import SliderCard from './SliderCard';
import { motion } from 'framer-motion'
import { LeftArrow, RightArrow } from '../../constants/icons';

const Slider = () => {

    const sliderArray = [1, 2, 3, 4, 5, 6];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(() => {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }, []);

    const handleScroll = (direction) => {
        const { current } = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if(direction === "left"){
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;

        }
    }

  return (
    <>
        <div className={s.slider}>
            <div className={s.slider_box}>
                <h4>Explora más producciones</h4>
                <div className={s.slider_box_button}>
                    <div className={s.slider_box_button_btn}>
                        <div className={s.slider_box_button_btn_icon}>
                            <LeftArrow onClick={()=> handleScroll("left")}/>
                        </div>
                        <div className={s.slider_box_button_btn_icon}>
                            <RightArrow onClick={()=> handleScroll("right")}/>
                        </div>
                    </div>
                </div>

                <motion.div className={s.slider_box_items} ref={dragSlider}>
                    <motion.div className={s.slider_box_item} ref={dragSlider} drag="x" dragConstraints={{right: 0, left: -width}}>
                        {sliderArray.map((item, i) => {
                            return  <SliderCard key={i} el={item} i={i} />
                        })}
                    </motion.div>
                </motion.div>

            </div>
        </div>
    </>
  )
}

export default Slider