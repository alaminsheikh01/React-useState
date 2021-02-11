import React, { useState } from "react";
import "./App.css";
//import components
import CreatTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App(props) {
  //here is the place write normal js
  const [name, setName] = useState("Alamin Sheikh");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <h1>Hello from React</h1>
      <CreatTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
