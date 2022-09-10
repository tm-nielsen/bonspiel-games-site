import React from "react";
import Section from "../components/Section";
import '../styling/home.css'
import gameplayGif from '../images/gameplay.gif'
import mapGif from '../images/map_select.gif'
// import trainingIm from '../images/side-by-side-training.png'

const Home = () => {
    return <div className="home">
        <Section backgroundColor='rgba(52, 52, 60, 0.1)' component={
            <div className="section">
                <h1 className="section-header">Section 1</h1>
                <img src={gameplayGif} alt="gameplay gif" className="section-image" />
                <p className="section-text">
                    This is section 1, where I will talk about all the gameplay and stuff. General explanation and all that good junk
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, iste doloremque! Sed voluptas cumque ad? Quaerat, aperiam! In tenetur quia qui, iste animi, quod cumque quasi commodi labore exercitationem reiciendis!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nobis excepturi, quisquam iure iusto aperiam enim molestiae perspiciatis officia incidunt et sed id architecto sapiente earum temporibus quis esse sit!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ea nostrum, ipsum quam rem tempore ipsa natus quisquam voluptas reprehenderit culpa soluta maxime, inventore quia commodi, ratione dolore aperiam porro.
                </p>
            </div>
        }/>
        <Section backgroundColor='rgba(52, 52, 60, 0.1)' component={
            <div className="section">
                <h1 className="section-header">Section 2</h1>
                <img src={mapGif} alt="map selection gif" className="section-image" />
                <p className="section-text">
                    This is section 2, where I will talk briefly about the maps
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
        <p className="home-desc">Test paragraph</p>
    </div>
}

export default Home