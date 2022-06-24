import React from "react";

//will impolement a library of words and definitions, and use map to loop
//through the array 

function Flashcard(props){
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    ) 
}

export default Flashcard;