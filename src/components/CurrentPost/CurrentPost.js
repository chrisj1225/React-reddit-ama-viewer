import React from 'react';

const CurrentPost = ({ question, answer, clicked }) => (
  <div>
    <h4>Selected Q & A:</h4>
    <p>Q: {question}</p>
    <p><strong>A: {answer}</strong></p>
    <button onClick={clicked}>Close</button>
  </div>
);

export default CurrentPost;