import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import '../styling/home.css'
import gameplayGif from '../images/gameplay.gif'
import mapGif from '../images/map select.gif'
import titleLogo from '../images/shiny logo.png'
// import trainingIm from '../images/side-by-side-training.png'

const Home = () => {
    return <div className="home">
        <Header text={''} backgroundImage={titleLogo}/>
        <Section  component={
            <div className="section">
                <h1 className="section-header">Section 1</h1>
                <img src={gameplayGif} alt="gameplay gif" className="section-image" />
                <p className="section-text">
                    <b><i>Curl!</i></b> is a first-of-tis-kind video game, built from the ground up for accessibility including integrated control through Brain-Computer-Interface (BCI), switch-access or other input schemes in addition to traditional controllers
                </p>
            </div>
        }/>
        <Section  component={
            <div className="section">
                <h1 className="section-header">The Game</h1>
                <img src={mapGif} alt="map selection gif" className="section-image" />
                <p className="section-text">
                    This is section 2, where I will talk briefly about the maps
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt obcaecati odio, veritatis omnis nam quidem! Maxime, iusto consequuntur doloremque deserunt architecto aliquid, accusamus similique voluptates dolor deleniti reprehenderit est nemo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel ducimus maiores. Sed excepturi culpa expedita eaque provident ratione aut vero iure nostrum neque doloribus error suscipit, modi earum ducimus!
                </p>
            </div>
        }/>
        {/* <Section backgroundColor='#242027' component={
            <div className="section">
                <h1 className="section-header">Section 3</h1>
                <img src={trainingIm} alt="gameplay gif" className="section-image" />
                <p className="section-text">
                    This is section 1, where I will talk about all the training I guess? 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, iste doloremque! Sed voluptas cumque ad? Quaerat, aperiam! In tenetur quia qui, iste animi, quod cumque quasi commodi labore exercitationem reiciendis!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis excepturi, quisquam iure iusto aperiam enim molestiae perspiciatis officia incidunt et sed id architecto sapiente earum temporibus quis esse sit!
                </p>
            </div>
        }/> */}
    </div>
}

export default Home