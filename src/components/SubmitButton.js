import React from 'react';
import anime from 'animejs';
import { submitAnim } from '../animations';
import defaultStyling from '../defaultStyling';

const SubmitButton = () => {
  return (
    <div className="main-container flex column center-all">
      <button className="shadow submit" onClick={submitAnim}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
