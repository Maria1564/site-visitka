import React from 'react'
import s from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'

const setActive = ({isActive})=>isActive? s.active: ""
const Navbar = () => {
  return (
    <header>
      <span className={s.logo}>
        FastTafting
      </span>
      <nav className={s.menu}>
        <ul>
          <li className={s.item}><NavLink to="/" className={setActive} >Главная</NavLink></li>
          <li className={s.item}><NavLink to="/aboutUs" className={setActive}>О нас</NavLink></li>
          <li className={s.item}><NavLink to="/portfolio" className={setActive}>Портфолио</NavLink></li>
          <li className={s.item}><NavLink to="/reviews" className={setActive}>Отзывы</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default  Navbar