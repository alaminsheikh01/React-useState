import React, { useEffect } from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteHandler = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteHandler}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
