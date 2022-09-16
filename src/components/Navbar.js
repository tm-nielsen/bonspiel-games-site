import React, {useState, useEffect, useRef} from "react";
// import { Link } from "react-router-dom";
import '../styling/navbar.css'
import logo from '../images/favicon.ico'

const Navbar = () => {
    const [opacity, setOpacity] = useState(0)

    const ref = useRef(null)

    useEffect(() => {
        const height = ref.current.clientHeight
        console.log('height: ', height)
        const range = 100
        const offset = height / 2

        const onScroll = e => {
            let calc = (window.scrollY - offset + range) / range

            if(calc > 0.8)
                calc = 0.8
            else if(calc < 0)
                calc = 0

            setOpacity(calc)
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    })

    return (
    <div className="navbar" ref={ref} >
        <div className="nav-bg" style={{opacity: opacity}}/>
        <div className="width-container">
            <div className="flex-container">
            <a href='/#home' className="nav-main">
                <img src={logo} alt="logo" className="nav-logo" />
                <h1 className="nav-main">Bonspiel Games</h1>
            </a></div>
            <div className="flex-container">
            <nav>
                <ul className="nav-list">
                    <li>
                        <a href='/#home' className="nav-link">
                            Curl
                        </a>
                    </li>
                    <li>
                    <a href='/#faq' className="nav-link">
                        FAQ
                    </a>
                    </li>
                    <li>
                    <a href='/#team' className="nav-link">
                        Team
                    </a>
                    </li>
                    <li>
                    <a href='bci' className="nav-link">
                        About BCI
                    </a>
                    </li>
                </ul>
            </nav></div>
        </div>
    </div>
    )
}

export default Navbar