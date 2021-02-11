import React, { useState } from 'react';

import classes from './InputLink.module.css';

const InputLink = ({ addLink }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    addLink(inputValue);
  }

  return (
    <div className={classes.InputLink}>
      <strong>Enter Reddit AMA link below: </strong>
      <form>
        <input 
          type="text"
          value={inputValue}
          onChange={onChangeHandler} />
        <button
          onClick={onSubmitHandler}>Enter</button>
      </form>
      <i>example format: https://www.reddit.com/r/IAmA/comments/r4nd0m/i_am_john_doe_a_very_cool_guy_ama/</i>
    </div>
  );

}

export default InputLink;