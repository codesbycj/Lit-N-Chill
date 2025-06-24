import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import Cards from '../../cards/Cards_data'



export const TitleCards = ({title, category}) => {
   const cardsRef = useRef();

    const handleWheel = (e) => {
      if(!cardsRef.current) return;
      e.preventDefault();
      
      cardsRef.current.scrollLeft += e.deltaY * 0.5;
    }

    useEffect(() => {
      cardsRef.current.addEventListener('wheel', handleWheel)
    },[])

  return (
    <div className='titleCards'>
      <h2>{title}</h2>
      <div className="cardList" ref={cardsRef}>
        {Cards.map((card, index) =>  {
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
            </div>
        })}
      </div>
    </div>
  )
}
