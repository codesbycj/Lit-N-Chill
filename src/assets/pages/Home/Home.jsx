import React from "react";
import Hero from "../../hero_banner1.jpg";
import HeroIcon from "../../banner_icon.png";
import Play from "../../play_icon.png";
import Info from "../../info_icon.png";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={Hero} alt="" className="heroImg" />

        <div className="heroCaption">
          <img src={HeroIcon} alt="" />
          <p>
            In the bustling heart of New York City, Peter Parker's life was
            flipped upside down by a single bite. He thought he was just a kid
            from Queens, but that moment unlocked a connection to a secret,
            extraordinary lineage – not of ancient scrolls, but of unimaginable
            power and the crushing weight of responsibility. Now, he swings
            through skyscrapers, not as a chosen one of old, but as the
            protector our world desperately needs.
          </p>
          <p className="lilTop">
            Spider-Man. Your friendly neighborhood hero is swinging onto
            Netflix.
          </p>

          <div className="heroBtn">
            <button className="btn">
              <img src={Play} alt="" />
              Play
            </button>
            <button className="btn darkBtn">
              <img src={Info} alt="" />
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
