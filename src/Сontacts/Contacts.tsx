import React from "react";
import style from './Contacts.module.css';


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Contacts</h3>
                </div>
                <div className={style.form}>
                    <form>
                        <div>
                            <input placeholder={"ваше имя"} name={""} id={""} type={"text"}/>
                        </div>
                        <div>
                            <input placeholder={"ваш номер"} name={""} id={""} type={"text"}/>
                        </div>
                        <div>
                            <textarea placeholder={"комментарии"} name={""} id={""} cols={20} rows={5}/>
                        </div>
                        <div className={style.button}>
                            <div>
                                <button>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}