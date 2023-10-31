import React from "react";
import s from "./HomeAbout.module.css";
import { Button } from "../../../components/ui";
import TeamItems from "./TeamItems/TeamItems";

const team = [
  {
    id: 1,
    src: require("../../../assets/img/Лёха.png"),
    alt: "Лёха",
  },
  {
    id: 2,
    src: require("../../../assets/img/Денис.png"),
    alt: "Денис",
  },
  {
    id: 3,
    src: require("../../../assets/img/Катя.png"),
    alt: "Катя",
  },
  {
    id: 4,
    src: require("../../../assets/img/Димас.png"),
    alt: "Димас",
  },
];

const HomeAbout = () => {
  return (
    <section className={s.home_aboutUs}>
      <div className="container">
        <div className="wrapper">
          <h2 className={`section_title ${s.dark}`}>О нас</h2>

          <p className={s.description}>
            <span>FastTafting</span>- небольшая команда, которая увлекается
            созданием ковров с уникальными дизайнами
          </p>

          <div className={s.team}>
            {team.map(({id, src, alt}) => (
            
              <TeamItems key={id} src={src} alt={alt} />
            ))}
          </div>
          <Button text="Подробнее" to="aboutUs" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
