import React from "react";
import style from './Works.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Work from "./work/Work";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.skills}>
                    <Work title={"Socnet"} description={"Lorem ipsum dolor sit amet"}/>
                    <Work title={"TodoList"} description={" et dolore magna aliqua Ut enim..."}/>
                    <Work title={"Counter"} description={" et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;