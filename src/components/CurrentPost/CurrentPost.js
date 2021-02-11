import React from 'react';

import classes from './CurrentPost.module.css';

const CurrentPost = ({ question, answer, clicked }) => (
  <div className={classes.CurrentPost}>
    <p>Q: {question}</p>
    <p><strong>A: {answer}</strong></p>
    <button onClick={clicked}>Close</button>
  </div>
);

export default CurrentPost;