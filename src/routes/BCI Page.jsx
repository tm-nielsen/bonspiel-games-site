import React, { useState } from 'react';
import { BiShapeTriangle, BiShapeSquare, BiShapePolygon } from 'react-icons/bi';
import Header from '../components/Header';
import ShortBCIExplanation from '../components/bci explanations/Short Explanation';
import MidBCIExplanation from '../components/bci explanations/Mid Explanation';
import LongBCIExplanation from '../components/bci explanations/Long Explanation';
import '../styling/bci.css';

const BCIPage = () => {
  const [selectedExplanation, setSelectedExplanation] = useState(0);

  const GetExplanation = () => {
    if (selectedExplanation === 2) return <LongBCIExplanation />;
    else if (selectedExplanation === 1) return <MidBCIExplanation />;
    return <ShortBCIExplanation />;
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

        {/* <button className={GetButtonClass(0)} onClick={() => setSelectedExplanation(0)}><BiShapeTriangle/></button>
            <button className={GetButtonClass(1)} onClick={() => setSelectedExplanation(1)}><BiShapeSquare/></button>
            <button className={GetButtonClass(2)} onClick={() => setSelectedExplanation(2)}><BiShapePolygon/></button> */}
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
