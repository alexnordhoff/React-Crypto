import NodeRSA from 'node-rsa';
import React, {useState} from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const nodeRSA = require("node-rsa");

export default function RSA() {
    const key = new NodeRSA({b:1024});
    let text = "this is a secret message";
    var encryptString = key.encrypt(text, 'base64');
    var public_key = key.exportKey('public');
    var private_key = key.exportKey('private');

    const textStyle = {
        width:"200px",
        overflow:"hidden",
        height:"1em",
        width: "6rem",
    }

    const spacing = {
        padding: "10px",
    }
    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <form>
                    <div className="form-group spacing">
                        <label for="Gen keys">Dont Have Public/Private Keys?</label>
                        <br/>
                        <button type="submit" className="btn btn-primary"> Generate</button>
                    </div>
                </form>
                <hr/>
                <form>
                    <div className="form-group spacing">
                        <label for="Enter a text you want to encrypt">Message to be Encrypted</label>
                        <textarea className="form-control" placeholder="Enter a Message"/> 
                        <label for="file">Please Upload your Public Key</label>
                        <br/>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                        <br/>
                        <button type="submit" className="btn btn-primary"> Encrypt</button>
                    </div>
                </form>
                <hr/>
                <form>
                    <div className="form-group spacing">
                        <label for="Enter something to decrypt">Secret to be decrypted</label>
                        <textarea className="form-control" placeholder="Enter a Message"/> 
                        <label for="file">Please Upload your Private Key</label>
                        <br/>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                        <br/>
                        <button type="submit" className="btn btn-primary"> Decrypt</button>
                    </div>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}
