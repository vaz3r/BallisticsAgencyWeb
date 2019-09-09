import React from 'react';
import './About.css';
import SectionIcon from './sectionicon.svg'
import SectionVector from './sectionvector.svg'
import InboundIcon from './inbound.svg'
import WebDevIcon from './webdev.svg'
import MobileDevIcon from './mobiledev.svg'
import DesktopDevIcon from './desktopdev.svg'
import DevComIcon from './devcom.svg'
import ConversionIcon from './conversion.svg'
import SeoIcon from './seo.svg'
import SocialIcon from './social.svg'

const About = () => {
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
  
    window.addEventListener('scroll', e => handleNavigation(e));

    const handleNavigation = (e) => {
        // let x = document.getElementsByClassName("CatOne");
        let section2 = document.getElementById("section-2");
        let sectionTwo = document.getElementById("sectionTwo");

        let section3 = document.getElementById("section-3");
        let sectionThree = document.getElementById("sectionThree");


        if (isScrolledIntoView(section2)) {
            sectionTwo.style.display = "flex";
        }

        if (isScrolledIntoView(section3)) {
            sectionThree.style.display = "flex";
        }

        // var i;

        // for (i = 0; i < x.length-1; i++) {
        //     if (isScrolledIntoView(x[i])) {
        //         if (x[i] !== undefined) {
        //             try {
        //                 x[i].classList.Add("animated");
        //             } catch {
        //                 console.log(x[i]);
        //             }
        //         }
        //     } else {
        //         x[i].classList.Remove("animated");
        //     }
        // }
    };

    return (
        <main>
            <section>
                <div className="SectionHead">
                    <figure>
                        <img src={SectionIcon}></img>
                    </figure>
                    <h2>Lors de notre prise de contact nous savons</h2>
                </div>

                <div id="section-1" className="SectionContent">
                    <article className="animated bounceInRight">
                        <figure>01</figure>
                        <div>
                            <h3>Comprendre votre métier et environnement</h3>
                            <p>Comprendre votre environnement globale; que vous soyer producteur, distributeur ou prestataire de services à valeur ajoutée, nous comprenons votre métier.</p>
                        </div>
                    </article>
                    <article className="animated bounceInLeft Delay5">
                        <figure>02</figure>
                        <div>
                            <h3>Cerner le besoin réel</h3>
                            <p>A travers une écoute active nous cernons avec précision
    et décortiquons étape par étape votre besoin et
    cela peu importe votre secteur d’activité; 
    agroalimentaire, pharmaceutique, automotive, high-tech,….</p>
                        </div>
                    </article>
                    <article className="animated bounceInRight Delay10">
                        <figure>03</figure>
                        <div>
                            <h3>Détecter  toute problématique non apparente</h3>
                            <p>Vous pensez nous avoir tout dit !? Notre expérience 
    (autant en BtoB qu’en BtoC) nous à habitué à creuser 
    au-delà du non dit pour détecter tout élément 
    qui vous aura échappé.</p>
                        </div>
                    </article>
                </div>
        </section>
            <section id="section-2">
                <div className="SectionHead">
                    <figure>
                        <img src={SectionIcon}></img>
                    </figure>
                    <h2>Lors de l’élaboration d’une proposition nous savons</h2>
                </div>

                <div id="sectionTwo" className="SectionContent Hidden">
                    <article className="animated bounceInRight">
                        <figure>04</figure>
                        <div>
                            <h3>Considérer vos moyes</h3>
                            <p>Planifier un projet en optimisant vos ressources.</p>
                        </div>
                    </article>
                    <article className="animated bounceInLeft Delay5">
                        <figure>05</figure>
                        <div>
                            <h3>Prioriser vos impératifs</h3>
                            <p>Concevoir un plan qui valorise et ne néglige aucun de vos besoin.</p>
                        </div>
                    </article>
                    <article className="animated bounceInRight Delay10">
                        <figure>06</figure>
                        <div>
                            <h3>Réflexion stratégique totale</h3>
                            <p>Traduire l’ensemble des éléments que nous avons récolté en 
    langage technique et consultons notre équipe d’experts et
    de consultants pour solutionner scientifiquement 
    toutes problémati ques exposées.</p>
                        </div>
                    </article>
                    <article className="animated bounceInLeft Delay1">
                        <figure>07</figure>
                        <div>
                            <h3>Innover</h3>
                            <p>Mettre à votre disposition les acquis de notre 
    veille stratégique et technologique permanentes.</p>
                        </div>
                    </article>
                    <article className="animated bounceInRight Delay2">
                        <figure>08</figure>
                        <div>
                            <h3>Adapter nos solutions à la réalité du marché</h3>
                            <p>Valider ou écarter avec pragmatisme 
    toutes solutions opérationnelles adaptable 
    ou non sur terrain.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section id="section-3">
                <div className="SectionHead">
                    <figure>
                        <img src={SectionIcon}></img>
                    </figure>
                    <h2>Lors de la présentation de nos propositions savons</h2>
                </div>

                <div id="sectionThree" className="SectionContent Hidden">
                    <article className="animated bounceInRight">
                        <figure>09</figure>
                        <div>
                            <h3>Exposer en détailles les solutions proposée</h3>
                            <p>Vous faire comprendre nos décisions et les résultats que nous
escomptons afin que vous puissiez mieux décider.</p>
                        </div>
                    </article>
                    <article className="animated bounceInLeft Delay5">
                        <figure>10</figure>
                        <div>
                            <h3>Garantir une absolu confidentialité</h3>
                            <p>Protéger vos intérêts et vous garantir la confidentialité la plus totale 
est pour nous une évidence incontestable.</p>
                        </div>
                    </article>
                    <article className="animated bounceInRight Delay10">
                        <figure>11</figure>
                        <div>
                            <h3>Garantir un support</h3>
                            <p>Mettre gratuitement à votre disposition notre expertise et vous 
assurer un support si vous souhaitez réaliser vos projets seul.</p>
                        </div>
                    </article>
                </div>
            </section>
                
            <section className="VectorSection">
                <div className="ServicesHeader">
                    <figure>
                        <img src={SectionVector}></img>
                    </figure>
                    <h3>Gérer le projet sur tous ses aspects opérationnels</h3>
                </div>
                <div className="ServicesContainer">
                    <article>
                        <figure>
                            <img src={InboundIcon}></img>
                        </figure>
                        <h4>Inbound Marketing</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={WebDevIcon}></img>
                        </figure>
                        <h4>Développement Web</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={MobileDevIcon}></img>
                        </figure>
                        <h4>Développement Mobile</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={DesktopDevIcon}></img>
                        </figure>
                        <h4>Développement Desktop</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={DevComIcon}></img>
                        </figure>
                        <h4>Développement commercial BtoB</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={ConversionIcon}></img>
                        </figure>
                        <h4>Conversion Prospect/Client</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={SeoIcon}></img>
                        </figure>
                        <h4>Référencement SEO - SEA</h4>
                    </article>
                    <article>
                        <figure>
                            <img src={SocialIcon}></img>
                        </figure>
                        <h4>Community management et médias sociaux</h4>
                    </article>
                </div>
                <h3>Il n’y a rien de technique que nous ne sachons faire !</h3>
            </section>
        </main>
        
    );
};

export default About;