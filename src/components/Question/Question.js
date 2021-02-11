import React from 'react';

import classes from './Question.module.css';

const Question = ({ question, id, clicked }) => {
  return (
    <div className={classes.QuestionSection}>
      <p 
        className={classes.Question}
        onClick={() => clicked(id)}>Q: {question}</p>
    </div>
  );
}

export default Question;