import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./main/Nav/Main";
import Skills from "./Skils/Skills";
import Works from "./Works/Works";
import {Contacts} from "./Сontacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
