import React from 'react';
import injectSheet from 'react-jss';
import { hamburgerAnim } from '../animations';

const styles = {
  line: {
    backgroundColor: '#000',
    height: 2,
    width: 35,
    margin: 4,
  },
};

const Hamburger = ({ classes }) => {
  return (
    <div className={classes.button} onClick={hamburgerAnim}>
      <div className={classes.line + ' top'}> </div>
      <div className={classes.line + ' mid'}> </div>
      <div className={classes.line + ' bottom'}> </div>
    </div>
  );
};

export default injectSheet(styles)(Hamburger);
