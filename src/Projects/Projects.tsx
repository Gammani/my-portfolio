import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "./../common/styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../common/title/Title";
import todoImage from "./../assets/image/todoList.jpg";
import socNetImage from "./../assets/image/socNet.jpg";
import counterImage from "./../assets/image/counter.jpg";

function Projects() {
    const socNet = {
        backgroundImage: `url(${socNetImage})`,
    };
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    return (
        <div className={style.projectsBlock} id={"projects"}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <div className={style.projects}>
                    <Project link={"https://oreda-z.github.io/socnet/"} style={socNet} title={"Socnet"} description={"Социальная сесть. Простой интерфейс с взаимодействием API"}/>
                    <Project link={"https://oreda-z.github.io/todolist/"} style={todoList} title={"TodoList"} description={"Список дел или список задач"}/>
                    <Project link={"https://oreda-z.github.io/super-counter/"} style={counter} title={"Counter"} description={"Счетчик с настраиваемыми параметрами"}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;