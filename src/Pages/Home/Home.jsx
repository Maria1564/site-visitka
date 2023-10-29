import React from "react";
import s from "./Home.module.css";
import HomeAbout from "./HomeAbout/HomeAbout";

const Home = () => {
  return (
    <div className="Home">
      <div className={s.wrapper}>
        <div className="container">
          <div className={s.wrapper_content}>
            <div className={s.text}>
              <p>Привет, на связи <span>FastTafting</span></p>
              <p>
                Только у нас ты сможешь заказать коврики с крутыми дизайнами на
                свой вкус и цвет!
              </p>
            </div>
            <div className={s.img_bg}>
              <img src={require("../../assets/img/img-bg.png")} alt="img-bg" />
            </div>
          </div>
        </div>
      </div>
      {/* <HomeAbout/> */}
    </div>
  );
};

export default Home;
