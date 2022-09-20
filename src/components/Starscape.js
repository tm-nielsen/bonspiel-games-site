import React, {useRef, useEffect} from 'react'
import seedrandom from 'seedrandom'
// import gsap from 'gsap'
import '../styling/starscape.css'

const Starscape = ({densityRatio = 0.5, sizeLimit = 5, defaultAlpha = 0.5}) => {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const starsRef = useRef(null)

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d')

    const random = (rng, min, max, step) => {
      var rawval = Math.ceil(min + (max - min) * rng())
      return Math.ceil(rawval / step) * step
    }

    const LOAD = () => {
      const VMIN = Math.min(window.innerHeight, window.innerWidth)
      const STAR_COUNT = Math.floor(VMIN * densityRatio)
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight

      var rng = new seedrandom('seed')
      starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
        x: random(rng, 0, window.innerWidth, 1),
        y: random(rng, 0, window.innerHeight, 1),
        size: random(rng, 1, sizeLimit, 1),
        scale: 1,
        alpha: random(rng, 0.1, defaultAlpha, 0.1),
      }))
    }

    const RENDER = () => {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      )
      starsRef.current.forEach(star => {
        contextRef.current.fillStyle = `hsla(0, 100%, 100%, 1)`
        contextRef.current.beginPath()
        contextRef.current.arc(star.x, star.y, star.size / 2, 0, Math.PI * 2)
        contextRef.current.fill()
      })
    }

    window.addEventListener("resize", ()=>{
      if(canvasRef === null)
        return

      LOAD()
      RENDER()
    }, false)

    LOAD()
    RENDER()
  }, [defaultAlpha, densityRatio, sizeLimit])

  

  return <canvas ref={canvasRef}/>
}

export default Starscape