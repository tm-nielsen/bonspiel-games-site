import React from 'react'
import { Title } from '../Page Elements'
import '../../styling/bci.css'

const ShortBCIExplanation = () => {
  return <div className="explanation">
    <h2>The Short Version</h2>
    <p className="no-indent">
      <b><i>BCI</i></b> stands for <b>B</b>rain-<b>C</b>omputer <b>I</b>nterface, a device that can read the electricity in your brain.
      <br /><br />
      Think less mind reading and more like a fancy brain thermometer.
      <br /><br />
      We can use this rough idea of what's happening to determine if your brain seems more "off" or more "on" like a big button.
      <br /><br />
      <Title/> is a special game that can be played with your brain button, this is important for people that can't use a controller or keyboard to play games.
    </p>
  </div>
}

export default ShortBCIExplanation