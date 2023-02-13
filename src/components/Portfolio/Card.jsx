import React from 'react'
import '../../scss/components/Portfolio/card.scss'

function Card({cardSize, img, aspect}) {

  return (
    <div className={`pin ${cardSize}`}>
        <div className='cardDetails'> 

            <h3>Nombre del proyecto</h3>
            <button>Ver más detalles</button>

        </div>

            <div className='mainPic'>
                <img src={img} alt="" className={ aspect === "1x1" ? "img1x1" : "img1x2" }/>

            </div>

    </div>
    )
  
}

export default Card
