import React from "react";
import s from "./HomePortfolio.module.css";
import Card from "./Card/Card";
import { Button } from "../../../components/ui";



const cards = [
    {
        id: 1,
        src: require("../../../assets/img/pageHome/HugeCat.png"),
        alt: "HugeCat"
    },
    {
        id: 2,
        src: require("../../../assets/img/pageHome/Corgi.png"),
        alt: "Corgi"
    },
    {
        id: 3,
        src: require("../../../assets/img/pageHome/Hello Kitty.png"),
        alt: "Hello Kitty"
    },
    {
        id: 4,
        src: require("../../../assets/img/pageHome/Ghost.png"),
        alt: "Ghost"
    },
    {
        id: 5,
        src: require("../../../assets/img/pageHome/Stitch.png"),
        alt: "Stitch"
    },
    {
        id: 6,
        src: require("../../../assets/img/pageHome/Pikachu.png"),
        alt: "Pikachu"
    },
]

const HomePortfolio = () => {
  return (
    <section className={s.home_portfolio}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className="section_title">Портфолио</h2>
          <div className={s.cards}>
                {cards.map(({id, src, alt})=>(
                    <Card key={id} src={src} alt={alt}/>
                ))}
            </div>
          <Button text="Ещё" to="portfolio" />
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
