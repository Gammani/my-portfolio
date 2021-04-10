import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div>
                <h4> Тукарев Алексей</h4>
            </div>
            <div className={style.contacts}>
                <a href={""} rel={"тут"}>
                    <img src={""} alt={"instagram"}/>
                </a>
                <a href={""} rel={"должна"}>
                    <img src={""} alt={"github"}/>
                </a>
                <a href={""} rel={"быть"}>
                    <img src={""} alt={"telegram"}/>
                </a>
                <a href={""} rel={"инфа"}>
                    <img src={""} alt={"linkedin"}/>
                </a>
            </div>
            <h5>© 2021 All rights reserved</h5>
        </div>
    )
}

export default Footer;