import React from "react";
import style from './Main.module.scss';
import styleContainer from './../../common/styles/Container.module.css';
import Particles from "react-particles-js";
import {particlesOptions} from "../../particles";
import photo from "../../assets/image/photo2.jpg";

function Main() {
    return (
        <div className={style.mainBlock} id={"main"}>
            <Particles className={style.particles} height={"300vh"} params={particlesOptions}/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Aleksey Tukarev</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}>
                    <img className={style.f} src={photo}/>
                </div>
            </div>
        </div>
    )
}

export default Main;