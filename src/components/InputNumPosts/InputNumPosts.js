import React, { useState } from 'react';

const InputNumPosts = ({ addNumPosts }) => {
  const [inputNum, setInputNum] = useState(10);

  const onChangeHandler = (e) => {
    setInputNum(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addNumPosts(inputNum);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Select # of posts to view: &nbsp;
          <select value={inputNum} onChange={onChangeHandler}>
            <option value={5}>5</option>
            <option defaultValue value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </label>
        <input type="submit" value= "Go" />
        <br/><i>Note: Some posts may be Author remarks or <br/> stickied Mod posts & will not show below!</i>
      </form>
    </div>
  );

}

export default InputNumPosts;