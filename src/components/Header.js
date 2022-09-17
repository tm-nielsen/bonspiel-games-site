import React, {useState, useEffect, useRef} from 'react'
import '../styling/header.css'

const Header = ({title, backgroundImage, id}) => {
    const [opacity, setOpacity] = useState(1)

    const ref = useRef(null)

    useEffect(() => {
        const height = ref.current.clientHeight
        const range = 100
        const offset = height / 2

        const onScroll = e => {
            let calc = 1 - (window.scrollY - offset + range) / range

            if(calc > 1)
                calc = 1
            else if(calc < 0)
                calc = 0

            setOpacity(calc)
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    })

  return <div ref={ref} className="header" style={{opacity: opacity}} id={id}>
    <div className="width-container">
        {backgroundImage? <img src={backgroundImage} alt="header" />
        : <h1>{title}</h1>}
    </div>
  </div>
}

export default Header