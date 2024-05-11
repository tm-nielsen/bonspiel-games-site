import React from 'react';
import Header from '../components/Header';
import { Section, Title } from '../components/Page Elements';
import SteamWidget from '../components/SteamWidget';
import '../styling/home.css';

import trailerWebm from '../images/trailer.webm';
import trailerMp4 from '../images/trailer.mp4';
import gameplayWebm from '../images/gameplay.webm';
import gameplayMp4 from '../images/gameplay.mp4';
import mapGif from '../images/map select.gif';
import bciWebm from '../images/team_and_char.webm';
import bciMp4 from '../images/team_and_char.mp4';
import trainingIm from '../images/side-by-side-training.png';
import titleLogo from '../images/shiny logo.png';
// import trainingIm from '../images/side-by-side-training.png'

const Home = () => {
  return (
    <div className="home">
      <Header text={''} backgroundImage={titleLogo} id="header" />
      <Section>
        <video controls alt="gameplay trailer" className="trailer">
          <source src={trailerWebm} type="video/wemb" />
          <source src={trailerMp4} type="video/mp4" />
        </video>
      </Section>
      <Section>
        <p className="section-body">
          <Title /> is a first-of-its-kind video game, built from the ground up for accessibility including integrated control through Brain-Computer-Interface (BCI), switch-access or other input schemes in addition to traditional controllers.
        </p>
      </Section>
      <Section>
        {/* <h1 className="section-header">Curling in Space!?!</h1> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="showcase of gameplay"
          className="section-image left"
        >
          <source src={gameplayWebm} type="video/webm" aria-hidden/>
          <source src={gameplayMp4} type="video/mp4" aria-hidden/>
        </video>
        <p className="section-body">
          It’s a wacky mishmash of strategical sporting action that up to 4 players can enjoy. Slide ahead of your foes with a foolproof strategy. Weave each stone carefully down the ice to land victory in your orbit. Astound the crowd with explodinating, zappifying, and mind-discombobulating uber-cool super-stones! What’s that? Curling doesn’t have explosions? Sure, your primitive Earth curling might not, but <Title /> does!
        </p>
      </Section>

      <Section>
        <h1 className="section-header">Strange Places and Silly Faces</h1>
        <img src={mapGif} alt="showcase of the different maps" className="section-image" />
        <p className="section-body">
          The galaxy is a huge and wonderfully weird place. A zany lineup of competitors face off on all manner of slick sheets from across the universe! Try to hit the button on the tongue of a gigantic, homely space worm, or speed through the cosmos on the front of a comet!
        </p>
      </Section>

      <Section>
        <div className="right-container">
          <h1 className="section-header">Want More Humans?</h1>
        </div>
        <p className="section-body">
          Play locally or online with up to 4 players! Form the ultimate duo and take on the galaxy’s toughest competitors, or face off against each other in 1v1, 1v2, or 2v2 action!
        </p>
      </Section>

      <Section>
        <h1 className="section-header">Integrated BCI!</h1>
        <img
          src={trainingIm}
          alt="demonstration of the integrated BCI training scenario"
          className="section-image"
        />
        <p className="section-body">
          Brain-computer interface (BCI) technology enables individuals to control a computer using their thoughts. <Title /> is the first of its kind to enable full BCI integration directly within the game, including headset connection, calibration, training, and direct thought-to-action play. To support community and local play between all players, multiple BCI headsets can be used to control separate characters on the same local computer.
        </p>
      </Section>

      <Section>
        <div className="right-container">
          <h1 className="section-header">Switch Accessible Menus and UI</h1>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="users navigating switch accessible menus"
          className="section-image left"
        >
          <source src={bciWebm} type="video/webm" />
          <source src={bciMp4} type="video/mp4" />
        </video>
        <p className="section-body">
          Menus and UI systems designed for use via switch-scanning selection, compatible with simple BCI alternative access.
        </p>
      </Section>

      <div className="divider" />
      <Section>
        <div className="scroll-target" id="faq" />
        <h1 className="section-header">FAQ</h1>

        <h2 className="section-subheader">Is this Real?</h2>
        <p className="section-body-small">
          <b>Yes!</b>
          <br />
          But probably not in the way you might expect.
        </p>
        <p className="section-body-small indent">
          BCI technology has enourmous potential to ease the barriers that people face when trying to live in a world constructed without them in mind. In our project, we make use of this technology to enable the play of gamers with complex physical needs.
        </p>
        <p className="section-body-small indent">
          Amazing as this might be, the average gamer will not be affected by it's inclusion. There are various technical and design factors prohibiting the effective use of BCI outside of specifically engineered contexts. The value of BCI, as we have utilized it, is to provide alternative access to an art form we love.
        </p>
        <p className="section-body-small indent">
          That is to say, you will never play <i>Fifa</i> with a Brain-Computer Interface, but there is tremendous value in what the technology can provide to others (and science).
        </p>

        <h2 className="section-subheader">When Does it Come Out?</h2>
        <p className="section-body-small">
          <Title /> is launching into <b>Steam Early Access</b> later this year.
        </p>
        {/* <iframe src="https://store.steampowered.com/widget/2100970/" frameBorder="0" title="steam link" className="embed"/> */}
        {/* <iframe src="https://store.steampowered.com/widget/2100970/" frameborder="0" title="steam-link" className="embed"/> */}
        <SteamWidget />

        <h2 className="section-subheader">BCI?</h2>
        <p className="section-body-small">
          A Brain-Computer Interface, or BCI, is a device that reads the electrical activity of the brain through the scalp. <Title /> uses this technology to enable the play of gamers with limited reliable control of their muscles and bodies. For more information, see the{' '}
          <a href="/bci" className="link">
            about bci
          </a>{' '}
          page.
        </p>

        <h2 className="section-subheader">What about the Game?</h2>
        <p className="section-body-small">
          The focus of the project is providing an engaging experience for people that haven't been able to play games before. This is not a trivial task, and takes dev time away from the creation of additional features and content.
        </p>
        <p className="section-body-small">
          <Title /> is going into Early Access when it is primarilly to facilitate the informed development of the accessibility features before moving on to content explansion later in development. As a result, the project and development may be different in scope than players may expect based on contemporaries.
        </p>
      </Section>

      <div className="divider" />
      <Section>
        <div className="scroll-target" id="team" />
        <h1 className="section-header">The Team</h1>
        <p className="section-body-small">
          We are a small collective of artists, musicians and programmers that seek to bring the medium of video games to those who might otherwise be unable to experience it.
        </p>
        <p className="section-body-small">
          Through accessibility led design and cutting-edge technology, we want to expand the definition of who gets to play.
        </p>
      </Section>
    </div>
  );
};

export default Home;
