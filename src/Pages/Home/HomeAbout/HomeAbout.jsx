import React from "react";
import s from "./HomeAbout.module.css";

const HomeAbout = () => {
  return (
    <section className={s.aboutUs}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={`section_title ${s.dark}`}>О нас</h2>

          <p className={s.description}>
            <span>FastTafting</span>- небольшая команда, которая увлекается
            созданием ковров с уникальными дизайнами
          </p>

          <div className={s.team}>
            <div>
              <img
                src={require("../../../assets/img/Лёха.png")}
                alt="Лёха"
                className={s.avatar}
              />
              <p className={s.name}>Лёха</p>
            </div>
            <div>
              <img
                src={require("../../../assets/img/Денис.png")}
                alt="Денис"
                className={s.avatar}
              />
              <p className={s.name}>Денис</p>
            </div>
            <div>
              <img
                src={require("../../../assets/img/Катя.png")}
                alt="Катя"
                className={s.avatar}
              />
              <p className={s.name}>Катя</p>
            </div>
            <div>
              <img
                src={require("../../../assets/img/Димас.png")}
                alt="Димас"
                className={s.avatar}
              />
              <p className={s.name}>Димас</p>
            </div>
          </div>
          {/* <Button/> */}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
