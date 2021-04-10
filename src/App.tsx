import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Nav/Main";
import Skills from "./skils/Skills";
import Works from "./works/Works";
import {Contacts} from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works />
            <Contacts />
        </div>
    );
}

export default App;
