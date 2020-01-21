import React from 'react';
import s from'./NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
      <nav className={s.nav}>
      <div className={s.item}>
          <NavLink to ="Dialogs" activeClassName={s.activeLink}>Стартовая страница</NavLink>
      </div>
          <div className={s.item}>
              <NavLink to ="Profile" activeClassName={s.activeLink}>Обучение</NavLink>
      </div>
          <div className={s.item}>
              <NavLink to ="Launch" activeClassName={s.activeLink}>Запуск Двигателя</NavLink>
          </div>
       </nav>
  );
  }

  export default NavBar