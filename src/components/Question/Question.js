import React from 'react';

import classes from './Question.module.css';

const Question = ({ commenter, question, id, clicked }) => {
  return (
    <div className={classes.QuestionSection}>
      <p 
        className={classes.Question}
        onClick={() => clicked(id)}
      >
        Q: {question}
        <br />
        <br />
        <span style={{fontSize: "12px"}}>
          <i>asked by u/{commenter}</i>
        </span>
      </p>
      
    </div>
  );
}

export default Question;