import React from 'react';

import redditLogo from '../../assets/images/reddit-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={redditLogo} alt="Reddit Logo" />
  </div>
);

export default Logo;