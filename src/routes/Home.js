import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import '../styling/home.css'
import gameplayGif from '../images/gameplay.gif'
import mapGif from '../images/map select.gif'
import bciGif from '../images/team_and_char.gif'
import trainingIm from '../images/side-by-side-training.png'
import titleLogo from '../images/shiny logo.png'
// import trainingIm from '../images/side-by-side-training.png'

const Home = () => {
    return <div className="home" id="home">
        <Header text={''} backgroundImage={titleLogo}/>
        <Section>
                <p className="section-text">
                    <b><i>Curl!</i></b> is a first-of-tis-kind video game, built from the ground up for accessibility including integrated control through Brain-Computer-Interface (BCI), switch-access or other input schemes in addition to traditional controllers
                </p>
        </Section>
        <div className="divider"/>
        <Section>
            <h1 className="section-header">Curling in Space!?!</h1>
            <img src={gameplayGif} alt="gameplay" className="section-image" />
            <p className="section-text">
                It’s a wacky mishmash of strategical sporting action that up to 4 players can enjoy. Slide ahead of your foes with a foolproof strategy. Weave each stone carefully down the ice to land victory in your orbit. Astound the crowd with explodinating, zappifying, and mind-discombobulating uber-cool super-stones! What’s that? Curling doesn’t have explosions? Sure, your primitive Earth curling might not, but <b><i>Curl!</i></b> does!
            </p>
        </Section>
        
        <Section>
            <h1 className="section-header">Strange Places and Silly Faces</h1>
            <img src={mapGif} alt="map selection" className="section-image" />
            <p className="section-text">
                The galaxy is a huge and wonderfully weird place. A zany lineup of competitors face off on all manner of slick sheets from across the universe! Try to hit the button on the tongue of a gigantic, homely space worm, or speed through the cosmos on the front of a comet!
            </p>
        </Section>
        
        <Section>
            <h1 className="section-header">Want More Humans?</h1>
            <p className="section-text">
                Play locally or online with up to 4 players! Form the ultimate duo and take on the galaxy’s toughest competitors, or face off against each other in 1v1, 1v2, or 2v2 action!
            </p>
        </Section>
        
        <div className="divider"/>
        <Section>
            <h1 className="section-header">Integrated BCI!</h1>
            <img src={trainingIm} alt="bci training" className="section-image" />
            <p className="section-text">
                Brain-computer interface (BCI) technology enables individuals to control a computer using their thoughts. <b><i>Curl!</i></b> is the first of its kind to enable full BCI integration directly within the game, including headset connection, calibration, training, and direct thought-to-action play. To support community and local play between all players, multiple BCI headsets can be used to control separate characters on the same local computer.
            </p>
        </Section>
        
        <Section>
            <h1 className="section-header">Switch Accessibe Menus and UI</h1>
            <img src={bciGif} alt="bci menu" className="section-image"/>
            <p className="section-text">
                Menus and UI systems designed for use via switch-scanning selection, compatible with simple BCI alternative access.
            </p>
        </Section>
        
        
        <div className="divider"/>
        <Section>
            <div className="scroll-target" id="faq"/>
            <h1 className="section-header">FAQ</h1>
            <p className="section-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur fuga explicabo, ea non soluta vel adipisci porro natus impedit, earum et, eum animi quidem unde recusandae. Quos eaque necessitatibus rerum!
            </p>
        </Section>
        

        
        <div className="divider"/>
        <Section>
            <div className="scroll-target" id="team"/>
            <h1 className="section-header">The Team</h1>
            <p className="section-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, minima harum! Pariatur aperiam numquam distinctio reiciendis error nesciunt aut aspernatur tempore porro totam, sit illo provident odit asperiores ex quos!
            </p>
        </Section>
        
    </div>
}

export default Home