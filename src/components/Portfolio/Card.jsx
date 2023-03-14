import React from 'react'
import '../../scss/components/Portfolio/card.scss'
import { motion } from 'framer-motion'


function Card({cardSize, img, aspect}) {

  return (
    <motion.div className={`pin ${cardSize}`} whileInView={{ y: [-25, 0], opacity: [0, 1]}} transition={{ duration: 1 }}>
            <figure className='mainPic'>
                <img src={img} alt="" className={ aspect === "1x1" ? "img1x1" : "img1x2" }/>
                <figcaption>
                    <h4>Nombre del proyecto</h4>
                    <button>Más detalles</button>
                </figcaption>
            </figure>

    </motion.div>
    )
  
}

export default Card
