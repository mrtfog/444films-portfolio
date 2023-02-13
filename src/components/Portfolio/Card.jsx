import React from 'react'
import '../../scss/components/Portfolio/card.scss'

function Card({cardSize, img, aspect}) {

  return (
    <div className={`pin ${cardSize}`}>
            <figure className='mainPic'>
                <img src={img} alt="" className={ aspect === "1x1" ? "img1x1" : "img1x2" }/>
                <figcaption>
                    <h4>Nombre del proyecto</h4>
                    <button>Ver detalles</button>
                </figcaption>
            </figure>

    </div>
    )
  
}

export default Card
