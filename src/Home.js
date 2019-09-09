import React, { useState, useEffect } from 'react';
import './Home.css';
import strategy from './strategy.svg';
import services from './services.svg';
import movie from './media.mp4'
import clock from './clock.svg'
import email from './email.svg'
import phone from './phone.svg'

function Home() {
  const [SlideState, setSlideState] = useState(false);

  useEffect(() => {
    document.getElementById("videoPlayer").play();
  }, []);

  let prev = window.scrollY;
  //window.addEventListener('scroll', e => handleNavigation(e));


  const handleNavigation = (e) => {
    const window = e.currentTarget;

    let pages = ['#pageOne', '#pageTwo', '#pageThree'];
    let currentPage = window.location.hash;
    console.log(currentPage);

    if (prev > window.scrollY) {
        console.log("scrolling up");

        switch(currentPage) {
          case '#pageThree':
            window.location.hash = '#pageTwo';
            currentPage = "#pageTwo";
          case '#pageTwo':
            window.location.hash = '#pageOne';
            currentPage = "#pageOne";
          case '':
            window.location.hash = '#pageOne';
        }
    } else if (prev < window.scrollY) {
        console.log("scrolling down");

        switch(currentPage) {
          case '#pageOne':
            window.location.hash = '#pageTwo';
          case '#pageTwo':
            window.location.hash = '#pageThree';
          case '':
            window.location.hash = '#pageTwo';
        }
    }
    
    prev = window.scrollY;
  };
  
  const ToggleSlide = () => {
    if (SlideState === false) {
      setSlideState(true);
    } else {
      setSlideState(false);
    }
  }

  const Slide = () => {
    if (SlideState === false) {
      return (
        <section id="pageTwo" className="SlideSection animated bounceInRight">
            <div className="SlideInfo">
              <p>Community Management</p>
              <p>Référencement naturelle et publicitaire</p>
              <p>Développement web</p>
              <p>Développement mobile</p>
              <p>Affichage Cible</p>
              <p>Audit Web</p>
              <p>Etude, analyse et sondage</p>
              <p>Conseil</p>
              <h2>Services de base</h2>
            </div>
            <div className="SlideLinks" onClick={() => ToggleSlide()}>
              <div>
                <figure>
                  <img src={strategy}></img>
                </figure>
                <h2>Stratégies</h2>
              </div>
            </div>
          </section>
      );
    } else {
      return (
        <section id="pageTwo" className="SlideSection SlideReverse animated bounceInRight">
          <div className="SlideInfo">
            <p>Inbound Marketing</p>
            <p>Outbound Marketing</p>
            <p>Social Media Strategy</p>
            <p>Communication de crise</p>
            <p>ReMarketing</p>
            <p>Notoriété et image de marque</p>
            <p>eProspection</p>
            <h2>Stratégies</h2>
          </div>
          <div className="SlideLinks LinkReverse"  onClick={() => ToggleSlide()}>
            <div>
              <figure>
                <img src={services}></img>
              </figure>
              <h2>Services de base</h2>
            </div>
          </div>
        </section>
      );
    }
  }

  return (
    <main>
      <main id="pageOne">
        <div className="Header">
          <div className="videoContainer">
            <video id="videoPlayer" autoPlay={true} loop={true}>
              <source src={movie} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="Cta">
            <div className="CtaText">
              <h1>Ne négligez pas le facteur digital dans vos équations stratégiques</h1>
              <p>L'optimisation de vos performances est notre metier</p>
            </div>
            <div className="CtaBtn">
              <a href="#">Engagez nous</a>
            </div>
          </div>
        </div>
      </main>

      <Slide></Slide>

      <section id="pageThree" className="ContactSection">
        <h1>Contactez nous</h1>
        <div className="ContactLayout">
          <div className="LeftPanel">
            <div className="NameEmail">
              <input type="text" placeholder="Nom"></input>
              <input type="email" placeholder="Email"></input>
            </div>
            <input type="text" placeholder="Motif/Sujet"></input>
            <textarea placeholder="Expliquez nous votre besoin"></textarea>
            <a href="#">Envoyer</a>
          </div>

          <div className="RightPanel">
            <div className="CallbackPanel">
              <input type="text" placeholder="N° de Telephone"></input>
              <a href="#">Être Recontacte</a>
              <p>L'un de nos agents vous recontactera dans les 30 minutes maximum</p>
            </div>
            <div className="ContactInfo">
              <div className="ContactData">
                <figure>
                  <img src={clock}></img>
                </figure>
                <p>Dimanche à Jeudi / 8:00 à 17:00 </p>
              </div>
              <div className="ContactData">
                <figure>
                  <img src={phone}></img>
                </figure>
                <p>0770 00 00 00</p>
              </div>
              <div className="ContactData">
                <figure>
                  <img src={email}></img>
                </figure>
                <p>contact@ballistics.agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
