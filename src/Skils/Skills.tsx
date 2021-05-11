import React from "react";
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import Title from "../common/title/Title";
import javascriptImage from "../assets/image/javascript.png";
import tsImage from '../assets/image/ts.png';
import htmlImage from '../assets/image/html.png';
import cssImage from '../assets/image/css.png';
import scssImage from '../assets/image/scss.png';
import reactImage from '../assets/image/react.png';
import reduxImage from '../assets/image/redux.png';
import gitImage from '../assets/image/git.png';
import storybookImage from '../assets/image/storybook.png';
import axiosImage from '../assets/image/axios.png';

function Skills() {
    const javascript = {
        backgroundImage: `url(${javascriptImage})`,
    }
    const ts = {
        backgroundImage: `url(${tsImage})`,
    }
    const html = {
        backgroundImage: `url(${htmlImage})`,
    }
    const css = {
        backgroundImage: `url(${cssImage})`,
    }
    const scss = {
        backgroundImage: `url(${scssImage})`,
    }
    const react = {
        backgroundImage: `url(${reactImage})`,
    }
    const redux = {
        backgroundImage: `url(${reduxImage})`,
    }
    const git = {
        backgroundImage: `url(${gitImage})`,
    }
    const storybook = {
        backgroundImage: `url(${storybookImage})`,
    }
    const axios = {
        backgroundImage: `url(${axiosImage})`,
    }
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"My Skills"} />
                <div className={style.skills} >
                    <Skill title={"Javascript"} style={javascript}/>
                    <Skill title={"Typescript"} style={ts}/>
                    <Skill title={"Html"} style={html}/>
                    <Skill title={"Css"} style={css}/>
                    <Skill title={"Scss"} style={scss}/>
                    <Skill title={"React"} style={react}/>
                    <Skill title={"Redux"} style={redux}/>
                    <Skill title={"Git"} style={git}/>
                    <Skill title={"Storybook"} style={storybook}/>
                    <Skill title={"Axios"} style={axios}/>
                </div>
            </div>
        </div >
    )
}

export default Skills;