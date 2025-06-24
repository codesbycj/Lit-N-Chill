import React, { useEffect, useState } from "react";
import "./Player.css";
import Back from "../../back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

export const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const {id} = useParams();
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzQ1MTQ4MWYzZmNjNTZlZDQwY2MzOTFlMjdjNmYzNCIsIm5iZiI6MTc1MDQzMjg2Ni4xNTI5OTk5LCJzdWIiOiI2ODU1N2M2MjFiNjk4MTUwMzMxYzEyMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zpzz8gF3tm-AlgJiRNErgHQtmTohnUbbXNYs9DndE6E",
    },
  };
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player"> 
      <img src={Back} alt="" onClick={() => {
        navigate("/")
      }}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        width="90%"
        height="90%"
        title="trailer"
        allowFullScreen
      ></iframe>

      <div className="playerInfo">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};
