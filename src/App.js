import React from "react";
import './App.css';
import Flashcard from "./components/flashcard";

function App() {
  return (
    //I will break this down into components. 
    //"flashcard.js" "wordcount.js"  "quote.js"
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Remember</h1>
        </div>
      </div>
      <Flashcard title="Bark" text="verb: a noise a dog makes"/>
      <Flashcard title="Meow" text="verb: a noise a cat makes"/>
      <Flashcard title="Hiss" text="verb: a noise a snake makes"/>
    </div>

  );
}

export default App;
