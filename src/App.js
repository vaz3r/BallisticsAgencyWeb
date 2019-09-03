import React from 'react';
import officiallogo from './logopng.jpg';
import './App.css';
import movie from './4K.mp4'

function App() {
  return (
    <main>
      <main>
        <header>
          <figure>
            <img src={officiallogo}></img>
          </figure>
          <div className="MenuElements">
            <a href="#" className="MenuItem ItemSpace">L'agence</a>
            <a href="#" className="MenuItem ItemSpace">Expertise</a>
            <a href="#" className="MenuItem ItemSpace">Confidentialité</a>
            <a href="#" className="CtaMenu">Testez nous</a>
          </div>
        </header>
        <div className="Header">
          <div className="videoContainer">
            <video autoPlay={true} loop={true}>
              <source src={movie} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="Cta">
            <div className="CtaText">
              <h1>Ne négligez pas le facteur numérique dans vos équations stratégiques</h1>
              <p>L'optimisation de vos performances est notre metier</p>
            </div>
            <div className="CtaBtn">
              <a href="#">Engagez nous</a>
            </div>
          </div>
        </div>
      </main>
      <section className="SlideSection">

      </section>
    </main>
  );
}

export default App;
