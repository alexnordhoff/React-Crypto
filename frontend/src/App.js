// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const { createHash } = require('crypto');

function App() {
  const str = "Text to Encode:    ";
  const [enteredText, setEnteredText] = useState("");
  const [hash_256, set256Hash] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function hash(string) {
    set256Hash(createHash('sha256').update(string).digest('hex'));
    


    setSubmitted(true);
    return
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter some text below to begin the encoding: 
        </p>
        <div>
          <label>
            {str} 
            <input type="text" name="input" onChange={(e) => setEnteredText(e.target.value)}/>
          </label>
          <input type="submit" value="Submit" onClick={()=>hash(enteredText)}/>
        </div>
        <div style={{textAlign: 'center', alignSelf: 'center'}}>
        {submitted && 
          <p style={{fontSize:12}}>
            SHA-256 Hash Value: {hash_256}
          </p>
        }
      </div>
      </header>
      
    </div>
  );
}

export default App;
