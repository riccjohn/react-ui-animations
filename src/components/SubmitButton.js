import React from 'react';
import injectSheet from 'react-jss';
import { submitAnim } from '../animations';

const styles = {
  button: {
    border: 'none',
    fontSize: 15,
    padding: [10, 25],
    margin: 10,
    borderRadius: 5,
    color: '#fff',
    backgroundColor: '#2ab2ed',
    boxShadow: { x: 0, y: 4, blur: 8, color: 'rgba(0, 0, 0, 0.2)' },
  },
};

const SubmitButton = ({ classes }) => {
  return (
    <input
      type="button"
      id="button"
      className={classes.button + ' submit'}
      value="Submit"
      onClick={submitAnim}
    >
      {/* */}
    </input>
  );
};

export default injectSheet(styles)(SubmitButton);
