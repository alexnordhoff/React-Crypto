// import logo from './logo.svg';
import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const { createHash } = require('crypto');

function Sha() {
  const str = "Text to Hash:    ";
  const [enteredText, setEnteredText] = useState("");
  const [hash_256, set256Hash] = useState("");
  const [hash_512, set512Hash] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function hash(string) {
    set256Hash(createHash('sha256').update(string).digest('hex'));
    set512Hash(createHash('sha512').update(string).digest('hex'));

    setSubmitted(true);
    return
  }
  return (
    <div class="container">
      <header>
        <div class = "row" style={{alignContent: 'center'}}>
            <h1 class="display-10">
              Enter some text below to hash it!
            </h1>
            <hr/>
          <div>
                {str} 
                <input class="form-control" placeholder="Enter a Message" type="text" name="input" onChange={(e) => setEnteredText(e.target.value)}/>
                <button class="btn btn-primary" style={{margin:10}} type="submit" onClick={()=>hash(enteredText)}> Submit </button>
          </div>
        </div>
          <div class="row">
            <div >
            {submitted && 
              <div>
                <p style={{fontSize:12}}>
                  SHA-256 Hash Value:
                </p>
                <p>{hash_256}</p>
                <p style={{fontSize:12}}>
                  SHA-512 Hash Value:
                </p>
                <p>{hash_512}</p>
              </div>
            }
            </div>
          </div>
      </header>
    </div>
  );
}

export default Sha;
