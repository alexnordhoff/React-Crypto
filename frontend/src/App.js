// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';
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
    <div>
      <header>
        
        <div style={{alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
          <label>
            <p>
              Enter some text below to begin the encoding: 
            </p>
            {str} 
            <input type="text" name="input" onChange={(e) => setEnteredText(e.target.value)}/>
          </label>
          <input type="submit" value="Submit" onClick={()=>hash(enteredText)}/>
        </div>
        <div >
        {submitted && 
          <div style={{alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
            <p style={{fontSize:12}}>
              SHA-256 Hash Value: {hash_256}
            </p>

            {/* <p style={{fontSize:12}}>
              AES Encoded Value: {cipher_aes}
            </p> */}
          </div>
        }
      </div>
      </header>
    </div>
  );
}

export default App;
