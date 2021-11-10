// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const { createHash } = require('crypto');

function App() {
  const str = "Text to Encode:    ";
  const [enteredText, setEnteredText] = useState("");
  const [hash_256, set256Hash] = useState("");
  // const [cipher_aes, setAESCipher] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function hash(string) {
    set256Hash(createHash('sha256').update(string).digest('hex'));



    setSubmitted(true);
    return
  }

  return (
    <div class="container">
      <header>
        <div class = "row" style={{alignContent: 'left'}}>
            <h1 class="display-3">
              Enter some text below to begin the encoding: 
            </h1>
            <hr/>
          <div class="col-md-1"> hi</div>
          <div class="col-md-6">
                {str} 
                <input class="form-control" type="text" name="input" onChange={(e) => setEnteredText(e.target.value)}/>

              <button class="btn btn-primary" type="submit" onClick={()=>hash(enteredText)}> Submit </button>
          </div>
          <div class="col-md-5">
            <div >
            {submitted && 
              <div>
                <p style={{fontSize:12}}>
                  SHA-256 Hash Value: {hash_256}
                </p>
                {/* <p style={{fontSize:12}}>
                  AES Encoded Value: {cipher_aes}
                </p> */}
                </div>
            }
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
