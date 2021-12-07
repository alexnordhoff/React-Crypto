// import logo from './logo.svg';
import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MD5 from "crypto-js/md5";
import CryptoJS from "crypto-js";
import { Button, Card } from 'react-bootstrap';
const { createHash } = require('crypto');

function Sha() {
  const str = "Text to Hash:    ";
  const [enteredText, setEnteredText] = useState("");
  const [hash_256, set256Hash] = useState("");
  const [hash_512, set512Hash] = useState("");
  const [md5, setmd5Hash] = useState("");
  const [sha_3, setsha_3Hash] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function hash(string) {
    set256Hash(createHash('sha256').update(string).digest('hex'));
    set512Hash(createHash('sha512').update(string).digest('hex'));
    setmd5Hash(MD5(string).toString())
    setsha_3Hash(CryptoJS.SHA3(string, {outputLength: 256}).toString());
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
            {submitted && 
              <div class = "row">
                <div class="col-md-6" style={{paddingTop:10}}>
                  <Card>
                    <Card.Header as="h5">SHA-256</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {hash_256}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col-md-6" style={{paddingTop:10}}>
                  <Card>
                    <Card.Header as="h5">SHA-512</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {hash_512}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col-md-6" style={{paddingTop:10}}>
                  <Card>
                    <Card.Header as="h5">SHA-512/256</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {sha_3}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div class="col-md-6" style={{paddingTop:10}}>
                  <Card>
                    <Card.Header as="h5">MD5</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {md5}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            }
      </header>
    </div>
  );
}

export default Sha;
