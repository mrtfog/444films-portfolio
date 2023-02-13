import React from 'react';
import s from '../../scss/components/Portfolio/_portfolio.module.scss';
import Card from './Card';

import { images } from '../../constants';


export default function Portfolio() {
  return (
    <>
    <div className={s.portfolioContainer} id='Portafolio'>
      <div className={s.portfolioTitle}>
        <h4>Soluciones a la medida de tus necesidades</h4>
        <h2>Mis trabajos</h2> 
      </div>
      <div className={s.gallery}  >
        <Card cardSize='medium'  aspect='1x1' img={images.img12}/>
        <Card cardSize='large' aspect='1x2' img={images.img15}/>
        <Card cardSize='large' aspect='1x2' img={images.img1}/>
        <Card cardSize='medium' aspect='1x1' img={images.img18}/>
      </div>
    </div>
    </>
  )
}

