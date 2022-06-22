import React from "react";
import './App.css';

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
      <div className="row">
        <div className="col">
          <div className="card">
            <h3 className="card-title">Bark</h3>
            <p className="card-text">verb: a noise a dog makes</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <h3 className="card-title">Meow</h3>
            <p className="card-text">verb: a noise a cat makes</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <h3 className="card-title">Hiss</h3>
            <p className="card-text">verb: a noise a snake makes</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
