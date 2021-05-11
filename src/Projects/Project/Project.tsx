import React from "react";
import style from './Project.module.scss';

type PropsType = {
    title: string
    description: string
    style: {}
    link: string
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.image} >
                <a href={props.link} className={style.viewBtn} style={props.style} ></a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Project;