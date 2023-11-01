import React from 'react'
import TeamItems from "../../Home/HomeAbout/TeamItems/TeamItems";
import  { Leha, Denis, Katya, Dimas } from "../../../assets/img/imgTeam"
 
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
    <div>Team</div>
  )
}

export default Team