import React from 'react';

import redditLogo from '../../assets/images/reddit-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
  <div className={classes.Logo}>
    <a href="/"><img src={redditLogo} alt="Reddit Logo" /></a>
  </div>
);

export default Logo;