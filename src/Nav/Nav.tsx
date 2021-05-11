import React from "react";
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="#main" className={style.text}>Главная</a>
            <a href="#skills" className={style.text}>Скилы</a>
            <a href="#projects" className={style.text}>Проекты</a>
            <a href="#contacts" className={style.text}>Контакты</a>
        </div>
    )
}

export default Nav;