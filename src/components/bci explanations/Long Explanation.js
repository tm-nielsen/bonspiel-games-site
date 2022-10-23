import React from 'react'
import { Title } from '../Page Elements'

const LongBCIExplanation = () => {
  return <div className="explanation">
    <h2 className="explanation-header">As Much Detail as I can Muster</h2>
    <p className="explanation-body">
      This section assumes you have seen 'The Readable Version' to avoid repitition and will focus on the use of BCI technology with <Title/>. If you want more info on BCI technology itself, <a href="https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface" target="_blank" rel="noreferrer">the Wikipedia article</a> will serve you better.
    </p>
    <h5>Process</h5>
    <p className="explanation-body indent">
      Machine learning on brain signls, process, clarity and use.
    </p>
    <h5>Control Methods</h5>
    <p className="explanation-body indent">
      Control methods: switch access, p300, clocks, fill bar
    </p>
    <p className="explanation-body indent">
      Menus/ UI design. For children, big clear text, contrast, focus on limited number of elements
    </p>
    <h5>Considerations of Practical Use</h5>
    <p className="explanation-body indent">
      Difficulty of focus and continously performing input: the input gets harder to do as you get better at it as the pattern changes
    </p>
    <p className="explanation-body indent">
      Trade-offs for conventional players
    </p>
  </div>
}

export default LongBCIExplanation