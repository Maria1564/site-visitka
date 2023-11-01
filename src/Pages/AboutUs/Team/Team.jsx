import React from 'react'
import TeamItems from "../../Home/HomeAbout/TeamItems/TeamItems";
import  { Leha, Denis, Katya, Dimas } from "../../../assets/img/imgTeam"
import s from "./Team.module.css"
 
const team = [
  {
    id: 1,
    src: Leha,
    alt: "Лёха",
  },
  {
    id: 2,
    src: Denis,
    alt: "Денис",
  },
  {
    id: 3,
    src: Katya,
    alt: "Катя",
  },
  {
    id: 4,
    src: Dimas,
    alt: "Димас",
  },
];

const Team = () => {
  return (
    <section className={s.team_section}>
      <div className="container">
        <div className="wrapper">
          <h2>Наша команда</h2>
          <div className={s.team}>
            {team.map(({id, src, alt}) => (
              <TeamItems key={id} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team