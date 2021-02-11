import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([
      ...tweets,
      {
        message: textInput,
        id: uuidv4(),
      },
    ]);
    setTextInput("");
  };
  return (
    <div>
      <form onSubmit={submitTweetHandler}>
        <textarea
          value={textInput}
          onChange={userInputHandler}
          cols="30"
          rows="5"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTweet;
