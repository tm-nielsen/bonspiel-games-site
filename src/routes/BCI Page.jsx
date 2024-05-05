import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { BiShapeTriangle, BiShapeSquare, BiShapePolygon } from 'react-icons/bi';
import Header from '../components/Header';

import shortExplanation from '../bci_explanations/short_explanation.md?raw'
import mediumExplanation from '../bci_explanations/medium_explanation.md?raw'
import longExplanation from '../bci_explanations/long_explanation.md?raw'
import '../styling/bci.css';

const explanations = [
  {
    header: 'The Short Version',
    content: shortExplanation
  },
  {
    header: 'The Readable Version',
    content: mediumExplanation
  },
  {
    header: 'As Much Detail as I can Muster',
    content: longExplanation
  }
]

const BCIPage = () => {
  const [selectedExplanation, setSelectedExplanation] = useState(0);

  const GetExplanation = () => {
    const {header, content} = explanations[selectedExplanation]
    const options = {
      overrides: {a: {props: {target: '_blank'}}}
    }
    if (selectedExplanation === 0)
      options.overrides.p = {props: {className: 'no-indent'}}

    return <div className="explanation">
      <h2 className="bci-header">{header}</h2>
      <Markdown options={options}>{content}</Markdown>
    </div>
  };

  const GetButtonClass = (index) =>
    selectedExplanation === index ? 'explanation-option-selected' : 'explanation-option';

  return (
    <div>
      <Header className="" title={'ABOUT BCI'} />
      <br />
      <br />
      <br />
      <br />
      <div className="option-container">
        <BiShapeTriangle className={GetButtonClass(0)} onClick={() => setSelectedExplanation(0)} />
        <BiShapeSquare className={GetButtonClass(1)} onClick={() => setSelectedExplanation(1)} />
        <BiShapePolygon className={GetButtonClass(2)} onClick={() => setSelectedExplanation(2)} />
      </div>
      <div className="width-container-flat">{GetExplanation()}</div>
      
      <div className="width-container-flat">
        <div className="explanation" style={{minHeight: 'auto'}}>
          <h2 className="bci-header">Unity Plugin</h2>
          <p className="no-indent">
            Integration with Emotiv BCI devices is wrapped into a custom Unity package that is now open source and publicly available:{' '}
            <a href="https://github.com/cm-nielsen/CortexPlugin"
              target="_blank"
              rel="noreferrer"
            >
              PLUGIN
            </a>
            {", "} 
            <a
              href="https://bonspiel-games.gitbook.io/cortex-unity-plugin/"
              target="_blank"
              rel="noreferrer"
            >
              DOCUMENTATION
            </a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default BCIPage;
