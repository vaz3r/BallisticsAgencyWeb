import React, { useState, useEffect } from 'react';
import './Main.css';
import officiallogo from './logopng.jpg';
import { Route, NavLink, HashRouter, BrowserRouter, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

const Main = () => {
    return (
        <BrowserRouter>
            <main>
                <header>
                    <figure>
                        <img src={officiallogo}></img>
                    </figure>
                    <div className="MenuElements">
                        <Link to="/about" className="MenuItem ItemSpace">L'agence</Link>
                        <a href="#" className="MenuItem ItemSpace">Expertise</a>
                        <a href="#" className="MenuItem ItemSpace">Confidentialité</a>
                        <a href="#" className="CtaMenu">Testez nous</a>
                    </div>
                </header>

                <div className="PageContent">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </main>
        </BrowserRouter>
    );
};

export default Main;