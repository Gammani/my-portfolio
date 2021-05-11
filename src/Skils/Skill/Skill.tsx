import React from "react";
import style from './Skill.module.scss';

type PropsType = {
    title: string
    style: {}
}

function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Skill;