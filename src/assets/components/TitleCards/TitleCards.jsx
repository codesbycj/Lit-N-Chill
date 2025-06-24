import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import Cards from "../../cards/Cards_data";
import { Link } from "react-router-dom";

export const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([])
  const [playerId, setPlayerId] = useState()

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzQ1MTQ4MWYzZmNjNTZlZDQwY2MzOTFlMjdjNmYzNCIsIm5iZiI6MTc1MDQzMjg2Ni4xNTI5OTk5LCJzdWIiOiI2ODU1N2M2MjFiNjk4MTUwMzMxYzEyMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zpzz8gF3tm-AlgJiRNErgHQtmTohnUbbXNYs9DndE6E",
    },
  };


  
  const handleWheel = (e) => {
    if (!cardsRef.current) return;
    e.preventDefault();

    cardsRef.current.scrollLeft += e.deltaY * 0.5;
  };

  useEffect(() => {
      fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .then((res) => setApiData(res.results))
    .catch((err) => console.error(err));


    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const handleClick = () => {
    console.log('blue');
    setPlayerId('color')
  }

  return (
    <div className="titleCards" onClick={handleClick}>
      <h2>{title}</h2>
      <div className="cardList" ref={cardsRef}>
        {apiData.map((card) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img src={`https://image.tmdb.org/t/p/w500/`  + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
