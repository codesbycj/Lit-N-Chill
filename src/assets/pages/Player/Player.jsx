import React from 'react'
import './Player.css'
import Back from '../../back_arrow_icon.png'

export const Player = () => {
  return (
    <div className="player">
      <img src={Back} alt="" />
      <iframe src="https://www.youtube.com/embed/lpx2zFkapIk" frameborder="0" width='90%' height='90%' title='trailer' allowFullScreen></iframe>
      
      <div className="playerInfo">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}
