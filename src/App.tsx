import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./main/Nav/Main";
import Skills from "./Skils/Skills";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
