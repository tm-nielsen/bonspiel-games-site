import React from 'react'

const MidBCIExplanation = () => {
  return <div className="explanation">
    <h2 className="explanation-header">The Readable Version</h2>
    <p className="explanation-body indent">
      A <b>B</b>rain-<b>C</b>omputer <b>I</b>nterface is a device that can read and translate the electrochemical signals of the brain into a computer legible format. These devices are worn on the head, with multiple electrodes placed around the scalp. With current technology, the limited clarity and incredible nuance of these signals severely limits the specificity or validity of their possible interpretations. However, it is reasonable to categorize signals coming from the device into a small set of predefined general groups using machine learning. These categorical groups can then be used to detect the rough identity of the current signal.
    </p>
    <p className="explanation-body indent">
      In practice, the time demand of model training and signal quality of consumer grade devices makes the definition of more than two clear groups impractical. Thus, we are left with an incoming signal that can be identified as belonging to signal group A or signal group B with a reasonable rate of error. Redefining these generic groups as "off" or on"; "idle" or "active", we can treat the overall system, following setup, as a single button. This clearly defined one button gameplay allows for a more straightforward design constraint around which the game must be built.
    </p>
    <h5>Considerations</h5>
    <p className="explanation-body indent">
      Of course, this method of input, though very cool, is not practical for someone able to use traditional method or other alternative access methods. This project aims to bring gaming to a population for which solutions have not been found, as any gamer can operate a Brain-Computer Interface without the need for motor function.
    </p>
  </div>
}

export default MidBCIExplanation