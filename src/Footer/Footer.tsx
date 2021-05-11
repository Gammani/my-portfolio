import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {

    return (
        <div className={style.footerBlock} id={"contacts"}>
            <div className={style.contacts}>
                <a href={"https://www.instagram.com/"}>
                    <img src={"https://i.pinimg.com/474x/58/a2/be/58a2bec02ecb40d12e507e2a212c46c6.jpg"} alt={"instagram"} className={style.image}/>
                </a>
                <a href={"https://github.com/Oreda-Z"}>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtNE473tBKNyv-qz_oG-E9hlT9vIw4oqcQ8f9dMAxekDzinxzBPpqNdTybp45yAfZvEg&usqp=CAU"} alt={"github"} className={style.image}/>
                </a>
                <a>
                    <img src={"https://www.vectorico.com/download/social_media/Telegram-Icon.jpg"} alt={"telegram"} className={style.image}/>
                </a>
                <a>
                    <img src={"https://www.vectorico.com/download/social_media/LinkedIn-Icon-squircle.jpg"} alt={"linkedin"} className={style.image}/>
                </a>
            </div>
            <h5>© 2021 All rights reserved</h5>
        </div>
    )
}

export default Footer;